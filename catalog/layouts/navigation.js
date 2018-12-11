import { pageLoader } from "catalog";

const nav = {
  title: 'Examples',
  pages: [
    {
      path: "/layouts-intro",
      title: "Intro",
      content: pageLoader(() => import("./intro.md"))
    }, {
      path: "/layouts/vattenfall-se-start",
      title: "- Web Start",
      content: pageLoader(() => import("./layout-web-start-page.md"))
    }, {
      path: "/layouts/vattenfall-se-article",
      title: "- Web Article",
      content: pageLoader(() => import("./layout-web-article-page.md"))
    }, {
      path: "/layouts/vattenfall-se-content",
      title: "- Web Content Page",
      content: pageLoader(() => import("./layout-web-content-page.md"))
    }
  ]
}

export default nav