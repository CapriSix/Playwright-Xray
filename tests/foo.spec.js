const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => { await page.goto('https://www.wikipedia.org/');
    await page.click('text=English');
    //assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Main_Page');
    await page.click('text=Mathematics');
    expect(page.url()).toContain('https://en.wikipedia.org/wiki/Portal:Mathematics');
});

/*
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');

  // Click text=English
  await page.click('text=English');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Main_Page');

  // Click text=Mathematics
  await page.click('text=Mathematics');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Portal:Mathematics');
  await page.screenshot({path:`wiki_screen.png`});
  // Click text=pattern
  await page.click('text=pattern');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Pattern');

  // ---------------------
  await context.close();
  await browser.close();
})();
*/