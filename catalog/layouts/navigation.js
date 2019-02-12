import { pageLoader } from "@alchemy-se/catalog";
import Examples from "../EXAMPLES";

const nav = {
  title: 'Examples',
  pages: [
    {
      path: "/examples",
      title: "Design Gallery",
      content: Examples
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