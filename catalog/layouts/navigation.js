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
    }, {
      path: "/layouts/app",
      title: "- Mobile App",
      content: pageLoader(() => import("./layout-mobile-app.md"))
    }, {
      path: "/layouts/tool",
      title: "- Web service",
      content: pageLoader(() => import("./layout-web-tool.md"))
    },
  ]
}

export default nav