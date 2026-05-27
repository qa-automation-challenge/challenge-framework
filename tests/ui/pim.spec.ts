import { test } from '@playwright/test';
import { loginAsAdmin } from '../../src/utils/authHelper';
import { SidebarComponent } from '../../src/pages/SidebarComponent';
import { PimPage } from '../../src/pages/pimPageObject';
import { generateEmployee } from '../../src/utils/employeeGenerator';

//B2.5
test('Navigate to PIM', async ({ page }) => {
  const sidebar = new SidebarComponent(page);
  const pimPage = new PimPage(page);

  await loginAsAdmin(page);

  await sidebar.navigate('PIM');

  await pimPage.verifyEmployeeTableVisible();
});

//B2.6
test('Search employee', async ({ page }) => {
  const sidebar = new SidebarComponent(page);
  const pimPage = new PimPage(page);

  await loginAsAdmin(page);
  await sidebar.navigate('PIM');
  await pimPage.searchEmployee('Linda');
  await pimPage.verifyEmployeeTableVisible();
});

//B2.7
test('Add employee', async ({ page }) => {
  const sidebar = new SidebarComponent(page);
  const pimPage = new PimPage(page);
  const employee = generateEmployee();

  await loginAsAdmin(page);
  await sidebar.navigate('PIM');
  await pimPage.clickAddEmployee();
  await pimPage.addEmployee(employee.firstName, employee.lastName);

  await pimPage.verifyEmployeeCreated();
});
