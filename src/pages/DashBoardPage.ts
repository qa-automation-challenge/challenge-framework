import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashBoardPage extends BasePage {
  readonly dashboardHeader: Locator;
  readonly timeAtWorkWidget: Locator;
  readonly myActionsWidget: Locator;
  readonly quickLaunchWidget: Locator;

  constructor(page: Page) {
    super(page);

    this.dashboardHeader = page.locator('h6');
    this.timeAtWorkWidget = page.locator('text=Time at Work');
    this.myActionsWidget = page.locator('text=My Actions');
    this.quickLaunchWidget = page.locator('text=Quick Launch');
  }

  async verifyDashboardLoaded() {
    await expect(this.dashboardHeader).toContainText('Dashboard');
  }

  async verifyWidgetsVisible() {
    await expect(this.timeAtWorkWidget).toBeVisible();
    await expect(this.myActionsWidget).toBeVisible();
    await expect(this.quickLaunchWidget).toBeVisible();
  }
}
