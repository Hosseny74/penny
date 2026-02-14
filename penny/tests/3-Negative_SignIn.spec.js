import { test, expect } from '@playwright/test';

test('Login fails with wrong email and password', async ({ page }) => {

  await page.goto('https://automationexercise.com/login');

  await page.fill('input[data-qa="login-email"]', 'wronguser@mail.com');
  await page.fill('input[data-qa="login-password"]', 'WrongPassword');
  await page.click('button[data-qa="login-button"]');

  await expect(page.locator('text=Your email or password is incorrect!')).toBeVisible();
});


test('Login fails with unregistered email', async ({ page }) => {

  await page.goto('https://automationexercise.com/login');

  await page.fill('input[data-qa="login-email"]', 'nouser12345@mail.com');
  await page.fill('input[data-qa="login-password"]', 'Test12345');
  await page.click('button[data-qa="login-button"]');

  await expect(page.locator('text=Your email or password is incorrect!')).toBeVisible();
});


test('Signup fails with already existing email', async ({ page }) => {

  // This email must already exist
  const existingEmail = 'your_existing_user@mail.com';

  await page.goto('https://automationexercise.com/login');

  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[data-qa="signup-email"]', 'ahmedhosseny@mail.com');
  await page.click('button[data-qa="signup-button"]');

  await expect(page.locator('text=Email Address already exist!')).toBeVisible();
});
