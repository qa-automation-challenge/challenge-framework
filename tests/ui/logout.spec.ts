import { test, expect } from '@playwright/test';
import { loginAsAdmin } from '../../src/utils/authHelper';
import { UpBarComponent } from '../../src/pages/UpBarComponent';

//B1.4
test('Logout successfully', async ({ page }) => {
  const upBar = new UpBarComponent(page);
  await loginAsAdmin(page);

  await upBar.clickInUserOptions();
  await upBar.clickByText("Logout");
  await expect(page).toHaveURL(/login/);
});