import { pageLoader } from "catalog";

const nav = [
  {
    path: "/css/molecules",
    title: "Molecules",
    content: pageLoader(() => import("./index.md"))
  }, {
    path: "/css/Blockquote",
    title: "- Blockquote",
    content: pageLoader(() => import("./blockquote.md"))
  }, {
    path: "/css/Quote",
    title: "- Quote",
    content: pageLoader(() => import("./quote.md"))
  }
]
export default nav