import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class UpBarComponent extends BasePage {
  readonly userOptions: Locator;

  constructor(page: Page) {
    super(page);

    this.userOptions = this.page.locator(".oxd-userdropdown-tab");
  }

  async clickInUserOptions() {
    await this.click(this.userOptions);
  }
}
