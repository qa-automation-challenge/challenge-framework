import { Page } from '@playwright/test';

export class SidebarComponent {
  constructor(private page: Page) {}

  async navigate(menu: string) {
    await this.page.locator(`//span[text()="${menu}"]`).click();
  }
}
