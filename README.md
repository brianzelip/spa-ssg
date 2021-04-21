# Single page application static site generator (spa-ssg)

```bash
npm install -D spa-ssg
```

Ths is a wrapper around [Playwright Firefox](https://playwright.dev/).

It takes the url of your _live_ SPA dev server instance, and returns the DOM of the generated app as an html string.

```js
const spassg = require('spa-ssg');

const url = 'http://localhost:1234/';

spassg(url).then((html) => {
  console.log(html);
});
```

⚠️ Currently only supports a single route (ie: the `url` above).

---

MIT

By [Brian Zelip](https://zelip.me)
