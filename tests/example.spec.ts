import { test, expect } from '@playwright/test';

test('successful login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});

test('login fails with invalid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'invalid_user');
  await page.fill('#password', 'wrong_password');
  await page.click('#login-button');
  await expect(page.locator('.error-message-container')).toBeVisible();
});

test('can add product to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

// test('new user', async ({ page }) => {

//     page.on('dialog', async dialog => {
//         console.log(`Alert message: ${dialog.message()}`);
//         expect(dialog.message()).toContain('User registered successfully');
//         await dialog.accept(); // Click OK
//     });

//     await page.goto('https://demoqa.com/register');
//     await page.fill('#firstname', 'John');
//     await page.waitForTimeout(3000);
//     await page.fill('#lastname', 'Doe');
//     await page.waitForTimeout(3000);
//     await page.fill('#userName', 'johndoe');
//     await page.waitForTimeout(3000);
//     await page.fill('#password', 'Hello@123');
//     await page.waitForTimeout(40000);
//     await page.getByRole('button', { name: 'Register' }).click();

// });