# dmbased-playwright

Small Playwright + TypeScript test suite for the dmbased admin app.

## What this repo contains
- `tests/` — Playwright tests (example: `login.spec.ts`)
- `package.json` — project manifest with dev dependencies
- `tsconfig.json` — TypeScript config

## Requirements
- Node.js (>=16) and npm available in your PATH
- Playwright browsers installed (see Install step)

## Quick setup
Open PowerShell in the project root (`c:\www\dmbased-playwright`) and run:

```powershell
# install dependencies (if not already installed)
npm install

# install Playwright browsers
npx playwright install
```

## Run tests
Run the entire test suite (headed in PowerShell so you can watch the browser):

```powershell
npx playwright test --headed
```

Run headless (CI style):

```powershell
npx playwright test
```

Run a single test file:

```powershell
npx playwright test tests\login.spec.ts --headed
```

Run a single test by title (useful for debugging):

```powershell
npx playwright test --grep "login button shows \"Login\" text" --headed
```

## Credentials & sensitive data
Do NOT store real credentials in source-controlled files. Use environment variables or a local `.env` file (and add `.env` to `.gitignore`) when you need to inject usernames/passwords into tests.

Example (PowerShell):

```powershell
$env:TEST_EMAIL = 'you@example.com'; $env:TEST_PASSWORD = 'secret'; npx playwright test
```

Then inside tests you can read `process.env.TEST_EMAIL` and `process.env.TEST_PASSWORD` instead of hardcoding values.

## Notes
- Tests live in `tests/*.ts` and use `@playwright/test`.
- If PowerShell blocks `npm` or `npx` due to execution policy, run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

and restart the terminal.

## Troubleshooting
- If typescript complains about imports, ensure `@playwright/test` is installed and `tsconfig.json` `module` is set to a compatible value (this project uses `nodenext`).

---

If you'd like, I can also add an npm script (e.g. `npm run test`) and a `playwright.config.ts` with `use: { headless: false }` for local debugging. Which would you prefer next?
