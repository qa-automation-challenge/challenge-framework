import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async waitForVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  async click(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async clickByText(text: string) {
    const locator = this.page.getByText(text);
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async fill(locator: Locator, value: string) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(value);
  }

  async getPageTitle() {
    return this.page.title();
  }
}
