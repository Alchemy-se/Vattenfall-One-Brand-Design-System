import { pageLoader } from "catalog";

const nav = [
  {
    path: "/css/molecules",
    title: "Molecules",
    content: pageLoader(() => import("./index.md"))
  }, {
    path: "/css/blockquote",
    title: "- Blockquote",
    content: pageLoader(() => import("./blockquote.md"))
  }, {
    path: "/css/image-with-caption",
    title: "- Image with Caption",
    content: pageLoader(() => import("./image-with-caption.md"))
  }, {
    path: "/css/quote",
    title: "- Quote",
    content: pageLoader(() => import("./quote.md"))
  }
]
export default nav