DMBASED Admin — Playwright notes

Purpose
- Quick reference for testing https://stg-admin.dmbased.com with Playwright.

Selectors used in tests
- Email input: input[type="email"]
- Password input: input[type="password"]
- Submit button: button[type="submit"]
- Common error container: .error-message, .form-error, .alert, .notification, .ant-alert

Example test flows
1. Successful login
   - Navigate to /login
   - Fill email + password and submit
   - Expect redirect to /home or similar

2. Empty submission
   - Navigate to /login
   - Click submit without typing
   - Expect error container with text:
     "Login Failed\nThe email address field is required.\nThe password field is required."

3. UI checks
   - Ensure the submit button contains the label "Login" or "SIGN IN" depending on locale

Environment variables (recommended)
- TEST_EMAIL — test account email
- TEST_PASSWORD — test account password

PowerShell example to run tests using env vars:

```powershell
$env:TEST_EMAIL = 'you@example.com'; $env:TEST_PASSWORD = 'secret'; npx playwright test --headed
```

Troubleshooting
- If Playwright types aren't found, ensure `@playwright/test` is installed and `npm install` was run.
- If `npm` or `npx` are blocked on Windows, run `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` and restart the terminal.

Notes
- Keep credentials out of source control. Use environment variables or a local `.env`.
- If the UI markup changes, update the selectors above and tests in `tests/*.ts` accordingly.

Contact
- Repo: https://github.com/hanumandoe/dmbased-playwright
