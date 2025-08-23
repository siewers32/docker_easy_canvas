---
title: Eenvoudige queries
date: 2022-04-03
---

# {{ course_title }}

## {{ title }}


Je kunt onderstaande queries uitproberen als je een mysql- of mariadb databaseserver hebt draaien en je hebt de database [school](https://static.edutorial.nl/dbq/school.sql) geïnstalleerd.  
Als je net de terminal of shell hebt geopend dan log je in met:
 
```sql
mysql -u <naam> -p <wachtwoord>
```
Als je net XAMPP hebt geïnstalleerd dan is je naam 'root' zonder wachtwoord, dan log je in met:
```sql
mysql -u root
```
Als de 'school'-database goed is geïnstalleerd kun je hem ook gebruiken:
```sql
use school;
```
Bekijk weer welke tabellen er zijn:
```sql
show tables;
+------------------+
| Tables_in_school |
+------------------+
| c_regel          |
| cursist          |
| cursus           |
| docent           |
+------------------+
```
Bekijk welke records er zijn in de tabel docent:
```sql
select * from docent;
+----------+------------+---------------+----------+------------+------------+---------+------------+
| doc_code | doc_naam   | straat        | postcode | plaats     | telefoon   | uurloon | geb_datum  |
+----------+------------+---------------+----------+------------+------------+---------+------------+
| WI       | Witlok     | Madeseweg 8   | 4841 PT  | Oosterhout | 071-123378 |  100.00 | 1957-04-25 |
| HM       | Hooymayers | Ignatiusstr 6 | 4847 EZ  | Breda      | 076-442786 |  200.00 | 1952-09-01 |
| GR       | Grond      | Bolwerk 10    | 4541 CC  | Tilburg    | 013-426786 |  150.00 | 1958-10-25 |
| PE       | Peters     | Breedonk 64   | 4142 EC  | Oosterhout | 01620-3429 |  185.50 | 1963-10-08 |
| SE       | Sengers    | Bredaseweg 2  | 4344 DE  | Bavel      | NULL       |  110.00 | 1955-05-17 |
| MO       | Mol        | Waterstr 8    | 4841 KA  | Breda      | 076-227788 |  300.00 | 1948-11-30 |
+----------+------------+---------------+----------+------------+------------+---------+------------+
```
Bekijk nu welke velden er zijn in de tabel 'docent':
```sql
show fields from docent;
+-----------+--------------+------+-----+---------+-------+
| Field     | Type         | Null | Key | Default | Extra |
+-----------+--------------+------+-----+---------+-------+
| doc_code  | varchar(2)   | YES  |     | NULL    |       |
| doc_naam  | varchar(25)  | YES  |     | NULL    |       |
| straat    | varchar(25)  | YES  |     | NULL    |       |
| postcode  | varchar(7)   | YES  |     | NULL    |       |
| plaats    | varchar(25)  | YES  |     | NULL    |       |
| telefoon  | varchar(12)  | YES  |     | NULL    |       |
| uurloon   | decimal(5,2) | YES  |     | NULL    |       |
| geb_datum | date         | YES  |     | NULL    |       |
+-----------+--------------+------+-----+---------+-------+

```
Je ziet nu dat de eerste rij van de records van docent overeenkomst met de eerste kolom in het overzicht van de velden van een docent.  
In de query <code>select * from docent</code> staat het sterretje voor 'alle velden/kolommen'.  
Alle kolommen worden weergegeven uit de tabel docent.  
Met <code>select</code> bepaal je dus welke kolommen worden weergegeven
Met <code>from</code> bepaal je welke tabel je gebruikt.  
Je kunt na <code>select</code> opgeven welke kolommen je wil zien:
```sql
select doc_naam, telefoon from docent;

+------------+------------+
| doc_naam   | telefoon   |
+------------+------------+
| Witlok     | 071-123378 |
| Hooymayers | 076-442786 |
| Grond      | 013-426786 |
| Peters     | 01620-3429 |
| Sengers    | NULL       |
| Mol        | 076-227788 |
+------------+------------+
```