import { test, expect } from '@playwright/test';
import { URL } from './testutils.js';

test('About page Has correct title', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('header-navigation').getByRole("link", {name: "About"}).click()
  await page.waitForLoadState()
  await expect(page).toHaveTitle("About our Organization");

});
test('About page looks the same visually', async({page}) => {
  await page.goto(URL);
  await expect(page).toHaveScreenshot()
});