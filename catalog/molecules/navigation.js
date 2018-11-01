import { pageLoader } from "catalog";

const nav = [
  {
    path: "/css/molecules",
    title: "Molecules",
    content: pageLoader(() => import("./index.md"))
  }, {
    path: "/css/image-with-caption",
    title: "- Image with Caption",
    content: pageLoader(() => import("./image-with-caption.md"))
  }, {
    path: "/css/large-quote",
    title: "- Large Quote",
    content: pageLoader(() => import("./large-quote.md"))
  }, {
    path: "/css/small-quote",
    title: "- Small Quote",
    content: pageLoader(() => import("./small-quote.md"))
  }
]
export default nav