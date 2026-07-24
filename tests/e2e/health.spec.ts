import { expect, test } from '@playwright/test'
test('health endpoint reports ok', async ({ request }) => {
  const response = await request.get('/api/health')
  expect(response.ok()).toBeTruthy()
  expect(await response.json()).toMatchObject({ status: 'ok' })
})
