import { test, expect } from '@playwright/test';

test('Existing user can login and logout successfully', async ({ page }) => {

  // The created account from a manual test
  const email = 'ahmedhosseny@mail.com';
  const password = 'Test12345';

  await page.goto('https://automationexercise.com/login');

  await page.fill('input[data-qa="login-email"]', email);
  await page.fill('input[data-qa="login-password"]', password);
  await page.click('button[data-qa="login-button"]');

  //Validate that User is LogedIn

  await expect(page.locator('text=Logged in as')).toBeVisible();

  await page.click('a[href="/logout"]');

  await expect(page).toHaveURL(/login/);
});
