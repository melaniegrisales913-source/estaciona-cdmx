// Responsabilidad exclusiva: leer controles y actualizar la interfaz.

export const elements = {
  search: document.getElementById("search"),
  zone: document.getElementById("zone"),
  availability: document.getElementById("availability"),
  maxPrice: document.getElementById("maxPrice"),
  sort: document.getElementById("sort"),
  clearFilters: document.getElementById("clearFilters"),
  parkingList: document.getElementById("parkingList"),
  emptyState: document.getElementById("emptyState"),
  errorState: document.getElementById("errorState"),
  resultsText: document.getElementById("resultsText"),
  activeFilters: document.getElementById("activeFilters"),
  totalKpi: document.getElementById("totalKpi"),
  availableKpi: document.getElementById("availableKpi"),
  averagePriceKpi: document.getElementById("averagePriceKpi"),
  spacesKpi: document.getElementById("spacesKpi")
};

export function loadZones(data) {
  const zones = [...new Set(data.map((item) => item.zone))].sort();

  zones.forEach((zone) => {
    const option = document.createElement("option");
    option.value = zone;
    option.textContent = zone;
    elements.zone.appendChild(option);
  });
}

export function readFilters() {
  return {
    search: elements.search.value,
    zone: elements.zone.value,
    availability: elements.availability.value,
    maxPrice: elements.maxPrice.value,
    sort: elements.sort.value
  };
}

export function resetFilters() {
  elements.search.value = "";
  elements.zone.value = "all";
  elements.availability.value = "all";
  elements.maxPrice.value = "";
  elements.sort.value = "recommended";
}

export function renderKpis(kpis) {
  elements.totalKpi.textContent = kpis.total;
  elements.availableKpi.textContent = kpis.available;
  elements.averagePriceKpi.textContent = `$${kpis.averagePrice.toFixed(2)}`;
  elements.spacesKpi.textContent = kpis.spaces;
}

function createParkingCard(item) {
  const card = document.createElement("article");
  card.className = "parking-card";

  card.innerHTML = `
    <div class="card-top">
      <div>
        <h3>${item.name}</h3>
        <span class="zone">${item.zone}</span>
      </div>
      <span class="badge ${item.available ? "available" : "full"}">
        ${item.available ? "Disponible" : "Sin lugares"}
      </span>
    </div>

    <div class="card-data">
      <div class="data-box">
        <span>Espacios libres</span>
        <strong>${item.spaces}</strong>
      </div>
      <div class="data-box">
        <span>Calificación</span>
        <strong>${item.rating} / 5</strong>
      </div>
    </div>

    <div class="card-footer">
      <div class="price">$${item.price} MXN / hora</div>
      <div class="schedule">${item.schedule}</div>
    </div>
  `;

  return card;
}

export function renderResults(results) {
  elements.parkingList.innerHTML = "";
  elements.parkingList.setAttribute("aria-busy", "false");
  elements.errorState.classList.add("hidden");

  if (results.length === 0) {
    elements.emptyState.classList.remove("hidden");
    elements.resultsText.textContent = "0 resultados encontrados";
    return;
  }

  elements.emptyState.classList.add("hidden");
  results.forEach((item) => {
    elements.parkingList.appendChild(createParkingCard(item));
  });

  elements.resultsText.textContent =
    `${results.length} resultado${results.length === 1 ? "" : "s"} encontrados`;
}

export function renderActiveFilters(filters) {
  const active = [];

  if (filters.search.trim()) active.push(`Búsqueda: ${filters.search.trim()}`);
  if (filters.zone !== "all") active.push(`Zona: ${filters.zone}`);
  if (filters.availability === "available") active.push("Solo disponibles");
  if (filters.availability === "full") active.push("Solo llenos");
  if (String(filters.maxPrice).trim()) active.push(`Máximo: $${filters.maxPrice}`);

  elements.activeFilters.textContent = active.join(" · ");
}

export function renderError(error) {
  console.error("Error al procesar la aplicación:", error);
  elements.parkingList.innerHTML = "";
  elements.emptyState.classList.add("hidden");
  elements.errorState.classList.remove("hidden");
  elements.resultsText.textContent = "Error al cargar resultados";
  elements.activeFilters.textContent = "";
  renderKpis({ total: 0, available: 0, spaces: 0, averagePrice: 0 });
}
