import { test, expect } from '@playwright/test';

test.describe('Login', () => {

  test('Successful login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
    await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toMatchAriaSnapshot(`- text: Sauce Labs Backpack`);
  });
  
  test('Unsuccessful login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secreeeet_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
  });
  
  test('Locked out user login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
  });
  
  });

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

    test('Add to cart', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Bike Light');
    });

    test('Shopping', async ({ page }) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Test');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('User');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('445566');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
    });

    test('Filter', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
    await expect(page.locator('[data-test="item-5-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Fleece Jacket');
    await expect(page.locator('[data-test="inventory-list"]')).toContainText('$49.99');
    });

    test('Remove button', async ({ page }) => {
      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toContainText('Remove');
      await expect(page.locator('[data-test="product-sort-container"]')).toHaveValue('az');
      await expect(page.locator('[data-test="shopping-cart-badge"]')).toMatchAriaSnapshot(`- text: "1"`);
      await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
      await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toContainText('Add to cart');
    });

    test('Correct image', async ({ page }) => {
      await expect(page.locator('img[alt="Sauce Labs Backpack"]')).toHaveAttribute('src', "/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg");
      await page.getByRole('button', { name: 'Open Menu' }).click();
      await page.locator('[data-test="logout-sidebar-link"]').click();
      await page.locator('[data-test="username"]').click();
      await page.locator('[data-test="username"]').fill('visual_user');
      await page.locator('[data-test="password"]').click();
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      await expect(page.locator('img[alt="Sauce Labs Backpack"]')).toHaveAttribute('src', "/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg");
    });

    test('Price check - standard user', async ({ page }) => {
      await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
      await expect(page.locator('[data-test="inventory-list"]')).toContainText('$29.99');
      await page.locator('[data-test="item-4-title-link"]').click();
      await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
      await expect(page.locator('[data-test="inventory-item-price"]')).toContainText('$29.99');
    });

    test('Price check - error user', async ({ page }) => {
      await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
      await expect(page.locator('[data-test="inventory-list"]')).toContainText('$29.99');
      await page.getByRole('button', { name: 'Open Menu' }).click();
      await page.locator('[data-test="logout-sidebar-link"]').click();
      await page.locator('[data-test="username"]').click();
      await page.locator('[data-test="username"]').fill('visual_user');
      await page.locator('[data-test="password"]').click();
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
      await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
      await expect(page.locator('[data-test="inventory-list"]')).toContainText('$29.99');
    });