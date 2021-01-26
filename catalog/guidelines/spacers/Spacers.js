import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';
import styles from '../Guidelines.scss';

const Group4 = '/img/guidelines/spacers/Group4.png';
const Group5 = '/img/guidelines/spacers/Group5.png';
const Group6 = '/img/guidelines/spacers/Group6.png';
const Group7 = '/img/guidelines/spacers/Group7.png';
const Group16 = '/img/guidelines/spacers/Group16.png';
const Group17 = '/img/guidelines/spacers/Group17.png';
// const desktopModule01 = '/img/guidelines/spacers/01_Group18.png';
// const desktopModule02 = '/img/guidelines/spacers/02_double88spacer.png';
// const desktopModule03 = '/img/guidelines/spacers/03_Group19.png';
// const desktopModule04 = '/img/guidelines/spacers/04_spacer_Group4Copy2.png';
// const desktopModule05 = '/img/guidelines/spacers/05_Group15.png';
const modulesCombined = '/img/guidelines/spacers/modules-combined.jpg';

const Spacers = () => {
  return (
    <Fragment>
      <PageHeader title='Spacers' />
      <section className='p-2 vf-border-top-gray-200'></section>
      <p className={`${styles.guidelinesText}`}>
        Spacers come in four sizes, Small 28px, Medium 44px, Large 56px and
        Extra Large 88px. You’ll find them under Utility in the library. Please
        note that all distances between individual modules are 88px on desktop
        and 28px on Mobile.
      </p>
      <div className='vf-row w-50'>
        <div className='vf-col-lg-12'>
          <h4 className='use-in-toc'>Spacer - Extra large - 88px</h4>
          <img style={{ width: '100%' }} src={Group7} />
        </div>
        <div className='vf-col-lg-12'>
          <h4 className='use-in-toc'>Spacer - Large - 56px</h4>
          <img style={{ width: '100%' }} src={Group6} />
        </div>
        <div className='vf-col-lg-12'>
          <h4 className='use-in-toc'>Spacer - Medium - 44px</h4>
          <img style={{ width: '100%' }} src={Group5} />
        </div>
        <div className='vf-col-lg-12'>
          <h4 className='use-in-toc'>Spacer - Small - 28px</h4>
          <img style={{ width: '100%' }} src={Group4} />
        </div>
      </div>
      <section className='p-2 vf-border-top-gray-200'></section>
      <div className='row align-items-start'>
        <h2 className='use-in-toc'>Example – Desktop</h2>
        <p className={`${styles.guidelinesText}`}>
          Example of spacers in the Image block Module. For visual guidance when
          designing, click on the eye symbol inside "Utility / Spacers".
        </p>
      </div>
      <div className='vf-row'>
        <div className='vf-col'>
          <img style={{ width: '100%' }} src={Group16} />
        </div>
      </div>
      <div className='row align-items-start'>
        <h2 className='use-in-toc'>Example – Mobile</h2>
        <p className={`${styles.guidelinesText}`}>
          Example of applied spacers in the Image block Mobile Module. For
          visual guidance when designing, click on the eye symbol inside
          "Utility / Spacers".
        </p>
      </div>
      <div className='vf-row'>
        <div className='vf-col-lg-4'>
          <img style={{ width: '100%' }} src={Group17} />
        </div>
      </div>
      <div className='row align-items-start'>
        <h2 className='use-in-toc'>Distance Between modules – Desktop</h2>
        <p className={`${styles.guidelinesText}`}>
          Please note that all distances between individual modules are 88px –
          like the "Spacer – Extra Large" – on desktop. One exception is for the
          module named "media block" (where the image continues below the
          background colour). Use two of the 88px spacers here.
        </p>
      </div>
      <div className='vf-row'>
        <div className='vf-col'>
          <img style={{ width: '100%' }} src={modulesCombined} />
        </div>
      </div>
    </Fragment>
  )
};

export default Spacers;
