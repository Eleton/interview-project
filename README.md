# Interview Project
Projektet är en admin app som listar våra AR-projekt.

Vi använder oss bara av Angular / RXJS och Angular Material för enkelhetens skull.

Gör en fork av detta projekt till din egen github, så kan jag följa din repo enkelt.

## 1. Data hämtning
Implementera datahämtningen av projekten i `src/app/domain/project.service.ts` så att du får tillbaka en observable med alla projekt

commita detta till git

## 2. Listning av projekten
Implementera listning av projekten i `src/app/pages/dashboard-page`

Skapa en ny component som tar emot projektet som en `Input()`
Komponenten i sin tur ska sedan innehålla en angular material card https://material.angular.io/components/card/examples
med

* Bild på projektet
* Namn på projektet
* Kundnamnet

och köra sedan ut componenten med *ngFor i dashboard-page
använd dig sedan av css grid (https://css-tricks.com/snippets/css/complete-guide-grid/) för att få en snygg listning av cardsen.

![Listing](readme-assets/dashboard-listing.png "Listing")

commita detta till git

## 3. Sökning efter projekt, om du känner att det känns rimligt
När du väl fått listningen att fungera korrekt så kommer vi på att en sökruta vore ju bra att ha, så därför behöver vi bygga en ny komponent som ser ut som den i bilden och har en `@Output()` som är söksträngen man skriver in. Debounca gärna outputen så att vi inte överbelastar webbläsaren när användaren skriver i sökrutan. (använd rxjs `debounceTime(300)`)

den komponenten ska sedan användas för att filtrera `Observable<Project[]>` som vi får tillbaka från `projectService` tjänsten.

Tips. använd rxjs `combineAll` för att kombinera sökkomponenten och resultatet från `getProjects()`
använd sedan rxjs `map` och js filter på projects baserat på värdet från sökkomponenten.


# Outro

Målet med projektet är att du ska visa på hur du:

* Hanterar Angular och dess byggstenar
* Skriver html och css (scss)
* Bygger apitjänsten och hanterar rjxs

Lycka till!


## Install yarn
```
https://yarnpkg.com/en/docs/install
```

## Install dependencies
```bash
yarn
```

## Start Development
```bash
yarn start
```
