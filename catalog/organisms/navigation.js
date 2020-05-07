import { pageLoader } from "@alchemy-se/catalog";
import ReactGA from "react-ga";

const trackPage = (page) => {
  ReactGA.pageview(page);
};

const nav = [
  {
    path: "/css/organisms",
    title: "Organisms",
    content: pageLoader(() => {trackPage("/css/organisms"); return import("./index.md")})
  }, {
    path: "/css/footer",
    title: "- Footer",
    content: pageLoader(() => {trackPage("/css/footer"); return import("./footer.md")})
  }, {
    path: "/css/form",
    title: "- Form",
    content: pageLoader(() => {trackPage("/css/form"); return import("./form.md")})
  }, {    
    path: "/css/hero",
    title: "- Hero",
    content: pageLoader(() => {trackPage("/css/hero"); return import("./hero.md")})
  }, {
    path: "/css/navigation",
    title: "- Navigation",
    content: pageLoader(() => {trackPage("/css/navigation"); return import("./navigation.md")})

  },
]
export default nav