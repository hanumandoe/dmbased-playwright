import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 5000,
  },
  use: {
    // Run tests with visible browser so you can see the UI
    headless: false,
    // Ensure pages use this viewport size
    viewport: { width: 500, height: 500 },
    // For Chromium-based browsers, pass window size arg so the OS window matches viewport
    launchOptions: {
      args: ['--window-size=300,500'],
    },
    // Slow down operations slightly to make visual debugging easier (optional)
    // actionTimeout: 0,
    // trace: 'on-first-retry',
  },

});
