const parkingData=[
{id:1,name:"Parking Reforma 222",zone:"Reforma",price:45,available:true,spaces:18,schedule:"24 horas"},
{id:2,name:"Estacionamiento Polanco Central",zone:"Polanco",price:60,available:true,spaces:9,schedule:"06:00 - 23:00"},
{id:3,name:"Parking Roma Norte",zone:"Roma Norte",price:40,available:false,spaces:0,schedule:"07:00 - 01:00"},
{id:4,name:"Estacionamiento Condesa",zone:"Condesa",price:38,available:true,spaces:12,schedule:"24 horas"},
{id:5,name:"Parking Santa Fe",zone:"Santa Fe",price:55,available:true,spaces:25,schedule:"06:00 - 00:00"},
{id:6,name:"Estacionamiento Centro Histórico",zone:"Centro",price:30,available:false,spaces:0,schedule:"08:00 - 22:00"},
{id:7,name:"Parking Coyoacán",zone:"Coyoacán",price:35,available:true,spaces:7,schedule:"07:00 - 23:00"},
{id:8,name:"Estacionamiento Del Valle",zone:"Del Valle",price:42,available:true,spaces:15,schedule:"24 horas"},
{id:9,name:"Parking Narvarte",zone:"Narvarte",price:33,available:false,spaces:0,schedule:"07:00 - 23:00"}
];
const e={search:document.getElementById("search"),zone:document.getElementById("zone"),availability:document.getElementById("availability"),maxPrice:document.getElementById("maxPrice"),clearFilters:document.getElementById("clearFilters"),parkingList:document.getElementById("parkingList"),emptyState:document.getElementById("emptyState"),errorState:document.getElementById("errorState"),resultsText:document.getElementById("resultsText"),totalKpi:document.getElementById("totalKpi"),availableKpi:document.getElementById("availableKpi"),averagePriceKpi:document.getElementById("averagePriceKpi")};
function loadZones(){[...new Set(parkingData.map(p=>p.zone))].sort().forEach(zone=>{const o=document.createElement("option");o.value=zone;o.textContent=zone;e.zone.appendChild(o)})}
function normalizeText(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}
function getFilteredParking(){const s=normalizeText(e.search.value.trim()),z=e.zone.value,a=e.availability.value,m=Number(e.maxPrice.value);return parkingData.filter(p=>{const text=normalizeText(`${p.name} ${p.zone}`);const ms=s===""||text.includes(s);const mz=z==="all"||p.zone===z;const ma=a==="all"||(a==="available"&&p.available)||(a==="full"&&!p.available);const mp=e.maxPrice.value===""||p.price<=m;return ms&&mz&&ma&&mp})}
function updateKpis(r){const total=r.length,available=r.filter(p=>p.available).length,avg=total===0?0:r.reduce((sum,p)=>sum+p.price,0)/total;e.totalKpi.textContent=total;e.availableKpi.textContent=available;e.averagePriceKpi.textContent=`$${avg.toFixed(2)}`}
function createCard(p){const c=document.createElement("article");c.className="parking-card";c.innerHTML=`<div class="card-top"><div><h3>${p.name}</h3><p>${p.zone}</p></div><span class="badge ${p.available?"available":"full"}">${p.available?"Disponible":"Lleno"}</span></div><p><strong>Horario:</strong> ${p.schedule}</p><p><strong>Espacios libres:</strong> ${p.spaces}</p><div class="price">$${p.price} MXN / hora</div>`;return c}
function render(){try{const r=getFilteredParking();e.parkingList.innerHTML="";e.errorState.classList.add("hidden");if(r.length===0){e.emptyState.classList.remove("hidden");e.resultsText.textContent="0 resultados"}else{e.emptyState.classList.add("hidden");r.forEach(p=>e.parkingList.appendChild(createCard(p)));e.resultsText.textContent=`${r.length} resultado${r.length===1?"":"s"}`}updateKpis(r)}catch(err){console.error(err);e.parkingList.innerHTML="";e.emptyState.classList.add("hidden");e.errorState.classList.remove("hidden");e.resultsText.textContent="Error al cargar resultados";updateKpis([])}}
function clearFilters(){e.search.value="";e.zone.value="all";e.availability.value="all";e.maxPrice.value="";render()}
[e.search,e.zone,e.availability,e.maxPrice].forEach(x=>x.addEventListener("input",render));e.clearFilters.addEventListener("click",clearFilters);loadZones();render();
