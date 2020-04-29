import { pageLoader } from "@alchemy-se/catalog";
import ReactGA from "react-ga";

const trackPage = (page) => {
  ReactGA.pageview(page);
};

const nav = [
  {
    path: "/css/button-group",
    title: "- Button Group",
    content: pageLoader(() => {trackPage("/css/button-group"); return import("./button-group.md")})
  }, {
    path: "/css/card",
    title: "- Card",
    content: pageLoader(() => {trackPage("/css/card"); return import("./card.md")})
  }, {
    path: "/css/cookie-banner",
    title: "- Cookie Banner",
    content: pageLoader(() => {trackPage("/css/cookie-banner"); return import("./cookie-banner.md")})
  }, {
    path: "/css/image-block",
    title: "- Image Block",
    content: pageLoader(() => {trackPage("/css/image-block"); return import("./image-block.md")})
  }, {
    path: "/css/image-with-caption",
    title: "- Image with Caption",
    content: pageLoader(() => {trackPage("/css/image-with-caption"); return import("./image-with-caption.md")})
  }, {
    path: "/css/large-quote",
    title: "- Large Quote",
    content: pageLoader(() => {trackPage("/css/large-quote"); return import("./large-quote.md")})
  }, {
    path: "/css/linked-list-block",
    title: "- Linked List Block",
    content: pageLoader(() => {trackPage("/css/linked-list-block"); return import("./linked-list-block.md")})
  }, {
    path: "/css/media-block",
    title: "- Media Block",
    content: pageLoader(() => {trackPage("/css/media-block"); return import("./media-block.md")})
  }, {
    path: "/css/pagination",
    title: "- Pagination",
    content: pageLoader(() => {trackPage("/css/pagination"); return import("./pagination.md")})
  }, {
    path: "/css/parallax-image-block",
    title: "- Parallax Image Block",
    content: pageLoader(() => {trackPage("/css/parallax-image-block"); return import("./parallax-image-block.md")})
  }, {
    path: "/css/progress",
    title: "- Progress",
    content: pageLoader(() => {trackPage("/css/progress"); return import("./progress.md")})
  }, {
    path: "/css/shareable-image",
    title: "- Shareable Image",
    content: pageLoader(() => {trackPage("/css/shareable-image"); return import("./shareable-image.md")})
  }, {
    path: "/css/small-quote",
    title: "- Small Quote",
    content: pageLoader(() => {trackPage("/css/small-quote"); return import("./small-quote.md")})
  }, {
    path: "/css/three-column",
    title: "- Three Column",
    content: pageLoader(() => {trackPage("/css/three-column"); return import("./three-column.md")})
  }, {
    path: "/css/topbar",
    title: "- Top bar",
    content: pageLoader(() => {trackPage("/css/topbar"); return import("./topbar.md")})
  }
]
export default nav