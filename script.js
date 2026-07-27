const parkingData = [
  { id: 1, name: "Parking Reforma 222", zone: "Reforma", price: 45, available: true, spaces: 18, schedule: "24 horas", rating: 4.7 },
  { id: 2, name: "Estacionamiento Polanco Central", zone: "Polanco", price: 60, available: true, spaces: 9, schedule: "06:00 - 23:00", rating: 4.8 },
  { id: 3, name: "Parking Roma Norte", zone: "Roma Norte", price: 40, available: false, spaces: 0, schedule: "07:00 - 01:00", rating: 4.3 },
  { id: 4, name: "Estacionamiento Condesa", zone: "Condesa", price: 38, available: true, spaces: 12, schedule: "24 horas", rating: 4.5 },
  { id: 5, name: "Parking Santa Fe", zone: "Santa Fe", price: 55, available: true, spaces: 25, schedule: "06:00 - 00:00", rating: 4.6 },
  { id: 6, name: "Estacionamiento Centro Histórico", zone: "Centro", price: 30, available: false, spaces: 0, schedule: "08:00 - 22:00", rating: 4.0 },
  { id: 7, name: "Parking Coyoacán", zone: "Coyoacán", price: 35, available: true, spaces: 7, schedule: "07:00 - 23:00", rating: 4.4 },
  { id: 8, name: "Estacionamiento Del Valle", zone: "Del Valle", price: 42, available: true, spaces: 15, schedule: "24 horas", rating: 4.6 },
  { id: 9, name: "Parking Narvarte", zone: "Narvarte", price: 33, available: false, spaces: 0, schedule: "07:00 - 23:00", rating: 4.1 },
  { id: 10, name: "Parking Universidad", zone: "Coyoacán", price: 28, available: true, spaces: 21, schedule: "06:30 - 23:30", rating: 4.2 },
  { id: 11, name: "Estacionamiento Insurgentes Sur", zone: "Del Valle", price: 48, available: true, spaces: 11, schedule: "24 horas", rating: 4.5 },
  { id: 12, name: "Parking Chapultepec", zone: "Reforma", price: 50, available: true, spaces: 14, schedule: "06:00 - 01:00", rating: 4.7 }
];

const elements = {
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

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function loadZones() {
  const zones = [...new Set(parkingData.map(item => item.zone))].sort();

  zones.forEach(zone => {
    const option = document.createElement("option");
    option.value = zone;
    option.textContent = zone;
    elements.zone.appendChild(option);
  });
}

function filterParking() {
  const searchValue = normalizeText(elements.search.value.trim());
  const selectedZone = elements.zone.value;
  const selectedAvailability = elements.availability.value;
  const maxPriceValue = elements.maxPrice.value.trim();
  const maxPrice = Number(maxPriceValue);

  let results = parkingData.filter(item => {
    const searchableText = normalizeText(`${item.name} ${item.zone}`);

    const matchesSearch =
      searchValue === "" || searchableText.includes(searchValue);

    const matchesZone =
      selectedZone === "all" || item.zone === selectedZone;

    const matchesAvailability =
      selectedAvailability === "all" ||
      (selectedAvailability === "available" && item.available) ||
      (selectedAvailability === "full" && !item.available);

    const matchesPrice =
      maxPriceValue === "" ||
      (!Number.isNaN(maxPrice) && item.price <= maxPrice);

    return matchesSearch && matchesZone && matchesAvailability && matchesPrice;
  });

  return sortParking(results);
}

function sortParking(results) {
  const sortValue = elements.sort.value;
  const copy = [...results];

  if (sortValue === "price-asc") {
    return copy.sort((a, b) => a.price - b.price);
  }

  if (sortValue === "price-desc") {
    return copy.sort((a, b) => b.price - a.price);
  }

  if (sortValue === "spaces-desc") {
    return copy.sort((a, b) => b.spaces - a.spaces);
  }

  return copy.sort((a, b) => {
    if (a.available !== b.available) {
      return Number(b.available) - Number(a.available);
    }
    return b.rating - a.rating;
  });
}

function updateKpis(results) {
  const total = results.length;
  const available = results.filter(item => item.available).length;
  const totalSpaces = results.reduce((sum, item) => sum + item.spaces, 0);
  const averagePrice =
    total === 0
      ? 0
      : results.reduce((sum, item) => sum + item.price, 0) / total;

  elements.totalKpi.textContent = total;
  elements.availableKpi.textContent = available;
  elements.averagePriceKpi.textContent = `$${averagePrice.toFixed(2)}`;
  elements.spacesKpi.textContent = totalSpaces;
}

function getActiveFiltersText() {
  const filters = [];

  if (elements.search.value.trim()) {
    filters.push(`Búsqueda: ${elements.search.value.trim()}`);
  }

  if (elements.zone.value !== "all") {
    filters.push(`Zona: ${elements.zone.value}`);
  }

  if (elements.availability.value === "available") {
    filters.push("Solo disponibles");
  }

  if (elements.availability.value === "full") {
    filters.push("Solo llenos");
  }

  if (elements.maxPrice.value.trim()) {
    filters.push(`Máximo: $${elements.maxPrice.value}`);
  }

  return filters.join(" · ");
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

function render() {
  try {
    const results = filterParking();

    elements.parkingList.innerHTML = "";
    elements.errorState.classList.add("hidden");
    elements.activeFilters.textContent = getActiveFiltersText();

    if (results.length === 0) {
      elements.emptyState.classList.remove("hidden");
      elements.resultsText.textContent = "0 resultados encontrados";
    } else {
      elements.emptyState.classList.add("hidden");

      results.forEach(item => {
        elements.parkingList.appendChild(createParkingCard(item));
      });

      elements.resultsText.textContent =
        `${results.length} resultado${results.length === 1 ? "" : "s"} encontrados`;
    }

    updateKpis(results);
  } catch (error) {
    console.error("Error al procesar los datos:", error);
    elements.parkingList.innerHTML = "";
    elements.emptyState.classList.add("hidden");
    elements.errorState.classList.remove("hidden");
    elements.resultsText.textContent = "Error al cargar resultados";
    elements.activeFilters.textContent = "";
    updateKpis([]);
  }
}

function clearFilters() {
  elements.search.value = "";
  elements.zone.value = "all";
  elements.availability.value = "all";
  elements.maxPrice.value = "";
  elements.sort.value = "recommended";
  render();
}

[
  elements.search,
  elements.zone,
  elements.availability,
  elements.maxPrice,
  elements.sort
].forEach(element => {
  element.addEventListener("input", render);
  element.addEventListener("change", render);
});

elements.clearFilters.addEventListener("click", clearFilters);

loadZones();
render();
