# Easy Canvas
Gebaseerd op [Eleventy](https://www.11ty.com).  
Het aanpassen van publicaties in Canvas gaat traag en ouderwets. Met deze applicatie kun je direct werken met markdown documenten en is het eindresultaat live te zien in een browser.  
Dit werkt uiteraarde veel sneller en plezieriger dan html aanpassen in webformulieren etc.

* Deze versie is gebaseerd op de layout van Deltion in Zwolle
* Eenvoudig om te bouwen naar andere layouts
* Alleen veelvoorkomende opmaak is toegepast:
    * Sections met tekst en afbeeldingen (afbeeldingen links of rechts)
    * Accordeons

## Installatie
```shell
docker compose up -d
docker compose exec eleventy bash
cd app
npm install
npm run start

```
#### Dockerfile 
* gebruikt node:latest image
* kopieert package.json
* Start server op (maar dit wordt later overschreven door acties in docker-compose)

#### docker-compose.yml
* Serverpoorten 8080:8080, dus http://localhost:8080 vanaf hostsysteem
* In docker container wordt map `app` gekoppeld aan werkmap op het hostsysteem
* Met `docker compose exec eleventy bash` kun je de server stoppen/starten en node scripts uitvoeren.

## Eleventy
* Shorcodes toegevoegd aan .eleventy.js
* `{% section %}{% endsection %}`: Start nieuwe section op pagina
    * Een section is een flexbox geschikt voor 2 containers (bijv. links een tekst en rechts een afbeelding)
* `{% tekst %}{% endtext %}`: Tekstcontainer binnen een section
* `{% afbeelding "naam_afbeelding.jpg", "100", "100" %}`: Afbeelding met formaat width: 100% en height: 100% (formaat is optioneel)
