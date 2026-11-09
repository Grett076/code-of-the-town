# Datasets per onderwerp

Gebruik per dataset de `.json`- of `.csv`-variant. Ruimtelijke JSON-bestanden zijn GeoJSON; in CSV staat de geometrie in de kolom `geometry` als GeoJSON-tekst. De datasets zijn momentopnamen, geen live feeds. Zie ook [bronnen en bestanden](data-bronnen.md) en het [datasetpakket](../datasets/README.md).

## Breda Buiten

Voor een wandel- of fietskaart met groen en voorzieningen:

- [Bomen](../datasets/bomen.json) / [CSV](../datasets/bomen.csv) voor boomlocaties en kenmerken.
- [Hoofdgroenstructuur](../datasets/hoofdgroenstructuur.json) / [CSV](../datasets/hoofdgroenstructuur.csv) voor groene gebieden.
- [Parken](../datasets/parken.json) en [speelplekken](../datasets/speelplekken.json) als aanvullende OpenStreetMap-kaartlagen.
- [Zitbanken](../datasets/zitbanken.json), [watertappunten](../datasets/watertappunten.json) en [hondenuitlaatplaatsen](../datasets/hondenuitlaatplaatsen.json) voor stops en voorzieningen; voor elk is ook een CSV beschikbaar.
- [Wijkdeals](../datasets/wijkdeals.json), [sportaccommodaties](../datasets/sportaccommodaties.json) en [fietsenstallingen](../datasets/fietsenstallingen.json) als aanvullende kaartlagen.
- [Vergunningplichtige houtopstanden](../datasets/houtopstanden.json) als extra laag met meerdere typen houtopstanden.

## Bredase Bomenkaart

- [Bomen](../datasets/bomen.json) is de hoofdlaag met bomen en kenmerken.
- [Vergunningplichtige houtopstanden](../datasets/houtopstanden.json) geeft aanvullende houtopstanden en vergunningcontext.

De houtopstandenlaag bevat verschillende categorieën en kan overlappen met de bomenregistratie. Tel beide bestanden niet zonder controle bij elkaar op alsof het unieke bomen zijn.

## Breda in 3 minuten

Voor een eenvoudige wijkvergelijker:

- Gebruik [wijken](../datasets/wijken.json) en [buurten](../datasets/buurten.json) als geografische grenzen.
- Combineer deze met [bomen](../datasets/bomen.json), [hoofdgroenstructuur](../datasets/hoofdgroenstructuur.json), [sportaccommodaties](../datasets/sportaccommodaties.json), [wijkdeals](../datasets/wijkdeals.json) en [containerverzamelplaatsen](../datasets/containerverzamelplaatsen.json). Tel bijvoorbeeld voorzieningen per wijk of buurt en toon de uitkomst op de kaart.

Wijken en buurten bevatten grenzen, geen volledige set sociale of demografische indicatoren. Een telling van voorzieningen is dus geen algemene maat voor leefbaarheid of kwaliteit.

## Verborgen Breda

- [Wijkdeals](../datasets/wijkdeals.json) en [zitbanken](../datasets/zitbanken.json) kunnen startpunten bieden voor een route of verhalen van inwoners.
- [Bomen](../datasets/bomen.json) en [hoofdgroenstructuur](../datasets/hoofdgroenstructuur.json) kunnen groene locaties toevoegen.

Er is geen dataset met verborgen plekken, erfgoed of toeristische verhalen aangeleverd. Deze bronnen identificeren die plekken niet vanzelf; verzin daarom geen historische claims op basis van alleen de kaartdata.

## Breda op de fiets

- [Fietsenstallingen](../datasets/fietsenstallingen.json) voor fietsparkeerlocaties.
- [Watertappunten](../datasets/watertappunten.json) en [sportaccommodaties](../datasets/sportaccommodaties.json) als praktische stops.
- [Bomen](../datasets/bomen.json) en [hoofdgroenstructuur](../datasets/hoofdgroenstructuur.json) als groene context.

De fietsenstallingendataset bevat 9 records en is mogelijk niet volledig. Er zijn geen fietspaden, routes, wegwerkzaamheden of actuele verkeersgegevens in dit pakket; gebruik het niet als fietsrouteplanner zonder aanvullende bronnen.

## Breda Elektrisch

- [Oplaadpunten elektrische voertuigen](../datasets/oplaadpunten.json) voor publieke laadpunten in de openbare ruimte.

De status in deze bron is geen live informatie over bezetting of werking en de gegevens worden onregelmatig bijgewerkt.

## Breda Toegankelijk

- [Toiletten](../datasets/toiletten.json) met rolstoelstatus of openingstijden wanneer die in OpenStreetMap zijn vastgelegd.
- [Bushaltes met rolstoelstatus](../datasets/rolstoelhaltes.json); dit bevat alleen haltes met een expliciet vastgelegde status.
- [Parkeerlocaties en -plaatsen](../datasets/parkeerplaatsen.json) als algemene OSM-parkeerlaag.
- [Parkeervoorzieningen Breda](../datasets/parkeervoorzieningen.json) voor 9 locaties uit de CC0-parkeerfeed.

Er is in de gecontroleerde openbare bronnen geen aparte Bredase dataset gevonden die gehandicaptenparkeerplaatsen betrouwbaar aanwijst. De OSM-service geeft daarvoor geen bruikbare status; leid die niet af uit een gewone parkeerlocatie. OSM-dekking kan onvolledig zijn en een ontbrekende toegankelijkheidsstatus betekent niet dat iets ontoegankelijk is.

## Breda Hitteproof

- [Bomen](../datasets/bomen.json) en [hoofdgroenstructuur](../datasets/hoofdgroenstructuur.json) voor groen in de omgeving.
- [Watertappunten](../datasets/watertappunten.json) voor drinkwaterlocaties.
- [Weerhistorie Breda](../datasets/weer_breda_90_dagen.json) voor een voorbeeld van historische temperatuur, gevoelstemperatuur, luchtvochtigheid, neerslag en wind.
- [Groene daken en groene gevels](../datasets/groene_daken_gevels.json) alleen als extra gebouwclassificatielaag.

De weerdata is ERA5-Land-reanalyse, geen lokale sensormeting of actuele weersverwachting; ze eindigt op 3 november 2026. De NRK-laag classificeert bouwwerken/criteria en bevestigt niet dat een dak of gevel daadwerkelijk groen is. Presenteer deze gegevens dus niet als gemeten verkoeling of bewezen groene daken.

## Wat staat er om de hoek?

Gebruik de browserlocatie of een aparte geocoder om een middelpunt te bepalen. Zoek daarna nabijgelegen locaties in bijvoorbeeld:

- [Bomen](../datasets/bomen.json), [zitbanken](../datasets/zitbanken.json), [watertappunten](../datasets/watertappunten.json), [hondenuitlaatplaatsen](../datasets/hondenuitlaatplaatsen.json), [parken](../datasets/parken.json), [speelplekken](../datasets/speelplekken.json) en [toiletten](../datasets/toiletten.json).
- Voeg [fietsenstallingen](../datasets/fietsenstallingen.json), [bladkorven](../datasets/bladkorven.json), [wijkdeals](../datasets/wijkdeals.json) en [containerverzamelplaatsen](../datasets/containerverzamelplaatsen.json) toe als de gebruiker die voorzieningen zoekt.
- Gebruik [wijken](../datasets/wijken.json) en [buurten](../datasets/buurten.json) om de gevonden plek in een gebied te plaatsen.

Er is geen postcode-naar-locatiebestand meegeleverd. Vraag alleen om locatie als de app die nodig heeft en leg uit waarvoor die wordt gebruikt.

## Breda Open Data explorer voor mensen

Alle datasets kunnen als doorzoekbare bronnen dienen. Begin met het [manifest](../datasets/manifest.json) voor namen, bronlinks, aantallen en gebruiksvoorwaarden. Laat een chatbot antwoorden met bronverwijzingen en onderscheid maken tussen feiten uit de dataset en eigen uitleg. Gebruik geen geometrie als gewone tekstcontext als ruimtelijke zoekopdrachten volstaan.

## Bronnen en beperkingen

- De gemeentelijke gegevens zijn opgehaald op 9 november 2026 en worden niet automatisch bijgewerkt. Zie [bronnen en bestanden](data-bronnen.md) en het [datasetpakket](../datasets/README.md) voor herkomst, licentie en actualiteit.
- Voor `groene_daken_gevels` en `containerverzamelplaatsen` vermeldt de bron geen specifieke hergebruiklicentie. Controleer de bronvoorwaarden voordat je deze datasets verder verspreidt.
- De OSM-kaartlagen vallen onder ODbL 1.0; vermeld `© OpenStreetMap contributors, powered by Esri Nederland`. Zie [de datasetnotice](../datasets/NOTICE.md).
- Er is geen 90 dagen historie voor de gemeentelijke kaartlagen gepubliceerd. De weerhistorie is modeldata en loopt achter op de kalenderdatum.
