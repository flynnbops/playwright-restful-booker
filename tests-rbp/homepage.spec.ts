import { test, expect } from '@playwright/test';

test('RBP homepage title is correct', async ({ page }) => {
  await page.goto('');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Restful-booker-platform demo/);
});

test('@wip RBP homepage title is correct', async ({ page }) => {
  await page.goto('');

  await expect(page.getByText('Rooms', {exact: true})).toBeVisible();
});