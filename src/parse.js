import puppeteer from 'puppeteer';

export const getParseWbInfo = async (articul) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      `https://www.wildberries.ru/catalog/${articul}/detail.aspx`,
      {
        waitUntil: 'networkidle0',
      },
    );

    await page.setViewport({ width: 1280, height: 720 });

    const wbScreen = await page.screenshot();
    await browser.close();
    return wbScreen;
  } catch (e) {
    console.log('getParseWbInfo=', e);
    return null;
  }
};
