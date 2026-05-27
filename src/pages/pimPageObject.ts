import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class PimPage extends BasePage {
  readonly employeeNameInput: Locator;
  readonly searchButton: Locator;
  readonly addEmployeeButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly saveButton: Locator;
  readonly employeeTable: Locator;
  readonly successToast: Locator;

  constructor(page: Page) {
    super(page);

    this.employeeNameInput = page.locator(
      '(//input[@placeholder="Type for hints..."])[1]'
    );
    this.searchButton = page.locator('button[type="submit"]');
    this.addEmployeeButton = page.locator('button:has-text("Add")');
    this.firstNameInput = page.locator('input[name="firstName"]');
    this.lastNameInput = page.locator('input[name="lastName"]');
    this.saveButton = page.locator('button[type="submit"]');
    this.employeeTable = page.locator('.oxd-table');
    this.successToast = page.locator('.oxd-toast');
  }

  async searchEmployee(name: string) {
    await this.fill(this.employeeNameInput, name);
    await this.click(this.searchButton);
  }

  async verifyEmployeeTableVisible() {
    await expect(this.employeeTable).toBeVisible();
  }

  async clickAddEmployee() {
    await this.click(this.addEmployeeButton);
  }

  async addEmployee(firstName: string, lastName: string) {
    await this.fill(this.firstNameInput, firstName);
    await this.fill(this.lastNameInput, lastName);
    await this.click(this.saveButton);
  }

  async verifyEmployeeCreated() {
    await expect(this.successToast).toBeVisible();
  }
}