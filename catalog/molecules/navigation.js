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
    path: "/css/shareable-image",
    title: "- Shareable Image",
    content: pageLoader(() => import("./shareable-image.md"))
  }, {
    path: "/css/media-block",
    title: "- Media Block",
    content: pageLoader(() => import("./media-block.md"))
  }, {
    path: "/css/parallax-image-block",
    title: "- Parallax Image Block",
    content: pageLoader(() => import("./parallax-image-block.md"))
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