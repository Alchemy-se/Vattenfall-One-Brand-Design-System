import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';
 
import styles from '../Guidelines.scss';
import illustrationStyles from './Illustrations.scss';
 
const whitebg = '/img/guidelines/illustrations/whitebg.png';
const lightbg = '/img/guidelines/illustrations/lightbg.png';
const notonred = '/img/guidelines/illustrations/notonred.png';
const isometric = '/img/guidelines/illustrations/isometric.png';
const lightbluebg = '/img/guidelines/illustrations/lightbluebg.png';
const Frontperspective = '/img/guidelines/illustrations/Frontperspective.png';
const IsometricGrid = '/img/guidelines/illustrations/IsometricGrid–Illustrations.png';
 
const Illustrations = () => {
  return (
    <Fragment>
      <PageHeader title='Illustrations' />
      <section className='p-2 vf-border-top-gray-200'></section>
      <div className='vf-row'>
        <div className='vf-col-12'>
          <h2 className='use-in-toc'>Functional</h2>
          <p className={`${styles.guidelinesText}`}>
            This is our main illustration style and the most frequently used.
            The inspiration comes from technical drawings and blueprints. It is
            a simplified illustration style where the main task is to support
            the business – looking inside the energy techniques, explaining
            complex and detailed systems of our product and services. And this
            by only using line illustrations with a few colours and details. The
            style does not compete with but complements our bold icons and
            typeface.
          </p>
        </div>
      </div>
      <section className='p-2 vf-border-top-gray-200'></section>
      <div className='vf-row'>
        <div className='vf-col-12' style={{ marginBottom: '40px' }}>
          <h2 className='use-in-toc'>Key Principles</h2>
          <p className={`${styles.guidelinesText}`}>
            In illustrations, the full scale of colours may be used, yet
            moderately. Strive not to use more than three colours in a single
            illustration to avoid making it look too colourful and off brand.
          </p>
          <ol className={`vf-ol ${illustrationStyles.orderedList}`}>
            <li>Always apply the illustrations on white.</li>
            <li>
              Use the Vattenfall Light Blue or Vattenfall Light Grey background.
            </li>
            <li>
              Do not place illustrations on background colours like the
              Vattenfall Light Red.
            </li>
          </ol>
          <ol className={`vf-ol ${illustrationStyles.orderedList}`}>
            <li>
              The illustrations are available in two different perspectives –
              front and isometric.
            </li>
            <li>
              Keep the stroke light and consistent throughout the full
              illustration
            </li>
            <li>
              Functional style can be used both as still illustrations and
              animated.
            </li>
          </ol>
        </div>
      </div>
      <div className='vf-row'>
        <div className='vf-col'>
          <img src={whitebg} style={{ width: '100%' }} />
          <h4 style={{ textAlign: 'center' }}>White Background</h4>
        </div>
        <div className='vf-col'>
          <img src={lightbg} style={{ width: '100%' }} />
          <h4 style={{ textAlign: 'center' }}>Light Background</h4>
        </div>
        <div className='vf-col'>
          <img src={notonred} style={{ width: '100%' }} />
          <h4 style={{ textAlign: 'center' }}>Not on red background</h4>
        </div>
      </div>
      <div className='vf-row'>
        <div className='vf-col'>
          <img src={isometric} style={{ width: '100%' }} />
          <h4 style={{ textAlign: 'center' }}>Isometric Perspective</h4>
        </div>
        <div className='vf-col'>
          <img src={lightbluebg} style={{ width: '100%' }} />
          <h4 style={{ textAlign: 'center' }}></h4>
        </div>
        <div className='vf-col'>
          <img src={Frontperspective} style={{ width: '100%' }} />
          <h4 style={{ textAlign: 'center' }}>Front Perspective</h4>
        </div>
      </div>
      <section className='p-2 vf-border-top-gray-200'></section>
      <div className='vf-row'>
        <div className='vf-col-12'>
          <h2 className='use-in-toc'>Grid</h2>
          <p className={`${styles.guidelinesText}`}>
            To work with new isometric illustrations, you can use the grid
            below. You’ll find it under Utility / Isometric Grid –
            Illustrations.
          </p>
        </div>
      </div>
      <div className='vf-row'>
        <div className='vf-col'>
          <img src={IsometricGrid} style={{ width: '100%' }} />
        </div>
      </div>
      <div className='vf-row'>
        <div className='vf-col-12'>
          <h2 className='use-in-toc'>Support</h2>
          <p className={`${styles.guidelinesText}`}>
            All approved illustrations and animations can be found in the Media
            Bank.{' '}
            <a
              target='_blank'
              rel='nofollow noopener'
              href='https://brandtoolbox.vattenfall.com/media/'
            >
              https://brandtoolbox.vattenfall.com/media/{' '}
            </a>
            Look for what you need directly in the search bar and refine your
            search using the search tools. All illustrations are tagged with
            relevant words. By clicking on an illustration, size and format
            information will appear under Basics. The illustrations are
            available in an SVG format with an attached open Adobe Illustrator
            PDF file. Information such as descriptions, usage rights and creator
            can be found in the Metadata. For more guidance or artwork support,
            please contact Vattenfall’s branding helpdesk.
          </p>
        </div>
      </div>
    </Fragment>
  )
};
 
export default Illustrations;