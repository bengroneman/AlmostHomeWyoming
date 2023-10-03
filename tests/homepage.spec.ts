import { test, expect } from '@playwright/test';

const URL = "http://localhost:3000/";

test('Home page Has correct title', async ({ page }) => {
  await page.goto(URL);
  await expect(page).toHaveTitle("Almost Home Wyoming");
});
test('Home page looks the same visually', async({page}) => {
  await page.goto(URL);
  await expect(page).toHaveScreenshot()
});

