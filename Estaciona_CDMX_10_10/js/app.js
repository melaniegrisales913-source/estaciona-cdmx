import { parkingData } from "./data.js";
import { processParkingData } from "./logic.js";
import {
  elements,
  loadZones,
  readFilters,
  resetFilters,
  renderActiveFilters,
  renderError,
  renderKpis,
  renderResults
} from "./ui.js";

// Controlador principal: coordina datos, lógica y vista.
function updateApplication() {
  try {
    elements.parkingList.setAttribute("aria-busy", "true");

    const filters = readFilters();
    const { results, kpis } = processParkingData(parkingData, filters);

    renderResults(results);
    renderKpis(kpis);
    renderActiveFilters(filters);
  } catch (error) {
    renderError(error);
  }
}

function registerEvents() {
  const controls = [
    elements.search,
    elements.zone,
    elements.availability,
    elements.maxPrice,
    elements.sort
  ];

  controls.forEach((control) => {
    control.addEventListener("input", updateApplication);
    control.addEventListener("change", updateApplication);
  });

  elements.clearFilters.addEventListener("click", () => {
    resetFilters();
    updateApplication();
  });
}

function initializeApplication() {
  loadZones(parkingData);
  registerEvents();
  updateApplication();
}

initializeApplication();
