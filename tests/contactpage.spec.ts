import { test, expect } from '@playwright/test';
import { URL } from './testutils.js';

test('Contact page has correct title', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('header-navigation').getByRole("link", {name: "Contact"}).click()
  await page.waitForLoadState()
  await expect(page).toHaveTitle("Contact Almost Home Wyoming");
});

test('Contact page looks the same visually', async({page}) => {
  await page.goto(URL);
  await expect(page).toHaveScreenshot()
});