# Breda Vibe Code Workshop

> Open data en projectideeën om inwoners tijdens de Vibe Code-avond zelf kleine apps voor Breda te laten bouwen met hulp van AI.

## Wat zit erin?

Deze repository is een startpunt en databundel voor de workshop. Er staan open-dataset-snapshots en documentatie in; **er zit nog geen kant-en-klare webapp of startertemplate in**.

- 15 datasets over onder meer bomen, groen, voorzieningen, wijken en weer.
- Elke dataset is beschikbaar als CSV en JSON. De ruimtelijke JSON-bestanden zijn GeoJSON.
- Een overzicht van de onderwerpen, databronnen en passende datasets per appidee.

## Snel naar de juiste informatie

- [Onderwerpen en appideeën](docs/onderwerpen.md)
- [Datasets per onderwerp](docs/datasets-per-onderwerp.md)
- [Bronnen en beschikbare bestanden](docs/data-bronnen.md)
- [Datasetpakket: formaat, actualiteit en beperkingen](datasets/README.md)
- [Machineleesbaar datasetmanifest](datasets/manifest.json)

## Data gebruiken

Kies eerst een appidee in `docs/onderwerpen.md` en bekijk in `docs/datasets-per-onderwerp.md` welke databestanden daarbij passen. Het manifest bevat per dataset bronlinks, aantallen, ophaaldatum en bekende gebruiksvoorwaarden.

- `.json`: GeoJSON FeatureCollection voor kaartlagen; coördinaten zijn in EPSG:4326.
- `.csv`: tabulaire variant; de geometrie staat in de kolom `geometry` als GeoJSON-tekst.
- `datasets/README.md`: aanvullende informatie over herkomst en beperkingen.

De bestanden zijn momentopnamen, geen live feeds. De gemeentelijke gegevens zijn opgehaald op 9 november 2026. De bomen- en hoofdgroenstructuurbestanden zijn groot; laad ze niet automatisch allemaal in een browserapp. De weerhistorie is modeldata, geen lokale sensormeting. Bekijk de licentie- en actualiteitswaarschuwingen voordat je data verder verspreidt of in een app gebruikt.

## Lokaal werken aan een webapp

Voor een statische app met HTML, CSS en JavaScript is geen backend of database nodig. Als je browser met `fetch()` lokale databestanden moet laden, serveer de repository dan via HTTP in plaats van de pagina rechtstreeks als `file://` te openen. Python is hiervoor alleen een lokale webserver; dit start geen backend-app.

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open daarna `http://localhost:8000`. Op Windows kan dit commando gebruikt worden:

```powershell
py -m http.server 8000 --bind 127.0.0.1
```

Deze repository bevat nog geen `index.html`; voeg die toe voor een eigen app. Voor kaarttegels of externe databronnen kan internettoegang nodig zijn. Controleer de gebruiksvoorwaarden van de kaart- en databronaanbieders.

## Projectstructuur

```text
.
├── datasets/                   # CSV-, GeoJSON- en manifestbestanden
│   ├── README.md               # Dataformaat, herkomst en beperkingen
│   └── manifest.json           # Bronnen, aantallen, licenties en ophaaldatum
├── docs/
│   ├── data-bronnen.md         # Catalogus van bronnen en bestanden
│   ├── datasets-per-onderwerp.md # Welke datasets bij welke appideeën passen
│   └── onderwerpen.md          # Appideeën voor de workshop
└── README.md
```

## Actualiteit en bijdragen

Er is op dit moment geen delivery pipeline: de datasets worden niet automatisch vernieuwd. Controleer de oorspronkelijke bron en ververs veranderlijke gegevens wanneer actualiteit belangrijk is. Voeg bij nieuwe data altijd bron, ophaaldatum en licentie-informatie toe aan het manifest en de documentatie. Verzin geen ontbrekende waarden of historische context.
