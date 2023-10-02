import { test, expect } from '@playwright/test';

const URL = "http://localhost:3000/";

test('Home page Has correct title', async ({ page }) => {
  await page.goto(URL);
  await expect(page).toHaveTitle("Almost Home | Wyoming");
});

test('Home page has expected CTAs', async ({page}) => {
 await page.goto(URL)
  const about_us_header = await page.getByRole('heading', { name: 'About us...' });
  const donate_header = await page.getByRole('heading', { name: 'Ways to Give' });
  const contact_header = await page.getByRole('heading', { name: 'Reach out for help' });

  await expect(about_us_header).toBeVisible()
  await expect(donate_header).toBeVisible()
  await expect(contact_header).toBeVisible()
});

test('Home page CTA to donate page user flow', async ({page}) => {
  await page.goto(URL)
  await page.getByRole('link', { name: 'Donate' }).nth(2).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('main').getByRole('link', { name: 'Donate' }).click();
  const donate_page = await page1Promise;
  await expect(donate_page).toHaveTitle('Almost Home Wyoming')
});

test('About page has correct content', async ({page}) => {
  await page.goto(URL);
  await page.getByRole('navigation', { name: 'Global' }).getByRole('link', { name: 'About' }).click();
  await expect(page.getByRole('heading', { name: 'Almost Home Wyoming' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'About our organization' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'People helping people' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Our Mission' })).toBeVisible();
  await expect(page.getByText('- Nelson Mandela')).toBeVisible()
  await expect(page.getByText('- J.K Rowling')).toBeVisible();
  await expect(page.getByText('- Unknown')).toBeVisible();
});