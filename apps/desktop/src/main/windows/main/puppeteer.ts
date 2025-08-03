import puppeteer from 'puppeteer';

export async function getOkcupidToken(wsLink: string) {
  const discoverUrl = 'https://okcupid.com/discover'
  const discoverUrl1 = 'https://www.okcupid.com/discover'
  const browser = await puppeteer.connect({
    browserWSEndpoint: wsLink,
  });
  let okcupidPage
  let isNewPage = false
  const allPage = await browser.pages();
  for (const key in allPage) {
    const page = allPage[key];
    const title = await page.title()
    if (title.toLowerCase().includes('okcupid')) {
      okcupidPage = page
      break
    }
  }
  if (!okcupidPage) {
    console.log('没找到 okcupid 窗口, 新建前往')
    isNewPage = true
    okcupidPage = await browser.newPage();
    await okcupidPage.goto(discoverUrl, {
      waitUntil: 'networkidle0'
    });
  }
  const curUrl: string = await okcupidPage.url()
  if (!curUrl.startsWith(discoverUrl) && !curUrl.startsWith(discoverUrl1)) {
    return {}
  }
  const localStorageData = await okcupidPage.evaluate(() => {
    return JSON.stringify(window.localStorage);
  });

  if (isNewPage) await okcupidPage.close();

  // console.log('LocalStorage:', localStorageData);
  const storage = JSON.parse(localStorageData)
  if (storage.session) {
    return {
      token: String(storage.session).replace('Bearer', '').trim()
    }
  }
  await browser.disconnect();
  return {}
}
