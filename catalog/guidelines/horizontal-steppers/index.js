import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';
// Desktop
import DesktopDefault from './DesktopDefault';
import DesktopNumbers from './DesktopNumbers';
import DesktopAlternative from './DesktopAlternative';
// Mobile
import MobileDefault from './MobileDefault';
import MobileNumbers from './MobileNumbers';
import MobileAlternative from './MobileAlternative';
import MobilePortal from './MobilePortal';

const Index = () => {
  return (
    <Fragment>
      <PageHeader title={'Horizontal Steppers'} />
      <div className='row align-items-start'>
        <p style={styles}>
          A progress indicator component communicates to the user the progress
          of a particular process. There should be minimum 2 steps and maximum 6
          steps display in this form progress indicator. For 4-6 steps use the
          alternative version.
        </p>
        <h3 className={'use-in-toc'}>Desktop</h3>
        <section className='p-2 vf-border-top-gray-200'></section>
        <DesktopDefault />
        <DesktopNumbers />
        <DesktopAlternative />
        <h3 className={'use-in-toc'}>Mobile</h3>
        <section className='p-2 vf-border-top-gray-200'></section>
        <MobileDefault />
        <MobileNumbers />
        <MobileAlternative />
        <MobilePortal />
      </div>
    </Fragment>
  );
};

const styles = {
  marginBottom: '56px',
};

export default Index;
