import assert from "node:assert/strict";
import {
  normalizeText,
  filterParking,
  sortParking,
  calculateKpis
} from "../js/logic.js";

const sample = [
  { name: "Ángel Parking", zone: "Roma", price: 40, available: true, spaces: 5, rating: 4.5 },
  { name: "Centro", zone: "Centro", price: 20, available: false, spaces: 0, rating: 4.0 }
];

assert.equal(normalizeText("ÁNGEL"), "angel");

const filteredBySearch = filterParking(sample, {
  search: "angel",
  zone: "all",
  availability: "all",
  maxPrice: ""
});
assert.equal(filteredBySearch.length, 1);

const filteredByAvailability = filterParking(sample, {
  search: "",
  zone: "all",
  availability: "available",
  maxPrice: ""
});
assert.equal(filteredByAvailability.length, 1);

const sorted = sortParking(sample, "price-asc");
assert.equal(sorted[0].price, 20);

const kpis = calculateKpis(sample);
assert.deepEqual(kpis, {
  total: 2,
  available: 1,
  spaces: 5,
  averagePrice: 30
});

console.log("Todas las pruebas pasaron correctamente.");
