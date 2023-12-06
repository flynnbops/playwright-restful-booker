import { test, expect } from '@playwright/test';

// Used the Test recorder to create this basic test. Removed redundant calls.
test('@wip Submit an enquiry', async ({ page }) => {
  // Submit an enquiry
  await page.goto('');
  await page.getByTestId('ContactName').fill('Aaron test');
  await page.getByTestId('ContactEmail').fill('a@abc.com');
  await page.getByTestId('ContactPhone').fill('01234567890');
  await page.getByTestId('ContactSubject').fill('Rooms??');
  await page.getByTestId('ContactDescription').fill('Hello I want a room\n\nplz\n');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#root')).toContainText('Thanks for getting in touch Aaron test!');
  
  await page.goto('#/admin');

  // Sign in as admin
  await page.getByTestId('username').fill('admin');
  await page.getByTestId('password').fill('password');
  await page.getByTestId('submit').click();

  // Check for booking
  await page.getByRole('link', { name: '' }).click();
  await expect(page.getByTestId('message2').getByRole('paragraph')).toContainText('Aaron test');
});