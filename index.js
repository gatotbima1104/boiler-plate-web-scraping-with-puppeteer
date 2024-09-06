import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import { setTimeout } from "timers/promises";

puppeteer.use(StealthPlugin());

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: [`--no-sandbox`],
    });

    const page = await browser.newPage();
    const url = "example.com";

    await page.goto(url, { waitUntil: "domcontentloaded" });
    await setTimeout(2000);

    await browser.close();
  } catch (error) {
    console.log(error);
  }
})();
