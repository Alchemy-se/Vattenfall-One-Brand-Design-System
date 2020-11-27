import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';
import styles from '../Guidelines.scss';
import motionStyles from './Motion.scss';
const motion = '/img/guidelines/motion/Motion.png';
 
const Motion = () => {
  return (
    <Fragment>
      <PageHeader title="Motion" />
      <section className="p-2 vf-border-top-gray-200"></section>
      <div className="vf-row">
        <div className="vf-col-12" >
          <p className={`${styles.guidelinesText}`}>
          When designing with Vattenfall Digital Design System, make sure to think trough the motion effects and transitions that are included in it. 
          Watch over the purpose of each effect and do not combine several components with heavy animations at once: the digital behaviour of such should 
          bring liveliness and subtle motion rather than chaotic movement.
          </p>
        </div>
        <div className="vf-col-12">
          <p className={`${styles.guidelinesText}`}>
          ** For the sake of consistency, we use only one default animation for now **
          </p>
          <p className={`${styles.guidelinesText}`}>
          Motion focuses attention on what's important without creating unnecessary distraction.
          </p>
          <p className={`${styles.guidelinesText}`}>
            Object effects: Scale, Move, Elevation, Color-change
          </p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img src={motion} style={{ width: '100%', margin: "28px 0"}} />
        </div>
        <div className="vf-col">&nbsp;</div>
        <div className="vf-col">&nbsp;</div>
      </div>
      <div className="vf-row">
      <div className="vf-col-12">
          <p className={`${styles.guidelinesText}`}>
          To read more about the “ease-in-out” motion ID philosophy, please see the description and the examples in the Video & Motion guidelines chapter: 
          {" "}<a target="_blank" rel="nofollow noopener" href="https://brandtoolbox.vattenfall.com/Styleguide/brandtwo/#page/70DBC29E-9802-4DDD-9937424FDCB53C25">https://brandtoolbox.vattenfall.com/Styleguide/brandtwo/#page/70DBC29E-9802-4DDD-9937424FDCB53C25</a>
          </p>
        </div>
      </div>
   
    </Fragment>
  );
};
 
export default Motion;
 
