import { test, expect } from '@playwright/test';
import { ApiClient } from '../../src/api/clients/apiClient';
import Ajv from 'ajv';
import { userSchema } from '../../src/api/schemas/userSchema';
import { UsersEndpoint } from '../../src/api/data/endpoints';

let client: ApiClient;

const ajv = new Ajv();

test.beforeEach(async () => {
  client = new ApiClient();
  await client.init();
});

test.afterEach(async () => {
  await client.dispose();
});

// A3.10

test('GET non-existent user', async () => {
  const response = await client.get(UsersEndpoint + '/9999');

  expect(response.status()).toBe(404);

  const body = await response.text();

  expect(body).toBe('{}');
});

// A3.11

test('Delayed response handling', async () => {
  const start = Date.now();

  const response = await client.get(UsersEndpoint + '?delay=3');

  const end = Date.now();

  expect(response.status()).toBe(200);

  expect(end - start).toBeLessThan(6000);

  const body = await response.json();

  expect(body.data.length).toBeGreaterThan(0);
});

// A3.12

test('Schema validation', async () => {
  const response = await client.get(UsersEndpoint + '/2');

  expect(response.status()).toBe(200);

  const body = await response.json();

  const validate = ajv.compile(userSchema);

  const valid = validate(body);

  expect(valid).toBeTruthy();
});
