import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { config } from '../utils/config';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly requiredMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.oxd-alert-content-text');
    this.requiredMessage = page.locator('span.oxd-input-field-error-message');
  }

  async goto() {
    await this.page.goto(config.uiBaseUrl);
  }

  async login(username: string, password: string) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async clickLogin() {
    await this.click(this.loginButton);
  }

  async verifyLoginError(message: string) {
    await expect(this.errorMessage).toContainText(message);
  }

  async verifyRequiredMessages(count: number) {
    await expect(this.requiredMessage).toHaveCount(count);
  }
}
