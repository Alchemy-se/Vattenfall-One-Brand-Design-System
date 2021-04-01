import React, { Fragment } from 'react';
import Markdown from '../../lib/markdown';
import Modals from '../../zendesk/modals/modals';
import PageHeader from '../../lib/pageHeader';

// Desktop
import desktopDefault from './desktop-default/html/default.md';
import desktopNumbers from './desktop-numbers/html/numbers.md';
import desktopAlternative from './desktop-alternative/html/alternative.md';
// Mobile
import mobileDefault from './mobile-default/html/default.md';
import mobileNumbers from './mobile-numbers/html/numbers.md';
import mobileAlternative from './mobile-alternative/html/alternative.md';
import mobilePortal from './mobile-portal/html/portal.md';
import mobilePortalDetails from './mobile-portal-details/html/portal-details.md';

const markdown =
  desktopDefault +
  desktopNumbers +
  desktopAlternative +
  mobileDefault +
  mobileNumbers +
  mobileAlternative +
  mobilePortal +
  mobilePortalDetails;

const index = ({ uri }) => {
  return (
    <Fragment>
      <PageHeader title='Horizontal Steppers' />
      <Markdown source={markdown} />
      {/* <Modals uri={uri}/> */}
    </Fragment>
  );
};

export default index;
