const status = document.querySelector("#status");
const datasetSelect = document.querySelector("#dataset-select");
const datasetSummary = document.querySelector("#dataset-summary");
const datasetLicense = document.querySelector("#dataset-license");
const datasetSource = document.querySelector("#dataset-source");

if (!window.L) {
  status.textContent = "De kaart kon niet laden. Controleer je internetverbinding en herlaad de pagina.";
  throw new Error("Leaflet is niet geladen.");
}

const map = L.map("map").setView([51.5866, 4.7757], 12);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap-bijdragers</a>',
}).addTo(map);

let activeLayer;
let activeRequest;
let selectedDataset;

function makePopup(properties) {
  const list = document.createElement("dl");
  list.className = "feature-properties";

  for (const [key, value] of Object.entries(properties).slice(0, 10)) {
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = key;
    description.textContent = value == null ? "—" : String(value);
    list.append(term, description);
  }

  return list;
}

function showFeature(feature, layer) {
  if (feature.properties) layer.bindPopup(makePopup(feature.properties));
}

function showLargeDatasetWarning(dataset) {
  return dataset.records <= 5000 || window.confirm(
    `${dataset.title} bevat ${dataset.records.toLocaleString("nl-NL")} records. Laden en tekenen kan even duren. Doorgaan?`,
  );
}

async function loadDataset(dataset) {
  if (!showLargeDatasetWarning(dataset)) {
    datasetSelect.value = selectedDataset.slug;
    return;
  }

  selectedDataset = dataset;
  activeRequest?.abort();
  activeRequest = new AbortController();
  activeLayer?.remove();
  activeLayer = undefined;
  status.textContent = `${dataset.title} laden…`;
  datasetSummary.textContent = `${dataset.records.toLocaleString("nl-NL")} objecten`;
  datasetLicense.textContent = `Gebruik: ${dataset.license}`;
  let sourceUrl;
  try {
    sourceUrl = new URL(dataset.source);
  } catch {
    status.textContent = "De bronlink is ongeldig.";
    return;
  }
  if (sourceUrl.protocol !== "https:") {
    status.textContent = "De bronlink is ongeldig.";
    return;
  }
  datasetSource.href = sourceUrl.href;
  datasetSource.hidden = false;

  try {
    const response = await fetch(`./datasets/${dataset.slug}.json`, {
      signal: activeRequest.signal,
    });
    if (!response.ok) throw new Error(`Dataset laden mislukt (${response.status}).`);

    const data = await response.json();
    if (data.type !== "FeatureCollection" || !Array.isArray(data.features)) {
      throw new Error("Dit bestand bevat geen GeoJSON FeatureCollection.");
    }

    activeLayer = L.geoJSON(data, {
      pointToLayer: (_feature, latlng) => L.circleMarker(latlng, {
        radius: 6,
        color: "#155c40",
        weight: 1.5,
        fillColor: "#47a875",
        fillOpacity: 0.85,
      }),
      style: {
        color: "#155c40",
        weight: 1.5,
        fillColor: "#47a875",
        fillOpacity: 0.3,
      },
      onEachFeature: showFeature,
    }).addTo(map);

    const bounds = activeLayer.getBounds();
    if (bounds.isValid()) map.fitBounds(bounds.pad(0.08), { maxZoom: 15 });
    status.textContent = `${data.features.length.toLocaleString("nl-NL")} objecten op de kaart.`;
  } catch (error) {
    if (error.name === "AbortError") return;
    status.textContent = error.message;
  }
}

async function start() {
  try {
    const response = await fetch("./datasets/manifest.json");
    if (!response.ok) throw new Error("Het datasetmanifest kon niet worden geladen.");

    const manifest = await response.json();
    if (!Array.isArray(manifest.datasets)) throw new Error("Het manifest heeft geen datasets-lijst.");

    const datasets = manifest.datasets.filter((dataset) => !dataset.source_api);
    console.assert(datasets.some((dataset) => dataset.slug === "watertappunten"), "Standaarddataset ontbreekt");

    datasetSelect.replaceChildren();
    for (const dataset of datasets) {
      const option = document.createElement("option");
      option.value = dataset.slug;
      option.textContent = `${dataset.title} (${dataset.records.toLocaleString("nl-NL")})`;
      datasetSelect.append(option);
    }

    datasetSelect.disabled = false;
    const initial = datasets.find((dataset) => dataset.slug === "watertappunten") ?? datasets[0];
    datasetSelect.value = initial.slug;
    datasetSelect.addEventListener("change", () => {
      const choice = datasets.find((dataset) => dataset.slug === datasetSelect.value);
      if (choice) loadDataset(choice);
    });
    await loadDataset(initial);
  } catch (error) {
    status.textContent = error.message;
  }
}

start();
