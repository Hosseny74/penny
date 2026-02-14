import { test, expect } from '@playwright/test';

test('User can successfully create a new account', async ({ page }) => {

  const email = `test${Date.now()}@mail.com`;
  const password = 'Test12345';

  await page.goto('https://automationexercise.com');
  await page.click('a[href="/login"]');

  // Fill signup form
  await page.fill('input[name="name"]', 'Ahmed Hosseny');
  await page.fill('input[data-qa="signup-email"]', email);
  await page.click('button[data-qa="signup-button"]');

  // Validate we moved to account information page
  await expect(page.locator('text=Enter Account Information')).toBeVisible();

  // Fill account details
  await page.check('#id_gender1');
  await page.fill('#password', password);
  await page.selectOption('#days', '27');
  await page.selectOption('#months', '2');
  await page.selectOption('#years', '2001');

  await page.fill('#first_name', 'Ahmed');
  await page.fill('#last_name', 'Hosseny');
  await page.fill('#address1', 'Remaya Street');
  await page.selectOption('#country', 'Canada');
  await page.fill('#state', 'Giza');
  await page.fill('#city', 'Remaya');
  await page.fill('#zipcode', '12345');
  await page.fill('#mobile_number', '0123456789');

  await page.click('button[data-qa="create-account"]');

  // Final validation
  await expect(page.locator('text=Account Created!')).toBeVisible();
});
