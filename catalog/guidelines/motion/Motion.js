import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';
import styles from '../Guidelines.scss';
import motionStyles from './Motion.scss';
const motion = '/img/guidelines/motion/Motion.png';
 
const Motion = () => {
  return (
    <Fragment>
      <PageHeader title='Motion' />
      <section className='p-2 vf-border-top-gray-200'></section>
      <div className='vf-row'>
        <div className='vf-col-12'>
          <p className={`${styles.guidelinesText}`}>
            When designing in accordance with the Vattenfall Digital Design
            System, make sure to think through motion effects and transitions.
            Each effect should fill a purpose. Don’t combine several components
            with heavy animations – strive to add subtle motion.
          </p>
        </div>
        <div className='vf-col-12'>
          <p className={`${styles.guidelinesText}`}>
            ** For the sake of consistency, we use only one default animation
            for now **
          </p>
          <p className={`${styles.guidelinesText}`}>
            Motion focuses attention on what’s important without creating
            unnecessary distraction.
          </p>
          <p className={`${styles.guidelinesText}`}>
            Object effects: Scale, Move, Elevation, Colour-change
          </p>
        </div>
      </div>
      <div className='vf-row'>
        <div className='vf-col'>
          <img src={motion} style={{ width: '100%', margin: '28px 0' }} />
        </div>
        <div className='vf-col'>&nbsp;</div>
        <div className='vf-col'>&nbsp;</div>
      </div>
      <div className='vf-row'>
        <div className='vf-col-12'>
          <p className={`${styles.guidelinesText}`}>
            To read more about the “ease-in-out” motion ID philosophy, please
            see the description and the examples in the Video &amp; Motion
            guidelines chapter:{' '}
            <a
              target='_blank'
              rel='nofollow noopener'
              href='https://brandtoolbox.vattenfall.com/Styleguide/brandtwo/#page/70DBC29E-9802-4DDD-9937424FDCB53C25'
            >
              https://brandtoolbox.vattenfall.com/Styleguide/brandtwo/#page/70DBC29E-9802-4DDD-9937424FDCB53C25
            </a>
          </p>
        </div>
      </div>
    </Fragment>
  )
};
 
export default Motion;
 
