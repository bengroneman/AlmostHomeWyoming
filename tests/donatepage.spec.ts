import { test, expect } from '@playwright/test';

const URL = "http://localhost:3000/donate";

test('Donate page has correct title', async ({ page }) => {
  await page.goto(URL);
  await expect(page).toHaveTitle("Donate to Almost Home Wyoming");
});
test('Donate page looks the same visually', async({page}) => {
  await page.goto(URL);
  await expect(page).toHaveScreenshot()
});