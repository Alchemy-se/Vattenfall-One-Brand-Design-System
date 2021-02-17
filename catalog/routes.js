import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'

import Examples from './EXAMPLES'
import Guidelines from './guidelines'
import Designers from './get-started/designers/getting-started-designers'
import Developers from './get-started/developers/getting-started-developers'

import Grid from './components/grid/grid'
import Responsive from './components/responsive/responsive'
import Sizing from './components/sizing/sizing'
import Colors from './components/colors/colors'
import Spacing from './components/spacing/spacing'

import Text from './components/text/text'
import UtilityTypography from './components/utility-typography/utilityTypography'
import Button from './components/button/button'
import Lists from './components/list/lists'
import DropdownList from './components/dropdown/dropdown'
import Input from './components/input/input'
import Upload from './components/upload/upload'
import Welcome from './WELCOME'
import Intro from './components/intro/intro'
import Articles from './articles/articles'
import ArticlesOverview from './articles/articlesOverview'
import Favicon from './components/favicon/favicon'
import Icons from './components/icons/icons'
import Hero from './components/hero/hero'
import GDPRConsentModule from './components/GDPR/gdpr-concent-module'
import NumberedList from './components/numbered-list/numbered-list'
import Badge from './components/badge/badge'
import Table from './components/table/table'
import TopBar from './components/topbar/topbar'
import NotificationModule from './components/notification-module/notification-module'
import Subscribe from './components/subscribe/subscribe'
import IconText from './components/icon-text/icon-text'
import ButtonGroup from './components/button-group/button-group'
import CookieBanner from './components/cookie-banner/cookie-banner'
import Navigation from './components/navigation/Navigation'

// PARALLAX
// import ParallaxImageBlock from "./components/parallax-image-block/parallax-image-block";
import ParallaxImageBlock from './development/parallax'

import Footer from './components/footer/footer'
import Form from './components/form/form'
import TabBar from './components/tab-bar/tab-bar'
import Carousel from './components/carousel/carousel'
import DynamicView from './components/dynamicView'
import ComponentOverview from './overview/componentOverview'
import Navbar from './components/exclude-from-metadata/navbar/navbar'
import Preloader from './components/preloader/preloader'
import Tooltip from './components/tooltip/tooltip'
import Card from './components/card/card'
import ImageBlock from './components/image-block/image-block'
import ImageWithCaptions from './components/image-with-captions/image-with-captions'
import LargeQuote from './components/large-quote/large-quote'
import LinkedListBlock from './components/linked-list-block/linked-list-block'
import MediaBlock from './components/media-block/media-block'
import Pagination from './components/pagination/pagination'
import Progress from './components/progress/progress'
import SharableImage from './components/shareable-image/sharable-image'
import SmallQuote from './components/small-qoute/small-quote'
import ThreeColumn from './components/three-column/three-column'

// Guidelines
import GuidelinesHero from './guidelines/hero/Hero'
import GuidelinesWrapper from './guidelines/wrapper'
import GuidelinesWrapperNoScript from './guidelines/wrapperNoScript'
import GuidelinesButtons from './guidelines/buttons/Buttons'
import GuidelinesForms from './guidelines/forms/Forms'
import GuidelinesColors from './guidelines/colors/Colors'
import GuidelinesIllustrations from './guidelines/illustrations/Illustrations'
import GuidelinesMotion from './guidelines/motion/Motion'
import GuidelinesTypography from './guidelines/typography/Typography'
import GuidelinesGrid from './guidelines/grid/Grid'
import GuidelinesLogotype from './guidelines/logotype/Logotype'
import GuidelinesIcons from './guidelines/icons/Icons'
import GuidelinesSpacers from './guidelines/spacers/Spacers'
import GuidelinesInfoGraphics from './guidelines/infographics/InfoGraphics'
import GuidelinesCarousel from './guidelines/carousel/carousel'
import GuidelinesUpload from './guidelines/upload/Upload'
import GuideLinesNavigation from './guidelines/navigation/Navigation'
import GuideLinesSpinner from "./guidelines/spinner/Spinner"

// Other
import Login from './admin/login'

// remove this and the route in the Route -> switch function
import CarouselDev from './components/exclude-from-metadata/responsive-components/carousel'
import NewZendeskRequest from './zendesk/components/newZendeskRequest'
import Zendesk from './zendesk/zendesk'
import Overview from './get-started/introduction/introduction'
import Contact from './lib/singlePages/contact'
import Introduction from './get-started/introduction/introduction'
import IntroductionGuideline from './lib/singlePages/introductionGuideline'
import IntroductionComponents from './lib/singlePages/introductionComponents'
import Principles from './lib/singlePages/principles'
import Datepicker from './components/datepicker/datepicker'
import FullSearchResult from './lib/singlePages/fullSearchResult'

// disable scroll navigation on parallax page
function toggleScrollNavigation(pathname) {
  // triggers a component mount to make sure the element is rendered.
  useEffect(() => {
    let container = document.querySelector('.main__container___31py4')
    if (
      container != null &&
      pathname.includes('/components/css/parallax-image-block')
    ) {
      container.style.overflow = 'unset'
    } else {
      container.style.overflow = 'scroll'
    }
  }, [pathname])
}

function usePageViews(onRouteChange) {
  let location = useLocation()
  onRouteChange(location.pathname)
  toggleScrollNavigation(location.pathname)
}

const COMPONENTS_ROUTES = [
  { path: '/grid', name: 'Grid', component: <Grid uri={'/components/grid'} /> },
  {
    path: '/responsive',
    name: 'Responsive',
    component: <Responsive uri={'/components/responsive'} />,
  },
  {
    path: '/sizing',
    name: 'Sizing',
    component: <Sizing uri={'/components/sizing'} />,
  },
  {
    path: '/colors',
    name: 'Colors',
    component: <Colors uri={'/components/colors'} />,
  },
  {
    path: '/spacing',
    name: 'Spacing',
    component: <Spacing uri={'/components/spacing'} />,
  },
  {
    path: '/intro',
    name: 'Atoms',
    component: <Intro uri={'/components/intro'} />,
  },
  // components/css
  {
    path: '/css/text',
    name: 'Text',
    component: <Text uri={'/components/css/text'} />,
  },
  {
    path: '/css/utility-typography',
    name: 'Utility Typography',
    component: <UtilityTypography uri={'/components/css/utility-typography'} />,
  },
  {
    path: '/css/button',
    name: 'Button',
    component: <Button uri={'/components/css/button'} />,
  },
  {
    path: '/css/drop-down',
    name: 'Drop-down List',
    component: <DropdownList uri={'/components/css/drop-down'} />,
  },
  {
    path: '/css/input',
    name: 'Input',
    component: <Input uri={'/components/css/input'} />,
  },
  {
    path: '/css/upload',
    name: 'Upload',
    component: <Upload uri={'/components/css/upload'} />,
  },

  {
    path: '/css/gdpr-consent-module',
    name: 'GDPR Consent Module',
    component: (
      <GDPRConsentModule uri={'/components/css/gdpr-consent-module'} />
    ),
  },
  {
    path: '/css/list',
    name: 'Lists',
    component: <Lists uri={'/components/css/list'} />,
  },
  {
    path: '/css/navigation',
    name: 'Navigation',
    component: <Navigation uri={'/components/css/navigation'} />,
  },
  // {
  //   path: "/css/spinner",
  //   name: "Spinner",
  //   component: <Spinner uri={"/components/css/spinner"} />
  // },
  {
    path: '/css/preloader',
    name: 'Preloader',
    component: <Preloader uri={'/components/css/preloader'} />,
  },
  {
    path: '/css/numbered-list',
    name: 'Numbered List',
    component: <NumberedList uri={'/components/css/numbered-list'} />,
  },

  {
    path: '/css/badge',
    name: 'Badge',
    component: <Badge uri={'/components/css/badge'} />,
  },
  {
    path: '/css/datepicker',
    name: 'Datepicker',
    component: <Datepicker uri={''} />,
  },
  {
    path: '/css/table',
    name: 'Table',
    component: <Table uri={'/components/css/table'} />,
  },
  {
    path: '/css/tab-bar',
    name: 'Tab Bar',
    component: <TabBar uri={'/components/css/tab-bar'} />,
  },
  {
    path: '/css/tooltip',
    name: 'Tooltip',
    component: <Tooltip uri={'/components/css/tooltip'} />,
  },
  {
    path: '/css/notification-module',
    name: 'Notification Module',
    component: (
      <NotificationModule uri={'/components/css/notification-module'} />
    ),
  },

  {
    path: '/css/subscribe',
    name: 'Subscribe',
    component: <Subscribe uri={'/components/css/subscribe'} />,
  },
  {
    path: '/css/icon-text',
    name: 'Icon Text',
    component: <IconText uri={'/components/css/icon-text'} />,
  },

  {
    path: '/css/card',
    name: 'Card',
    component: <Card uri={'/components/css/card'} />,
  },
  {
    path: '/css/button-group',
    name: 'Button Group',
    component: <ButtonGroup uri={'/components/css/button-group'} />,
  },
  {
    path: '/css/cookie-banner',
    name: 'Cookie Banner',
    component: <CookieBanner uri={'components/css/cookie-banner'} />,
  },
  {
    path: '/css/image-block',
    name: 'Image Block',
    component: <ImageBlock uri={'/components/css/image-block'} />,
  },
  {
    path: '/css/image-with-caption',
    name: 'Image with Caption',
    component: <ImageWithCaptions uri={'/components/css/image-with-caption'} />,
  },
  {
    path: '/css/shareable-image',
    name: 'Shareable Image',
    component: <SharableImage uri={'/components/css/shareable-image'} />,
  },
  {
    path: '/css/media-block',
    name: 'Media Block',
    component: <MediaBlock uri={'/components/css/media-block'} />,
  },
  {
    path: '/css/linked-list-block',
    name: 'Linked List Block',
    component: <LinkedListBlock uri={'/components/css/linked-list-block'} />,
  },
  {
    path: '/css/parallax-image-block',
    name: 'Parallax Image Block',
    component: (
      <ParallaxImageBlock uri={'/components/css/parallax-image-block'} />
    ),
  },
  {
    path: '/css/large-quote',
    name: 'Large Quote',
    component: <LargeQuote uri={'/components/css/large-quote'} />,
  },
  {
    path: '/css/small-quote',
    name: 'Small Quote',
    component: <SmallQuote uri={'/components/css/small-quote'} />,
  },
  {
    path: '/css/three-column',
    name: 'Three Column',
    component: <ThreeColumn uri={'/components/css/three-column'} />,
  },
  {
    path: '/css/topbar',
    name: 'Top Bar',
    component: <TopBar uri={'/components/css/topbar'} />,
  },
  {
    path: '/css/pagination',
    name: 'Pagination',
    component: <Pagination uri={'/components/css/pagination'} />,
  },
  {
    path: '/css/progress',
    name: 'Progress',
    component: <Progress uri={'/components/css/progress'} />,
  },
  {
    path: '/css/organisms',
    name: 'Organisms',
    mdFile: require('./organisms/index.md'),
  },
  {
    path: '/css/block',
    name: 'block',
    mdFile: require('../catalog/components/exclude-from-metadata/blockquote.md'),
  },
  {
    path: '/css/footer',
    name: 'Footer',
    component: <Footer uri={'/components/css/footer'} />,
  },
  {
    path: '/css/form',
    name: 'Form',
    component: <Form uri={'/components/css/form'} />,
  },
  {
    path: '/css/hero',
    name: 'Hero',
    component: <Hero uri={'/components/css/hero'} />,
  },
  {
    path: '/css/carousel',
    name: 'Carousel',
    component: <Carousel uri={'/components/css/carousel'} />,
  },

  // components/utilities
  {
    path: '/utilities/favicon',
    name: 'Favicon',
    component: <Favicon uri={'/components/utilities/favicon'} />,
  },
  {
    path: '/css/icons',
    name: 'Icons',
    component: <Icons uri={'/components/css/icons'} />,
  },
  {
    path: '/utilities',
    name: 'Utilities',
    mdFile: require('./utilities/utilities.md'),
  },
]
const GUIDELINES_ROUTES = [
  {
    path: '/guidelines/buttons',
    name: 'Buttons',
    component: (
      <GuidelinesWrapper>
        <GuidelinesButtons />
      </GuidelinesWrapper>
    ),
  },
  {
    path: '/guidelines/forms',
    name: 'Forms',
    component: (
      <GuidelinesWrapper>
        <GuidelinesForms />
      </GuidelinesWrapper>
    ),
  },
  {
    path: '/guidelines/upload',
    name: 'Upload',
    component: (
      <GuidelinesWrapper>
        <GuidelinesUpload />
      </GuidelinesWrapper>
    ),
  },
  {
    path: '/guidelines/colors',
    name: 'Colors',
    component: (
      <GuidelinesWrapper>
        <GuidelinesColors />
      </GuidelinesWrapper>
    ),
  },
  {
    path: '/guidelines/illustrations',
    name: 'Illustrations',
    component: (
      <GuidelinesWrapper>
        <GuidelinesIllustrations />
      </GuidelinesWrapper>
    ),
  },
  {
    path: '/guidelines/motion',
    name: 'Motion',
    component: (
      <GuidelinesWrapper>
        <GuidelinesMotion />
      </GuidelinesWrapper>
    ),
  },
  {
    path: '/guidelines/typography',
    name: 'Typography',
    component: (
      <GuidelinesWrapper>
        <GuidelinesTypography />
      </GuidelinesWrapper>
    ),
  },
  {
    path: '/guidelines/grid',
    name: 'Grid',
    component: (
      <GuidelinesWrapper>
        <GuidelinesGrid />
      </GuidelinesWrapper>
    ),
  },
  {
    path: '/guidelines/logotype',
    name: 'Logotype',
    component: (
      <GuidelinesWrapper>
        <GuidelinesLogotype />
      </GuidelinesWrapper>
    ),
  },
  {
    path: '/guidelines/icons',
    name: 'Icons',
    component: (
      <GuidelinesWrapper>
        <GuidelinesIcons />
      </GuidelinesWrapper>
    ),
  },
  {
    path: '/guidelines/spacers',
    name: 'Spacers',
    component: (
      <GuidelinesWrapper>
        <GuidelinesSpacers />
      </GuidelinesWrapper>
    ),
  },
  {
    path: '/guidelines/info-graphics',
    name: 'Info Graphics',
    component: (
      <GuidelinesWrapper>
        <GuidelinesInfoGraphics />
      </GuidelinesWrapper>
    ),
  },
  {
    path: '/guidelines/hero',
    name: 'Hero',
    component: (
      <GuidelinesWrapper>
        <GuidelinesHero />
      </GuidelinesWrapper>
    ),
  },
  {
    path: '/guidelines/carousel',
    name: 'Carousel',
    component: (
      <GuidelinesWrapper>
        <GuidelinesCarousel />
      </GuidelinesWrapper>
    ),
  },
  {
    path: '/guidelines/navigation',
    name: 'Navigation',
    component: (
      <GuidelinesWrapperNoScript>
        <GuideLinesNavigation />
      </GuidelinesWrapperNoScript>
    ),
  },
  {
    path: "/guidelines/spinners",
    name: "Spinners",
    component: (
      <GuidelinesWrapper>
        <GuideLinesSpinner />
      </GuidelinesWrapper>
    )
  }
]

const Routes = ({ onRouteChange, openModal }) => {
  usePageViews(onRouteChange)
  let location = useLocation()
  return (
    <Switch>
      <Route path='/examples'>
        <Examples openModal={openModal} />
      </Route>
      {COMPONENTS_ROUTES.map(item => (
        <Route key={'/components' + item.path} path={'/components' + item.path}>
          {item.component ? (
            item.component
          ) : (
            <DynamicView title={item.name} mdFile={item.mdFile} />
          )}
        </Route>
      ))}
      <Route path='/get-started/introduction'>
        <Introduction />
      </Route>
      <Route path='/get-started/design'>
        <Designers />
      </Route>
      <Route path='/get-started/developer'>
        <Developers />
      </Route>
      <Route path={'/get-started'}>
        <Redirect to={'/get-started/design'} />
      </Route>
      {GUIDELINES_ROUTES.map(item => (
        <Route key={item.path} path={item.path}>
          {item.component}
        </Route>
      ))}
      <Route path={'/guidelines/principles'}>
        <Principles />
      </Route>
      <Route path={'/guidelines'}>
        <IntroductionGuideline />
      </Route>

      <Route path={'/components'}>
        <IntroductionComponents />
      </Route>
      <Route exact path={'/articles/:articleId'} component={Articles} />
      <Route path={'/articles'}>
        <ArticlesOverview />
      </Route>
      <Route path={'/overview'}>
        <ComponentOverview />
      </Route>
      <Route path={'/login'}>
        <Login />
      </Route>
      <Route path={'/contact/new-request'}>
        <Zendesk isNewRequest={true} />
      </Route>
      <Route path={'/contact/contact'}>
        <Contact />
      </Route>
      <Route path={'/search'} component={FullSearchResult} />

      <Route path='/'>
        <Welcome />
      </Route>
    </Switch>
  )
}

export default Routes
