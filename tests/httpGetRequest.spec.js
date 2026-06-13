import { test, expect } from "@playwright/test";

test("HTTP GET request using Playwright", async ({ request }) => {
  const endpoint = "https://jsonplaceholder.typicode.com/posts/1";
  const response = await request.get(endpoint);

  expect(response).toBeOK();

  const responseBody = await response.json();

  expect(responseBody).toMatchObject({
    userId: expect.any(Number),
    id: 1,
    title: expect.any(String),
    body: expect.any(String),
  });
});
