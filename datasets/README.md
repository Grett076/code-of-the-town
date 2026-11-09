# Datasetpakket Breda Vibe Code Workshop

Snapshots ter voorbereiding op de Vibe Code-avond van 26 november. Zie ook de [Notice voor tijdelijke datasetkopieën](NOTICE.md). Elk ruimtelijk bestand bestaat uit een GeoJSON FeatureCollection (`.json`) en een CSV (`.csv`). In CSV staat de geometrie in de kolom `geometry` als GeoJSON-object in EPSG:4326; `source_layer` bewaart de bronlaag. De weerbestanden bevatten records per uur.

## Datasets en ideeën

- **Bomen** — `bomen.csv` / `bomen.json` (117,092 records). Ideeën: Bredase Bomenkaart, Breda Buiten, Breda Hitteproof, Wat staat er om de hoek?, Open Data explorer.
- **Vergunningplichtige houtopstanden** — `houtopstanden.csv` / `houtopstanden.json` (13,944 records). Ideeën: Bredase Bomenkaart, Breda Buiten, Open Data explorer.
- **Hoofdgroenstructuur** — `hoofdgroenstructuur.csv` / `hoofdgroenstructuur.json` (26,041 records). Ideeën: Breda Buiten, Breda Hitteproof, Breda in 3 minuten, Open Data explorer.
- **Zitbanken** — `zitbanken.csv` / `zitbanken.json` (2,858 records). Ideeën: Breda Buiten, Verborgen Breda, Wat staat er om de hoek?, Open Data explorer.
- **Wijkdeals** — `wijkdeals.csv` / `wijkdeals.json` (1,805 records). Ideeën: Breda Buiten, Breda in 3 minuten, Verborgen Breda, Open Data explorer.
- **Hondenuitlaatplaatsen** — `hondenuitlaatplaatsen.csv` / `hondenuitlaatplaatsen.json` (121 records). Ideeën: Breda Buiten, Wat staat er om de hoek?, Open Data explorer.
- **Watertappunten** — `watertappunten.csv` / `watertappunten.json` (64 records). Ideeën: Breda Buiten, Breda Hitteproof, Breda op de fiets, Wat staat er om de hoek?, Open Data explorer.
- **Bladkorven** — `bladkorven.csv` / `bladkorven.json` (266 records). Ideeën: Breda Buiten, Wat staat er om de hoek?, Open Data explorer.
- **Groene daken en groene gevels (NRK bouwwerken)** — `groene_daken_gevels.csv` / `groene_daken_gevels.json` (1,588 records). Ideeën: Breda Hitteproof, Breda Buiten, Open Data explorer.
- **Sportaccommodaties** — `sportaccommodaties.csv` / `sportaccommodaties.json` (337 records). Ideeën: Breda Buiten, Breda in 3 minuten, Wat staat er om de hoek?, Open Data explorer.
- **Fietsenstallingen** — `fietsenstallingen.csv` / `fietsenstallingen.json` (9 records). Ideeën: Breda op de fiets, Breda Buiten, Wat staat er om de hoek?, Open Data explorer.
- **Containerverzamelplaatsen** — `containerverzamelplaatsen.csv` / `containerverzamelplaatsen.json` (5,056 records). Ideeën: Breda in 3 minuten, Wat staat er om de hoek?, Open Data explorer.
- **Wijken** — `wijken.csv` / `wijken.json` (11 records). Ideeën: Breda in 3 minuten, Wat staat er om de hoek?, Open Data explorer.
- **Buurten** — `buurten.csv` / `buurten.json` (56 records). Ideeën: Breda in 3 minuten, Wat staat er om de hoek?, Open Data explorer.
- **Weerhistorie Breda** — `weer_breda_90_dagen.csv` / `weer_breda_90_dagen.json` (2,160 records). Ideeën: Breda Hitteproof, Breda in 3 minuten, Open Data explorer.

## Herkomst, licentie en actualiteit

- De gemeentelijke gegevens zijn momentopnamen van de openbare Breda-bronnen, opgehaald op 9 november 2026. Bronlinks en aangegeven gebruiksvoorwaarden staan per dataset in `manifest.json` en als metadata bovenaan de GeoJSON-bestanden. De bronnen zijn statische object-/gebiedsregistraties en hebben daarom geen kunstmatige tijdlijnen.
- In deze repository staat geen delivery pipeline; dit zijn eenmalige exports en ze worden niet automatisch bijgewerkt. Ververs veranderlijke datasets kort voor de avond van 26 november.
- `groene_daken_gevels` is een NRK-gebouwclassificatielaag, geen bevestigde inventaris van bestaande groene daken of gevels. De bron vermeldt `Openbaar`, maar geen specifieke hergebruiklicentie; controleer de bronvoorwaarden voor herdistributie.
- `containerverzamelplaatsen` is openbaar beschikbaar, maar de ArcGIS-bron vermeldt geen specifieke hergebruiklicentie; controleer de bronvoorwaarden voordat je deze dataset verder verspreidt.
- `weer_breda_90_dagen` bevat uurlijkse ERA5-Land reanalyse van 6 augustus t/m 3 november 2026, geen lokale sensormetingen. De archive API liep bij ophalen achter op de kalenderdatum; dit is dus geen volledige 90-dagenperiode tot de avond zelf. Vermeld Open-Meteo als bron (CC BY 4.0); gebruik dit niet voor actuele veiligheidswaarschuwingen.
- Er zijn geen 90 dagen historie voor de gemeentelijke kaartlagen gepubliceerd; daarom worden deze niet als tijdreeks voorgesteld.
- `Verborgen Breda` heeft geen bijbehorende verborgen-plekken/erfgoeddataset in de opgegeven bronnen. Bankjes en wijkdeals kunnen als startpunt dienen, maar vormen geen toeristische POI-inventaris.
- De fietsenstallingenbron is opgehaald via het werkende openbare ArcGIS-item; de onjuiste ID uit [`docs/data-bronnen.md`](../docs/data-bronnen.md) is gecorrigeerd.

## Gebruik in apps

Gebruik GeoJSON rechtstreeks in webkaarten en CSV voor spreadsheets of eenvoudige data-import. Controleer voor apps die langer gebruikt worden de catalogusbron op wijzigingen en actualiteit.
