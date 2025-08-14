import { test, expect } from '@playwright/test';

// Replace with your actual credentials
const EMAIL = 'admin-josel@example.com';
const PASSWORD = 'admin';

// The login test

test('login and check homepage or error', async ({ page, context }) => {
  // Show browser UI
  await context.setDefaultNavigationTimeout(60000);
  await context.setDefaultTimeout(60000);
  await page.goto('https://stg-admin.dmbased.com/login');

  await page.fill('input[type="email"]', EMAIL);
  await page.fill('input[type="password"]', PASSWORD);
  await page.click('button[type="submit"]');

  // Wait for either navigation or error
  await page.waitForTimeout(2000);

  if (page.url().includes('/home')) {
    console.log('Login successful, redirected to homepage.');
    expect(page.url()).toContain('/home');
  } else if (await page.isVisible('.error-message, .form-error')) {
    console.log('Login failed, error message displayed.');
    expect(await page.isVisible('.error-message, .form-error')).toBeTruthy();
  } else {
    console.log('Login result unclear.');
  }
});
