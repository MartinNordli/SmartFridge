WasteAway

Dette prosjektet har som mål å lage en applikasjon som hjelper folk med å redusere matsvinn, ettersom det er et av de større miljøproblemene i verden. WasteAway hjelper brukeren med å holde oversikt over matvarene i kjøleskapet og deres utløpsdatoer. Applikasjonen tilbyr også funksjoner for å lage handlelister, finne oppskrifter basert på innholdet i kjøleskapet og dele kjøleskapet med andre personer som kan gi forslag til handlelisten.

WasteAway bruker REST API-endepunkter for å lagre informasjon i databaser. Dette sikrer at brukerdata er trygt lagret og tilgjengelig når det trengs.

WasteAway er utviklet med Spring Boot og Vue 3, og bruker Maven og NPM som byggeverktøy. For å kjøre WasteAway, følg disse trinnene:

1. Klon prosjektet til din lokale maskin.
2. Åpne en terminal i backend-mappen og kjør `mvn spring-boot:run`.
3. Åpne en annen terminal i frontend-mappen og kjør `npm run serve`.

Applikasjonen vil nå være tilgjengelig på `localhost:5173`. For å registrere en ny bruker, gå til `localhost:5173/register` og fyll ut skjemaet. Etter registrering, logg inn på `localhost:5173/login` for å begynne å bruke WasteAway.

WasteAway har ingen spesifikke systemkrav og bør fungere på de fleste datamaskiner og nettlesere. Prosjektstørrelsen er omtrent 2 GB, så nedlasting og bygging kan ta litt tid.

Prosjektet er lisensiert under MIT-lisensen, som gir deg frihet til å bruke og tilpasse koden som du ønsker. En .gitignore-fil er inkludert for å ignorere node_modules-mappen og redusere unødvendig overføring av data.

Hvis du ønsker å bidra til WasteAway, er det flere måter å gjøre dette på:

- Opprett en pull request med endringene dine.
- Send en e-post til 'martnal@stud.ntnu.no' og beskriv hvordan du ønsker å bidra.

Vi setter stor pris på tilbakemeldinger og forslag. Hvis du har noe du vil dele med oss, vennligst send en e-post til 'martnal@stud.ntnu.no'.

Merk: Vi jobber med å lage ytterligere dokumentasjon for prosjektet. For øyeblikket er det ingen kjente feil eller begrensninger, men vi anbefaler å holde øye med prosjektets utvikling for eventuelle oppdateringer.
