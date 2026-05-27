import { test } from '@playwright/test';
import { DashBoardPage } from '../../src/pages/DashBoardPage';
import { loginAsAdmin } from '../../src/utils/authHelper';

//B3.8
test('Dashboard widgets visible', async ({ page }) => {
  const dashboardPage = new DashBoardPage(page);

  await loginAsAdmin(page);
  await dashboardPage.verifyWidgetsVisible();
});