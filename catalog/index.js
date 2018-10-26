import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import moleculesNavigation from './molecules/navigation'
import organismsNavigation from './organisms/navigation'
import layoutsNavigation from './layouts/navigation'
const styles = [
  '/dist/css/reboot.css',
  '/dist/css/main.css'
]

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./WELCOME.md"))
  },
  layoutsNavigation,
  {
    title: 'CSS Library',
    pages: [
      {
        path: "/getting-started",
        title: "Getting started",
        content: pageLoader(() => import("./getting-started.md"))
      }, {
        path: "/grid",
        title: "Grid",
        content: pageLoader(() => import("./grid.md"))
      }, {
        path: "/responsive",
        title: "Responsive",
        content: pageLoader(() => import("./responsive.md"))
      }, {
        path: "/sizing",
        title: "Sizing",
        content: pageLoader(() => import("./sizing.md"))
      }, {
        path: "/colors",
        title: "Colors & borders",
        content: pageLoader(() => import("./colors.md"))
      }, {
        path: "/spacing",
        title: "Spacing",
        content: pageLoader(() => import("./spacing.md"))
      }, {
        path: "/components-intro",
        title: "Atoms",
        content: pageLoader(() => import("./components/intro.md"))
      }, {
        path: "/css/text",
        title: "- Text",
        content: pageLoader(() => import("./components/text.md"))
      }, {
        path: "/css/button",
        title: "- Button",
        content: pageLoader(() => import("./components/button.md"))
      }, 
      ...moleculesNavigation,
      ...organismsNavigation,
    ]
  },
  {
    path: "/react",
    title: "React",
    content: pageLoader(() => import("./react.md"))
  },
  {
    path: "/contributing",
    title: "Contributing",
    content: pageLoader(() => import("./not-produced-yet.md"))
  }
];

const theme = {
  background: "#F9F9F9",
  textColor: "#333333",
  codeColor: "#00263E",
  linkColor: "#FF5555",

  // NavigationBar background color, but also sometimes used as a foreground
  // or border color.
  lightColor: "#D6D6D6",

  // Used in PageHeader
  pageHeadingBackground: "#003B5C",
  pageHeadingTextColor: "#fff",

  // Used in Menu and PageHeader to make sure the top parts have
  // the same height.
  pageHeadingHeight: 200,

  // Used for navigation bar
  navBarBackground: "#F2F2F2",
  navBarTextColor: "#003B5C",

  // Used in ResponsiveTabs (tab text), Download specimen (title text).
  // Typography: headings.
  brandColor: "#003B5C",

  sidebarColor: "#F2F2F2",
  sidebarColorActive: "#D1312E",
  sidebarColorText: "#2071B5",
  sidebarColorTextActive: "#85254B",
  sidebarColorLine: "#EBEBEB",
  sidebarColorHeading: "#2071B5",

  // Used in the html, react, and image specimens.
  bgLight: "#F2F2F2",
  bgDark: "#333333"
}

const responsiveSizes =  [
  {name: 'phone', width: 375, height: 667},
  {name: 'tablet', width: 768, height: 1024},
  {name: 'desktop', width: 1920, height: 1080},
]

ReactDOM.render(
  <Catalog 
    title="Vattenfall Design System" 
    useBrowserHistory 
    responsiveSizes={responsiveSizes}
    pages={pages} 
    theme={theme} 
    styles={styles} />,
  document.getElementById("catalog")
);
