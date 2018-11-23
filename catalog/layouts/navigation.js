import { pageLoader } from "catalog";

const nav = {
  title: 'Examples',
  pages: [
    {
      path: "/layouts-intro",
      title: "Intro",
      content: pageLoader(() => import("./intro.md"))
    }, {
      path: "/layouts/vattenfall-se",
      title: "- Corporate web",
      content: pageLoader(() => import("./layout-start-page.md"))
    }
  ]
}

export default nav