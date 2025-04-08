import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/sampleapp');
  await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.getByRole('textbox', { name: 'User Name' }).fill('Admin');
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill('Admin');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.locator('#loginstatus')).toContainText('Invalid username/password');
  await expect(page.locator('#loginstatus')).toContainText('Invalid username/password');
});