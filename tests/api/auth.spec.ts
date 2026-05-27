import { test, expect } from '@playwright/test';
import { ApiClient } from '../../src/api/clients/apiClient';
import { auth, invalidLoginPayloads } from '../../src/api/data/auth';
import { loginEndpoint, registerEndpoint } from '../../src/api/data/endpoints';

let client: ApiClient;

test.beforeEach(async () => {
  client = new ApiClient();
  await client.init();
});

test.afterEach(async () => {
  await client.dispose();
});

// A2.6

test('Successful registration', async () => {
  const response = await client.post(registerEndpoint, auth.register);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBeTruthy();
  expect(body.token).toBeTruthy();
});

// A2.7

test('Failed registration', async () => {
  const response = await client.post(registerEndpoint, auth.invalidRegister);

  expect(response.status()).toBe(400);

  const body = await response.json();

  expect(body.error).toContain('Missing password');
});

// A2.8

test('Successful login', async () => {
  const response = await client.post(loginEndpoint, auth.login);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.token).toBeTruthy();
});

// A2.9

for (const data of invalidLoginPayloads) {
  test(`Failed login validation: ${data.error}`, async () => {
    const response = await client.post(loginEndpoint, data.payload);

    expect(response.status()).toBe(400);

    const body = await response.json();

    expect(body.error).toContain(data.error);
  });
}
