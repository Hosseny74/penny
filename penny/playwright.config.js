// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run tests one by one (easier to watch)
  fullyParallel: false,
  workers: 1,

  // No retries locally
  retries: 0,

  // HTML report
  reporter: 'html',

  use: {
    // Show browser
    headless: false,

    // Slow down execution so you can see actions
    slowMo: 500,

    // Keep traces if something fails
    trace: 'on-first-retry',
  },

  // Cross-browser configuration
projects: [

  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },

  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
  },

  {
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  },

  {
    name: 'Mobile Chrome',
    use: { ...devices['Pixel 5'] },
  },

],
});
