import { test, expect } from '@playwright/test';
import { SidebarComponent } from '../../src/pages/SidebarComponent';
import { loginAsAdmin } from '../../src/utils/authHelper';

const menuItems = ['Admin', 'PIM', 'Leave', 'Time'];

//B3.9
for (const item of menuItems) {
  test(`Navigate to ${item}`, async ({ page }) => {
    const sidebar = new SidebarComponent(page);

    await loginAsAdmin(page);

    await sidebar.navigate(item);

    await expect(page).toHaveURL(new RegExp(item.toLowerCase()));
  });
}
