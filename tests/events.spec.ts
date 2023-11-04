import { test, expect } from '@playwright/test';
import { URL } from './testutils.js';

test('Events page Has correct title', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('header-navigation').getByRole("link", {name: "Events"}).click()

  await page.waitForLoadState()
  await expect(page).toHaveTitle("Almost Home Wyoming - Events");
});
test('Home page looks the same visually', async({page}) => {
  await page.goto(URL);
  await expect(page).toHaveScreenshot()
});

