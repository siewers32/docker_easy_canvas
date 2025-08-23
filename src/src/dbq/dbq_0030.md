---
title: Postgresql
date: 2022-04-02
---

# {{ course_title }}

## {{ title }}

## Voorwoord

Een andere populaire database, die veel gebruikt wordt in combinatie met bijv. Python is Postgresql. Postgresql is o.a. populair als het gaat om het bouwen van ai-systemen. Postgresql kent een aantal extra data-typen waardoor het werken met LLM's en JSON makkelijker gaat.  
Postgresql is een gratis open-source toepassing.

## Installatie
* Je kunt Postgresql installeren via de website (https://www.postgresql.org/). 
* Macgebruikers kunnen het beste gebruik maken van `homebrew`. Let op dat je de laatste versie installeert!
* Pas indien nodig de `PATH` variabele aan, zodat je systeem de server- en clientapplicaties overal op je computer kan vinden.
    * Bij windows gaat dat bij `omgevingsvariabelen` of in het engels `environment variables`
    * Op de mac kun je `psql` starten vanuit `Terminal`. Als dat niet lukt dan pas je het bestand `~/.zprofile` aan.


## Client applicatie
Postgresql is net als MySQL en MariaDB een client-server applicatie. Je gebruikt de client-applicatie om commando's naar de server te sturen.  
Hieronder zie je hoe je voor de eerste keer kunt inloggen (standaard naam is postgres zonder wachtwoord)

```shell
psql postgres
```

## Nieuwe superuser
* Maak een nieuwe superuser aan die je gebruikt voor development-doeleinden
```sql
CREATE ROLE mijngebruiker WITH LOGIN PASSWORD 'mijnwachtwoord' SUPERUSER;
CREATE DATABASE mijngebruiker;
```

## Cursus bestanden
* Je kunt de database <code>school</code> hier downloaden.... [School database](https://static.edutorial.nl/dbq/school_pg.sql)  
Als je op bovenstaande link klikt, wordt het bestand 'school_pg.sql' in je downloadmap geplaatst.
* Start psql en maak eerst een database aan:

````sql
create database school;
````
* Je kunt checken of door een listing van alle databases op te vragen met `\l`:
* Laad het sql bestand om de tabellen en gegevens te importeren.


```shell
psql postgres -f C:\school_pg.sql
```

## Cheatsheet Postgresql


<table style="border-collapse:collapse; border:1px black solid;">
<thead>
<tr>
<th>Option</th>
<th>Example</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border: 1px solid black; padding:4px">[-d] <database></td>
<td style="border: 1px solid black; padding:4px">psql -d mydb</td>
<td style="border: 1px solid black; padding:4px">Connecting to database</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-U</td>
<td style="border: 1px solid black; padding:4px">psql -U john mydb</td>
<td style="border: 1px solid black; padding:4px">Connecting as a specific user</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-h -p</td>
<td style="border: 1px solid black; padding:4px">psql -h localhost -p 5432 mydb</td>
<td style="border: 1px solid black; padding:4px">Connecting to a host/port</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-U -h -p -d</td>
<td style="border: 1px solid black; padding:4px">psql -U admin -h 192.168.1.5 -p 2506 -d mydb</td>
<td style="border: 1px solid black; padding:4px">Connect remote PostgreSQL</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-W</td>
<td style="border: 1px solid black; padding:4px">psql -W mydb</td>
<td style="border: 1px solid black; padding:4px">Force password</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-c</td>
<td style="border: 1px solid black; padding:4px">psql -c '\c postgres' -c '\dt'</td>
<td style="border: 1px solid black; padding:4px">Execute a SQL query or command</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-H</td>
<td style="border: 1px solid black; padding:4px">psql -c &quot;\l+&quot; -H postgres &gt; database.html</td>
<td style="border: 1px solid black; padding:4px">Generate HTML report</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-l</td>
<td style="border: 1px solid black; padding:4px">psql -l</td>
<td style="border: 1px solid black; padding:4px">List all databases</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-f</td>
<td style="border: 1px solid black; padding:4px">psql mydb -f file.sql</td>
<td style="border: 1px solid black; padding:4px">Execute commands from a file</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-V</td>
<td style="border: 1px solid black; padding:4px">psql -V</td>
<td style="border: 1px solid black; padding:4px">Print the psql version</td>
</tr>
</tbody>
</table>