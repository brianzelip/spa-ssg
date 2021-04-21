const { firefox } = require('playwright-firefox');

async function spaSSG(url, routes = []) {
  /**
   * @param {string} url - url of SPA dev server instance, eg http://localhost:1234/
   * @param {array} routes - array of routes to prerender, empty by default
   *
   * Only supports single route ('/') atm
   */

  const single_route = routes.length === 0;

  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  if (single_route) {
    await page.goto(url);
    const html = await page.content();
    await browser.close();

    return html;
  }
}

module.exports = spaSSG;
