import { pageLoader } from "catalog";

const nav = [
  {
    path: "/css/molecules",
    title: "Molecules",
    content: pageLoader(() => import("./index.md"))
  }, {
    path: "/css/card",
    title: "- Card",
    content: pageLoader(() => import("./card.md"))
  }, {
    path: "/css/button-group",
    title: "- Button Group",
    content: pageLoader(() => import("./button-group.md"))
  }, {
    path: "/css/cookie-banner",
    title: "- Cookie Banner",
    content: pageLoader(() => import("./cookie-banner.md"))
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
  }, {
    path: "/css/three-column",
    title: "- Three Column",
    content: pageLoader(() => import("./three-column.md"))
  }, {
    path: "/css/pagination",
    title: "- Pagination",
    content: pageLoader(() => import("./pagination.md"))
  }, {
    path: "/css/progress",
    title: "- Progress",
    content: pageLoader(() => import("./progress.md"))
  }
]
export default nav