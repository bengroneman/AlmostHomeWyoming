import { test, expect } from '@playwright/test';
import { URL } from './testutils.js';

test('Stories page Has correct title', async ({ page }) => {
  await page.goto(URL);
  await page.getByTestId('header-navigation').getByRole("link", {name: "Stories"}).click()
  await page.waitForLoadState()
  await expect(page).toHaveTitle("Almost Home Wyoming - Stories");
});
test('Home page looks the same visually', async({page}) => {
  await page.goto(URL + '/stories');
  await expect(page).toHaveScreenshot()
});
