import { test, expect } from '@playwright/test';

test('RBP homepage title is correct', async ({ page }) => {
  await page.goto('');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Restful-booker-platform demo/);
});

test('Rooms are visible', async ({ page }) => {
  await page.goto('');

  await expect(page.getByText('Rooms', {exact: true})).toBeVisible();
});

test('Admin page can be reached', async ({ page }) => {
  await page.goto('/#/admin');

  await expect(page.getByTestId('login-header')).toBeVisible();
});