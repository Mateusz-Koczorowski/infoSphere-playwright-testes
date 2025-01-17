import { test, expect } from '@playwright/test';

test('Check if "InfoSphere" text is present on the home page', async ({ page }) => {
  await page.goto('/');

  const textLocator = page.getByText('InfoSphere');
  await expect(textLocator).toBeVisible();
});
