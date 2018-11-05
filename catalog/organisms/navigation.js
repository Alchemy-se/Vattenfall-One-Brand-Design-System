import { pageLoader } from "catalog";

const nav = [
  {
    path: "/css/organisms",
    title: "Organisms",
    content: pageLoader(() => import("./index.md"))
  }, {
    path: "/css/footer",
    title: "- Footer",
    content: pageLoader(() => import("./footer.md"))
  }, {
    path: "/css/form",
    title: "- Form",
    content: pageLoader(() => import("./form.md"))
  }, {    
    path: "/css/hero",
    title: "- Hero",
    content: pageLoader(() => import("./hero.md"))
  }, {
    path: "/css/navigation",
    title: "- Navigation",
    content: pageLoader(() => import("./navigation.md"))

  },
]
export default nav