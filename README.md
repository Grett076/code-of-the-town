# Breda Vibe Code Workshop

> Open data en projectideeën waarmee inwoners tijdens de Vibe Code-avond met hulp van AI eenvoudige apps voor Breda kunnen bouwen.

## Wat zit erin?

Deze repository bevat een optionele statische starterkaart, workshopideeën en een databundel met 22 datasets over Breda. De starter is bewust eenvoudig gehouden: HTML, CSS en JavaScript, zonder buildstap, backend of database.

- `index.html`, `style.css` en `app.js` vormen de webapp.
- `datasets/` bevat CSV- en JSON-bestanden plus een manifest met broninformatie. De uitbreiding bevat gemeentelijke laadpunten, Bredase parkeervoorzieningen en OpenStreetMap-kaartlagen voor toiletten, parkeren, parken, speelplekken en bushaltes.
- `docs/` bevat de workshoponderwerpen, databronnen en datasetkeuzes per onderwerp.

## Snel naar de juiste informatie

- [Start de webapp](#starten)
- [Workshoponderwerpen](docs/onderwerpen.md)
- [Datasets per onderwerp](docs/datasets-per-onderwerp.md)
- [Bronnen en beschikbare bestanden](docs/data-bronnen.md)
- [Datasetformaat, actualiteit en beperkingen](datasets/README.md)
- [Notice voor tijdelijke datasetkopieën](datasets/NOTICE.md)
- [Datasetlicenties en bronnen](datasets/manifest.json)
- [Licentie van de eigen appcode](LICENSE)

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

De kaart laadt [Leaflet 1.9.4](https://github.com/Leaflet/Leaflet/blob/v1.9.4/LICENSE) (BSD-2-Clause) van unpkg en gebruikt OpenStreetMap-kaarttegels. Daarvoor is internettoegang nodig; de kaartvermelding wordt in de app getoond. Leaflet en de kaarttegels vallen niet onder de appcode-licentie; gebruik ze volgens hun eigen licenties en voorwaarden. De standaardlaag is Watertappunten. Kies een andere laag in het menu; grote datasets worden pas na bevestiging geladen en kunnen even duren.

## Publiceren op GitHub Pages

De webapp is statisch en heeft geen buildstap nodig. Schakel Pages eenmalig in via **Settings → Pages → Build and deployment**: kies **Deploy from a branch**, selecteer `main` en `/(root)`, en sla op. Zodra dit is ingesteld, publiceert GitHub Pages een nieuwe versie na iedere push naar `main`; de URL en publicatiestatus staan op dezelfde Pages-pagina. Er is geen aparte workflow nodig.

Een private repository maakt de Pages-site niet automatisch privé. Controleer vóór publicatie of je GitHub-plan site-toegangsbeperking ondersteunt en welke zichtbaarheid in Pages is ingesteld.

## De data gebruiken of aanpassen

De webapp leest de lijst met kaartlagen uit `datasets/manifest.json` en laadt alleen de gekozen GeoJSON-laag.

- Ruimtelijke `.json`-bestanden zijn GeoJSON FeatureCollections met coördinaten in EPSG:4326.
- `.csv`-bestanden zijn bedoeld voor tabulaire tools; geometrie staat in de kolom `geometry` als GeoJSON-tekst.
- De weerhistorie is gewone JSON/CSV-tijdreeksdata, geen kaartlaag en geen lokale sensormeting.
- De gemeentelijke gegevens zijn momentopnamen van 9 november 2026, geen live feeds; de exports worden niet automatisch vernieuwd.
- Sommige bestanden zijn groot. Laad niet standaard alle datasets in de browser.
- De OSM-kaartlagen zijn momentopnamen uit de openbare Esri Nederland-service en vallen onder ODbL; gegevensdekking en toegankelijkheidsvelden kunnen onvolledig zijn. Zie `datasets/NOTICE.md` voor verplichte bronvermelding.
- Controleer de licentie- en actualiteitsnotities in `datasets/README.md` en `datasets/manifest.json` voordat je data verder verspreidt.

Om de starter aan te passen, begin bij `index.html`, `style.css` en `app.js`. De bedoeling is dat deelnemers deze bestanden met AI kunnen aanpassen en uitbreiden. Zie [datasets per onderwerp](docs/datasets-per-onderwerp.md) voor suggesties en beperkingen.

## Projectstructuur

```text
.
├── LICENSE                        # 0BSD voor alleen de eigen appbestanden
├── app.js                         # Datasetkeuze en kaartgedrag
├── index.html                     # Webapp
├── style.css                      # Opmaak
├── datasets/
│   ├── NOTICE.md                  # Tijdelijke snapshots en bronvoorwaarden
│   ├── README.md                  # Dataformaat, herkomst en beperkingen
│   ├── manifest.json              # Bronnen, aantallen, licenties en ophaaldatum
│   └── *.csv / *.json             # Datasetbestanden
├── docs/
│   ├── data-bronnen.md             # Catalogus van bronnen en bestanden
│   ├── datasets-per-onderwerp.md   # Welke datasets bij welke appideeën passen
│   └── onderwerpen.md              # Workshopideeën
└── README.md
```

## Licenties

`LICENSE` past 0BSD toe op alleen de eigen appbestanden `app.js`, `index.html` en `style.css`. De datasets volgen de voorwaarden van hun oorspronkelijke bronnen; de OSM-extracties vallen onder ODbL 1.0 en vereisen bronvermelding. Zie [`datasets/NOTICE.md`](datasets/NOTICE.md) en [`datasets/manifest.json`](datasets/manifest.json). De documentatie en externe componenten vallen niet onder de appcode-licentie.

## Bijdragen

Houd de starter begrijpelijk voor beginners: geen framework of backend toevoegen tenzij een onderwerp dat echt nodig heeft. Werk bij nieuwe of gewijzigde datasets ook het manifest en de broninformatie bij; verzin geen ontbrekende waarden of historische context.
