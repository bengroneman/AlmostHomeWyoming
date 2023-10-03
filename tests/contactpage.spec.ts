import { test, expect } from '@playwright/test';

const URL = "http://localhost:3000/contact";

test('Contact page has correct title', async ({ page }) => {
  await page.goto(URL);
  await expect(page).toHaveTitle("Contact Almost Home Wyoming");
});

test('Conatact page looks the same visually', async({page}) => {
  await page.goto(URL);
  await expect(page).toHaveScreenshot()
});