import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import Examples from './EXAMPLES';
import Guidelines from './guidelines';
import Designers from './designers/getting-started-designers';
import Developers from './developers/getting-started-developers';

import Grid from './components/grid/grid';
import Responsive from './components/responsive/responsive';
import Sizing from './components/sizing/sizing';
import Colors from './components/colors/colors';
import Spacing from './components/spacing/spacing';

import Text from './components/text/text';
import UtilityTypography from './components/utility-typography/utilityTypography';
import Button from './components/button/button';
import Lists from './components/list/lists';
import DropdownList from "./components/dropdown/dropdown";
import Input from './components/input/input'
import Welcome from './WELCOME';
import Intro from './components/intro/intro';
import Articles from './articles/articles';
import ArticlesOverview from './articles/articlesOverview';

import DynamicView from './components/dynamicView';
import ComponentOverview from "./overview/componentOverview";

// Guidelines
import GuidelinesWrapper from "./guidelines/wrapper";
import GuidelinesButtons from './guidelines/buttons/Buttons';
import GuidelinesForms from './guidelines/forms/Forms';
import GuidelinesColors from './guidelines/colors/Colors';
import GuidelinesIllustrations from './guidelines/illustrations/Illustrations';
import GuidelinesMotion from './guidelines/motion/Motion';
import GuidelinesTypography from './guidelines/typography/Typography';
import GuidelinesGrid from './guidelines/grid/Grid';
import GuidelinesLogotype from './guidelines/logotype/Logotype';
import GuidelinesIcons from './guidelines/icons/Icons';
import GuidelinesSpacers from './guidelines/spacers/Spacers';
import GuidelinesInfoGraphics from './guidelines/infographics/InfoGraphics';
import Navbar from "./components/exlude-not-done/navbar/navbar";
import Preloader from "./components/preloader/preloader";
import Tooltip from "./components/tooltip/tooltip";


function usePageViews(onRouteChange) {
  let location = useLocation();
  onRouteChange(location.pathname);
}


const COMPONENTS_ROUTES = [
  { path: '/grid', name: 'Grid', component: <Grid /> },
  { path: '/responsive', name: 'Responsive', component: <Responsive /> },
  { path: '/sizing', name: 'Sizing', component: <Sizing /> },
  { path: '/colors', name: 'Colors', component: <Colors /> },
  { path: '/spacing', name: 'Spacing', component: <Spacing /> },
  { path: '/intro', name: 'Atoms', component: <Intro /> },
  // components/css
  { path: '/css/text', name: 'Text', component: <Text /> },
  { path: '/css/utility-typography', name: 'Utility Typography', component: <UtilityTypography /> },
  { path: '/css/button', name: 'Button', component: <Button /> },
  { path: '/css/drop-down', name: 'Drop-down List', component: <DropdownList /> },
  { path: '/css/input', name: 'Input', component: <Input /> },

  {
    path: '/css/gdpr-consent-module',
    name: 'GDPR Consent Module',
    mdFile: require('./components/GDPR/gdpr-concent-module/html/gdpr-concent-module.md'),
  },

  { path: '/css/list', name: 'Lists', component: <Lists /> },
  { path: '/css/navigation', name: 'Navigation', component: <Navbar /> },
  { path: '/css/preloader', name: 'Preloader', component: <Preloader /> },

  {
    path: '/css/numbered-list',
    name: 'Numbered List',
    mdFile: require('./components/numbered-list/standard-list/html/standard-list.md')
  },
  { path: '/css/badge', name: 'Badge', mdFile: require('./components/badge/example/html/badge.md') },
  { path: '/css/table', name: 'Table', mdFile: require('./components/table/table/html/table.md') },
  { path: '/css/tab-bar', name: 'Tab Bar', mdFile: require('./components/tab-bar/tab-bar/html/tab-bar.md') },
  { path: '/css/tooltip', name: 'Tooltip', component: <Tooltip /> },
  {
    path: '/css/notification-module',
    name: 'Notification Module',
    mdFile: require('./components/notification-module/notification-module/html/notification-module.md'),
  },
  { path: '/css/subscribe', name: 'Subscribe', mdFile: require('./components/subscribe/standard/html/standard.md') },
  { path: '/css/icon-text', name: 'Icon Text', mdFile: require('./components/icon-text/standard/html/standard.md') },

  { path: '/css/card', name: 'Card', mdFile: require('./molecules/card.md') },
  { path: '/css/button-group', name: 'Button Group', mdFile: require('./molecules/button-group.md') },
  { path: '/css/cookie-banner', name: 'Cookie Banner', mdFile: require('./molecules/cookie-banner.md') },
  { path: '/css/image-block', name: 'Image Block', mdFile: require('./molecules/image-block.md') },
  { path: '/css/image-with-caption', name: 'Image with Caption', mdFile: require('./molecules/image-with-caption.md') },
  { path: '/css/shareable-image', name: 'Shareable Image', mdFile: require('./molecules/shareable-image.md') },
  { path: '/css/media-block', name: 'Media Block', mdFile: require('./molecules/media-block.md') },
  { path: '/css/linked-list-block', name: 'Linked List Block', mdFile: require('./molecules/linked-list-block.md') },
  {
    path: '/css/parallax-image-block',
    name: 'Parallax Image Block',
    mdFile: require('./molecules/parallax-image-block.md'),
  },
  { path: '/css/large-quote', name: 'Large Quote', mdFile: require('./molecules/large-quote.md') },
  { path: '/css/small-quote', name: 'Small Quote', mdFile: require('./molecules/small-quote.md') },
  { path: '/css/three-column', name: 'Three Column', mdFile: require('./molecules/three-column.md') },
  { path: '/css/topbar', name: 'Top Bar', mdFile: require('./molecules/topbar.md') },
  { path: '/css/pagination', name: 'Pagination', mdFile: require('./molecules/pagination.md') },
  { path: '/css/progress', name: 'Progress', mdFile: require('./molecules/progress.md') },
  { path: '/css/organisms', name: 'Organisms', mdFile: require('./organisms/index.md') },
  { path: '/css/footer', name: 'Footer', mdFile: require('./organisms/footer.md') },
  { path: '/css/form', name: 'Form', mdFile: require('./organisms/form.md') },
  { path: '/css/hero', name: 'Hero', mdFile: require('./organisms/hero.md') },
  // components/utilities
  { path: '/utilities/favicon', name: 'Favicon', mdFile: require('./utilities/favicon.md') },
  { path: '/utilities/icons', name: 'Icons', mdFile: require('./utilities/icons.md') },
  { path: '/utilities', name: 'Utilities', mdFile: require('./utilities/utilities.md') },
  // Redirect if path is only /components.
  { path: '/', name: '', component: <Redirect to={'/components/grid'} /> },
];
const GUIDELINES_ROUTES = [
  {
    path: '/guidelines/buttons',
    name: 'Buttons',
    component: <GuidelinesWrapper><GuidelinesButtons /></GuidelinesWrapper>
  },
  { path: '/guidelines/forms', name: 'Forms', component: <GuidelinesWrapper><GuidelinesForms /></GuidelinesWrapper> },
  {
    path: '/guidelines/colors',
    name: 'Colors',
    component: <GuidelinesWrapper><GuidelinesColors /></GuidelinesWrapper>
  },
  {
    path: '/guidelines/illustrations',
    name: 'Illustrations',
    component: <GuidelinesWrapper><GuidelinesIllustrations /></GuidelinesWrapper>
  },
  {
    path: '/guidelines/motion',
    name: 'Motion',
    component: <GuidelinesWrapper><GuidelinesMotion /></GuidelinesWrapper>
  },
  {
    path: '/guidelines/typography',
    name: 'Typography',
    component: <GuidelinesWrapper><GuidelinesTypography /></GuidelinesWrapper>
  },
  { path: '/guidelines/grid', name: 'Grid', component: <GuidelinesWrapper><GuidelinesGrid /></GuidelinesWrapper> },
  {
    path: '/guidelines/logotype',
    name: 'Logotype',
    component: <GuidelinesWrapper><GuidelinesLogotype /></GuidelinesWrapper>
  },
  { path: '/guidelines/icons', name: 'Icons', component: <GuidelinesWrapper><GuidelinesIcons /></GuidelinesWrapper> },
  {
    path: '/guidelines/spacers',
    name: 'Spacers',
    component: <GuidelinesWrapper><GuidelinesSpacers /></GuidelinesWrapper>
  },
  {
    path: '/guidelines/info-graphics',
    name: 'Info Graphics',
    component: <GuidelinesWrapper><GuidelinesInfoGraphics /></GuidelinesWrapper>
  }
]

const Routes = ({ onRouteChange, openModal }) => {
  usePageViews(onRouteChange);
  let location = useLocation();
  return (
    <Switch>
      <Route path="/examples">
        <Examples openModal={openModal} />
      </Route>
      {COMPONENTS_ROUTES.map((item) => (
        <Route key={'/components' + item.path} path={'/components' + item.path}>
          {item.component ? item.component : <DynamicView title={item.name} mdFile={item.mdFile} />}
        </Route>
      ))}
      <Route path="/get-started/design">
        <Designers />
      </Route> <Route path="/get-started/design">
      <Designers />
    </Route>
      <Route path="/get-started/developer">
        <Developers />
      </Route>
      <Route path={'/get-started'}>
        <Redirect to={'/get-started/design'} />
      </Route>
      {GUIDELINES_ROUTES.map((item) => (
        <Route key={item.path} path={item.path}>
          {item.component}
        </Route>
      ))}
      <Route path={'/guidelines'}>
        <Guidelines />
      </Route>
      <Route exact path={'/articles/:articleId'} component={Articles} />
      <Route path={'/articles'}>
        <ArticlesOverview />
      </Route>
      <Route path={'/overview'}>
        <ComponentOverview />
      </Route>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  );
};

export default Routes;
