import { APIRequestContext, request } from '@playwright/test';
import { config } from '../../utils/config';

export class ApiClient {
  private apiContext!: APIRequestContext;

  async init() {
    this.apiContext = await request.newContext({
      baseURL: config.apiBaseUrl,

      extraHTTPHeaders: {
        'Content-Type': 'application/json',
        'x-api-key': config.reqresApiKey,
      },
    });
  }

  async get(endpoint: string) {
    return this.apiContext.get(endpoint);
  }

  async post(endpoint: string, body: object) {
    return this.apiContext.post(endpoint, {
      data: body,
    });
  }

  async put(endpoint: string, body: object) {
    return this.apiContext.put(endpoint, {
      data: body,
    });
  }

  async delete(endpoint: string) {
    return this.apiContext.delete(endpoint);
  }

  async dispose() {
    await this.apiContext.dispose();
  }
}