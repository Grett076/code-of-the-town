# Breda Vibe Code Workshop

> Open data en projectideeën waarmee inwoners tijdens de Vibe Code-avond met hulp van AI eenvoudige apps voor Breda kunnen bouwen.

## Wat zit erin?

Deze repository bevat een optionele statische starterkaart, workshopideeën en een databundel met 15 datasets over Breda. De starter is bewust eenvoudig gehouden: HTML, CSS en JavaScript, zonder buildstap, backend of database.

- `index.html`, `style.css` en `app.js` vormen de webapp.
- `datasets/` bevat CSV- en JSON-bestanden plus een manifest met broninformatie.
- `docs/` bevat de workshoponderwerpen, databronnen en datasetkeuzes per onderwerp.

## Snel naar de juiste informatie

- [Start de webapp](#starten)
- [Workshoponderwerpen](docs/onderwerpen.md)
- [Datasets per onderwerp](docs/datasets-per-onderwerp.md)
- [Bronnen en beschikbare bestanden](docs/data-bronnen.md)
- [Datasetformaat, actualiteit en beperkingen](datasets/README.md)
- [Machineleesbaar datasetmanifest](datasets/manifest.json)

## Starten

Vereist: een moderne browser en Python 3 om lokaal een eenvoudige webserver te starten. Python wordt hier **niet** als backend gebruikt; de webapp leest de statische bestanden rechtstreeks.

Start vanuit de projectmap:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open vervolgens <http://localhost:8000>. Op Windows kan dit commando gebruikt worden:

```powershell
py -m http.server 8000 --bind 127.0.0.1
```

De kaart gebruikt Leaflet en OpenStreetMap-kaarttegels. Daarvoor is internettoegang nodig; de kaartvermelding wordt in de app getoond. De standaardlaag is Watertappunten. Kies een andere laag in het menu; grote datasets worden pas na bevestiging geladen en kunnen even duren.

## De data gebruiken of aanpassen

De webapp leest de lijst met kaartlagen uit `datasets/manifest.json` en laadt alleen de gekozen GeoJSON-laag.

- Ruimtelijke `.json`-bestanden zijn GeoJSON FeatureCollections met coördinaten in EPSG:4326.
- `.csv`-bestanden zijn bedoeld voor tabulaire tools; geometrie staat in de kolom `geometry` als GeoJSON-tekst.
- De weerhistorie is gewone JSON/CSV-tijdreeksdata, geen kaartlaag en geen lokale sensormeting.
- De gemeentelijke gegevens zijn momentopnamen van 9 november 2026, geen live feeds. Er is geen automatische delivery pipeline.
- Sommige bestanden zijn groot. Laad niet standaard alle datasets in de browser.
- Controleer de licentie- en actualiteitsnotities in `datasets/README.md` en `datasets/manifest.json` voordat je data verder verspreidt.

Om de starter aan te passen, begin bij `index.html`, `style.css` en `app.js`. De bedoeling is dat deelnemers deze bestanden met AI kunnen aanpassen en uitbreiden. Zie [datasets per onderwerp](docs/datasets-per-onderwerp.md) voor suggesties en beperkingen.

## Projectstructuur

```text
.
├── app.js                         # Datasetkeuze en kaartgedrag
├── index.html                     # Webapp
├── style.css                      # Opmaak
├── datasets/
│   ├── README.md                  # Dataformaat, herkomst en beperkingen
│   ├── manifest.json              # Bronnen, aantallen, licenties en ophaaldatum
│   └── *.csv / *.json             # Datasetbestanden
├── docs/
│   ├── data-bronnen.md             # Catalogus van bronnen en bestanden
│   ├── datasets-per-onderwerp.md   # Welke datasets bij welke appideeën passen
│   └── onderwerpen.md              # Workshopideeën
└── README.md
```

## Bijdragen

Houd de starter begrijpelijk voor beginners: geen framework of backend toevoegen tenzij een onderwerp dat echt nodig heeft. Werk bij nieuwe of gewijzigde datasets ook het manifest en de broninformatie bij; verzin geen ontbrekende waarden of historische context.
