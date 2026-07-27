// Funciones puras: reciben datos y devuelven resultados sin modificar la interfaz.

export function normalizeText(text = "") {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function filterParking(data, filters) {
  const searchValue = normalizeText(filters.search.trim());
  const maxPriceText = String(filters.maxPrice ?? "").trim();
  const maxPrice = Number(maxPriceText);

  return data.filter((item) => {
    const searchableText = normalizeText(`${item.name} ${item.zone}`);

    const matchesSearch =
      searchValue === "" || searchableText.includes(searchValue);

    const matchesZone =
      filters.zone === "all" || item.zone === filters.zone;

    const matchesAvailability =
      filters.availability === "all" ||
      (filters.availability === "available" && item.available) ||
      (filters.availability === "full" && !item.available);

    const matchesPrice =
      maxPriceText === "" ||
      (!Number.isNaN(maxPrice) && maxPrice >= 0 && item.price <= maxPrice);

    return (
      matchesSearch &&
      matchesZone &&
      matchesAvailability &&
      matchesPrice
    );
  });
}

export function sortParking(data, sortValue) {
  const copy = [...data];

  const strategies = {
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    "spaces-desc": (a, b) => b.spaces - a.spaces,
    recommended: (a, b) => {
      if (a.available !== b.available) {
        return Number(b.available) - Number(a.available);
      }
      return b.rating - a.rating;
    }
  };

  return copy.sort(strategies[sortValue] ?? strategies.recommended);
}

export function calculateKpis(data) {
  const total = data.length;
  const available = data.filter((item) => item.available).length;
  const spaces = data.reduce((sum, item) => sum + item.spaces, 0);
  const averagePrice =
    total === 0
      ? 0
      : data.reduce((sum, item) => sum + item.price, 0) / total;

  return { total, available, spaces, averagePrice };
}

export function processParkingData(data, filters) {
  const filtered = filterParking(data, filters);
  const sorted = sortParking(filtered, filters.sort);
  const kpis = calculateKpis(sorted);

  return { results: sorted, kpis };
}
