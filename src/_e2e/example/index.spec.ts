import { expect } from "@playwright/test";
import type { Browser, Page } from "playwright";
import { chromium } from "playwright";
import type { PreviewServer } from "vite";
import { preview } from "vite";

describe("basic", async () => {
  let server: PreviewServer;
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    server = await preview({ preview: { port: 3000 } });
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    await new Promise<void>((resolve, reject) => {
      server.httpServer.close((error) => (error ? reject(error) : resolve()));
    });
  });

  it("should change count when button clicked", async () => {
    await page.goto("http://localhost:3000");
    const button = page.getByRole("button", { name: /count is/ });
    await expect(button).toBeVisible();

    await expect(button).toHaveText("count is 0");

    await button.click();
    await expect(button).toHaveText("count is 1");
  }, 60_000);
});
