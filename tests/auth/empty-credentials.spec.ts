import { test, expect } from '@playwright/test';

// Submit empty login form and verify the required-field error prompt
test('empty fields  shows required fields error', async ({ page }) => {
  await page.goto('https://stg-admin.dmbased.com/login');

  // Explicitly ensure inputs are empty (no credentials)
  await page.fill('input[type="email"]', '');
  await page.fill('input[type="password"]', '');

  // Submit the form
  await page.click('button[type="submit"]');

  // Look for common error containers
  const err = page.locator('.error-bag, .form-error, .alert, .notification, .ant-alert');
  await expect(err).toBeVisible();

  // Check the multiline expected message
  await expect(err).toContainText('Login Failed');
  await expect(err).toHaveText(/Login Failed[\s\S]*The email address field is required\.[\s\S]*The password field is required\./i);
});
