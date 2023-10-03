import { test, expect } from '@playwright/test';

const URL = "http://localhost:3000/about";

test('About page Has correct title', async ({ page }) => {
  await page.goto(URL);
  await expect(page).toHaveTitle("About our Organization");

});
test('About page looks the same visually', async({page}) => {
  await page.goto(URL);
  await expect(page).toHaveScreenshot()
});