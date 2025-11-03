import { test, expect } from '@playwright/test';

// test('successful login with valid credentials', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.fill('#user-name', 'standard_user');
//   await page.fill('#password', 'secret_sauce');
//   await page.click('#login-button');
//   await expect(page).toHaveURL(/inventory/);
//   await expect(page.locator('.title')).toHaveText('Products');
// });

// test('login fails with invalid credentials', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.fill('#user-name', 'invalid_user');
//   await page.fill('#password', 'wrong_password');
//   await page.click('#login-button');
//   await expect(page.locator('.error-message-container')).toBeVisible();
// });

// test('can add product to cart', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.fill('#user-name', 'standard_user');
//   await page.fill('#password', 'secret_sauce');
//   await page.click('#login-button');
//   await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
//   await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
// });

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

// test('Form automation', async ({ page }) => {
//   await page.goto('https://demoqa.com/automation-practice-form');

//   // Fill personal information
//   await page.fill('#firstName', 'John');
//   await page.fill('#lastName', 'Doe');
//   await page.fill('#userEmail', 'johndoe@example.com');

//   // Select gender
//   await page.locator('#gender-radio-1').check({ force: true });
//   await expect(page.locator('#gender-radio-1')).toBeChecked();

//   // Fill phone number
//   await page.fill('#userNumber', '1234567890');

//   // Select date of birth
//   await page.click('#dateOfBirthInput');
//   await page.locator('.react-datepicker__month-select').selectOption('January');
//   await page.locator('.react-datepicker__year-select').selectOption('1995');
//   await page.locator('.react-datepicker__day--015').click();

//   // Select subjects
//   await page.fill('#subjectsInput', 'Math');
//   await page.click('.subjects-auto-complete__menu');

//   // Check 'Sports' hobby
//   await page.locator('label[for="hobbies-checkbox-1"]').click();
//   await expect(page.locator('#hobbies-checkbox-1')).toBeChecked();

//   // Upload picture
//   await page.setInputFiles('#uploadPicture', 'hello.txt');

//   // Fill current address
//   await page.fill('#currentAddress', '123 Main St');

//   // Select state and city
//   await page.click('#state');
//   await page.getByText('NCR', { exact: true }).click();

//   // Select city
//   await page.click('#city');
//   await page.getByText('Delhi', { exact: true }).click();

//   // Submit form
//   await page.getByRole('button', { name: 'Submit' }).click();

//   // Verify modal is visible
//   await expect(page.locator('.modal-content')).toBeVisible();
// });

test('handle alert dialog', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

   page.on('dialog', async dialog => {
    console.log('Dialog type:', dialog.type());
    console.log('Dialog message:', dialog.message());
    await dialog.dismiss(); // or dialog.accept();
  });

  await page.click('text=Click for JS Confirm');
  await expect(page.locator('#result')).toHaveText('You clicked: Cancel');

  // Prompt dialog (with input)
  page.once('dialog', async dialog => {
    await dialog.accept('Nishant');
  });

  await page.click('text=Click for JS Prompt');
  await expect(page.locator('#result')).toHaveText('You entered: Nishant');
});