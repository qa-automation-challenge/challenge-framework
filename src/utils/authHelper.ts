import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { config } from './config';

export async function loginAsAdmin(page: Page) {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(config.username, config.password);
}
