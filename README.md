|◀|[△](../README.md)|[◉](../../../README.md)|[▶](../2.LijstTonen/README.md)|
|---|---|---|---|

# Expense Tracker - Setup

```
/expense-tracker
├── /backend
│   ├── expenses.json
│   ├── package.json
│   └── server.js
│
├── /frontend
│   ├── index.html
│   ├── style.css
│   ├── /src
│   │   └── app.js
│   ├── /tests
│   │   └── basic.test.js
│   ├── package.json
│   └── vitest.config.js           # (optioneel als je configuratie nodig hebt)
├── /.github
│   └── /workflows
│       └── ci.yml                 # (Vitest + backend check)
│
├── .gitignore
└── README.md
```

## Repository aanmaken
1. Maak een nieuwe [repository](../../../TheCourse/M02_HelloGit/new-repo.md) aan op GitHub met de naam `expense-tracker`. Invite Mark Meyers.
2. Clone deze repository naar je lokale machine.
3. Voeg een [`.gitignore`](../../../TheCourse/M02_HelloGit/git-ignore.md) toe met minimaal `node_modules/` en `expenses.json` (voor backend).


## Projectstructuur
1. Maak een nieuwe map aan `/backend`.
2. Zet de hiernaast ingesloten bestanden van de backend API (`server.js`, `expenses.json` en `package.json`) in `/backend`.
3. Maak een nieuwe map aan `/frontend`.
4. Binnen `/frontend`, maak lege bestanden aan voor:
   * `index.html`
   * `style.css`
   * `app.js` in subfolder `src`
5. Kopieëer bijgeleverde `frontend/package.json` naar `expense-tracker/frontend/`

## Vitest
1. In `/frontend` maak een nieuwe map `tests`.
2. In `/frontend/tests` maak een nieuw bestand `basic.test.js`.
3. Kopieëer bijgeleverde `frontend/vitest.config.js` naar `expense-tracker/frontend/`
4. Plaats onderstaande code in `basic.test.js`
   ```js
   import { describe, it, expect } from "vitest";

   describe("app smoke test", () => {
     it("has a working test environment", () => {
       expect(document.createElement("div")).toBeInstanceOf(HTMLDivElement);
     });
   });
   ```
4. Ga naar de map `/frontend` in je terminal.
5. Installeer dependencies met `npm install`.
6. Start vitest en verifiëer dat de test passed via `npx vitest run`.

## Github Workflow toevoegen
1. Voeg in `.github/workflows/ci.yml` een workflow toe die automatisch je tests uitvoert bij elke push of pull request.
2. Gebruik `node` als basis image en installeer dependencies in de `/frontend` map.
3. Zorg dat `vitest` wordt gebruikt als testrunner (die moet ook als dependency worden toegevoegd).
4. De workflow moet minstens uitvoeren:
   * `npm ci` in `/frontend`
   * `npm test` om de tests te draaien

> Indien je deze stap wil overslaan, er is een `ci.yml` bestand aangeleverd.

## Backend opstarten en testen
1. Ga naar de map `/backend` in je terminal.
2. Installeer dependencies met `npm install`.
3. Start de backend server (`npm start`).  
    Je ziet nu in de terminal:
   `Expense Tracker API running on http://localhost:...`
4. Test de endpoint `GET /expenses` met bvb *Thunder Client* VSCode Extensie (`rangav.vscode-thunder-client`).


## Commit
```bash
git add .
git commit -m "setup"
git push
```
- Verifiëer op github dat je workflow ook daar slaagt.


