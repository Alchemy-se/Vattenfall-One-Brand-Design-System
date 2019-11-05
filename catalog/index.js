import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from '@alchemy-se/catalog';
import moleculesNavigation from './molecules/navigation';
import organismsNavigation from './organisms/navigation';
import layoutsNavigation from './layouts/navigation';


//All this needed?
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

import Welcome from './WELCOME';
import Designers from './designers/getting-started-designers';
import Guidelines from './Guidelines';
import Video from './Video'

const styles = [
  '/dist/css/reboot.css',
  '/dist/css/main.css',
  '/dist/css/documentation.css'
]

const scripts = [
  '/dist/js/horizon.min.js'
]

const pages = [
  {
    path: "/",
    title: "Digital Design System",
    content: Welcome 
  },
  {
    title: 'Get started',
    pages: [
      { 
        path: "/design",
        title: "Designers",
        content: Designers
      },
      {
        title: 'Developers',
        path: "/getting-started",
        content: pageLoader(() => import("./getting-started.md"))
      },
    ]
  },
  layoutsNavigation,
  {
    title: 'Components',
    pages: [
      {
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
        path: "/css/utility-typography",
        title: "- Utility Typography",
        content: pageLoader(() => import("./components/utility-typography.md"))
      }, {
        path: "/css/button",
        title: "- Button",
        content: pageLoader(() => import("./components/button.md"))
      }, {
        path: "/css/list",
        title: "- Lists",
        content: pageLoader(() => import("./components/list.md"))
      }, {
        path: "/css/numbered-list",
        title: "- Numbered List",
        content: pageLoader(() => import("./components/numbered-list.md"))
      }, {
        path: "/css/badge",
        title: "- Badge",
        content: pageLoader(() => import("./components/badge.md"))
      }, {
        path: "/css/preloader",
        title: "- Preloader",
        content: pageLoader(() => import("./components/preloader.md"))
      }, {
        path: "/css/table",
        title: "- Table",
        content: pageLoader(() => import("./components/table.md"))
      }, {
        path: "/css/tab-bar",
        title: "- Tab Bar",
        content: pageLoader(() => import("./components/tab-bar.md"))
      }, {
        path: "/css/tooltip",
        title: "- Tooltip",
        content: pageLoader(() => import("./components/tooltip.md"))
      }, {
        path: "/css/drop-down",
        title: "- Drop-down List",
        content: pageLoader(() => import("./components/drop-down.md"))
      }, {
        path: "/css/input",
        title: "- Input",
        content: pageLoader(() => import("./components/input.md"))
      }, {
        path: "/css/notification-module",
        title: "- Notification Module",
        content: pageLoader(() => import("./components/notification-module.md"))
      }, {
        path: "/css/subscribe",
        title: "- Subscribe",
        content: pageLoader(() => import("./components/subscribe.md"))
      }, {
        path: "/css/icon-text",
        title: "- Icon Text",
        content: pageLoader(() => import("./components/icon-text.md"))
      },
    
      ...moleculesNavigation,
      ...organismsNavigation,
      
      {
        path: "/components/utilities",
        title: "Utilities",
        content: pageLoader(() => import("./utilities/utilities.md"))
      }, {
        path: "/utilities/favicon",
        title: "- Favicon",
        content: pageLoader(() => import("./utilities/favicon.md"))
      }, {
        path: "/utilities/icons",
        title: "- Icons",
        content: pageLoader(() => import("./utilities/icons.md"))
      },
    ]
  },
  {
    path: "/guidelines",
    title: 'Design guidelines',
    content: Guidelines
  },
  
 /* {
    path: "/contribute",
    title: "Contributing",
    content: pageLoader(() => import("./contribute.md"))
  }*/
];

const theme = {
  background: "#ffffff",
  textColor: "#222222",
  codeColor: "#00263E",
  linkColor: "#1964A3",

  // NavigationBar background color, but also sometimes used as a foreground
  // or border color.
  lightColor: "#D6D6D6",

  // Used in PageHeader
  pageHeadingBackground: "transparent",
  pageHeadingTextColor: "#222222",

  // Used in Menu and PageHeader to make sure the top parts have
  // the same height.
  pageHeadingHeight: 140,

  // Used for navigation bar
  navBarBackground: "#F2F2F2",
  navBarTextColor: "#003B5C",

  // Used in ResponsiveTabs (tab text), Download specimen (title text).
  // Typography: headings.
  brandColor: "#003B5C",

  sidebarColor: "#EDF1F6",
  sidebarColorActive: "#222222",
  sidebarColorText: "#1964A3",
  sidebarColorTextActive: "#1964A3",
  sidebarColorLine: "#EBEBEB",
  sidebarColorHeading: "#2071B5",

  // Used in the html, react, and image specimens.
  bgLight: "#ffffff",
  bgDark: "#333333"
}

const responsiveSizes =  [
  {name: 'Phone', width: 375, height: 667},
  {name: 'Tablet', width: 768, height: 1024},
  {name: 'Desktop', width: 1920, height: 1080},
]

const menuFooterLinkStyle = {
  color: '#1964A3',
  fontSize: '16px',
  fontWeight: 'normal',
  display: 'block',
  letterSpacing: 0,
  lineHeight: '32px',
  padding: '5px 0',
  textDecoration: 'none',
}

const menuFooterLinkIconStyle = {
  verticalAlign: 'baseline',
  marginRight: '5px'
}

const menuFooter = () => (
  <div style={{ padding: '40px 42px', fontFamily: 'Vattenfall Hall' }}>
    <a href="https://app.goabstract.com/organizations/2776932d-ce7d-4fc3-8c46-0da875d726d3/projects" style={menuFooterLinkStyle}>
      <img style={menuFooterLinkIconStyle} src="/img/docs/abstract.svg" /> Abstract
    </a>
    <a href="https://github.com/Alchemy-se/Vattenfall-One-Brand-Design-System" style={menuFooterLinkStyle}>
      <img style={menuFooterLinkIconStyle} src="/img/docs/github.svg" /> Github
    </a>
  </div>
)

ReactDOM.render(
  <Catalog 
    title="Vattenfall Design System" 
    useBrowserHistory 
    responsiveSizes={responsiveSizes}
    pages={pages} 
    logoSrc={'/img/docs/logo.svg'}
    theme={theme} 
    menuFooter={menuFooter}
    styles={[]}
    globalStyles={styles}
    scripts={scripts} />,
  document.getElementById("catalog")
);
