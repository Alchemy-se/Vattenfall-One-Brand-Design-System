import React, { Fragment } from 'react';
import PageHeader from '../PageHeader';
import styles from '../Guidelines.scss';
import motionStyles from './Motion.scss';
import motion from './Motion.png';

const Motion = () => {
  return (
    <Fragment>
      <PageHeader title="Motion" />
      <section className="p-2 vf-border-top-gray-200"></section>
      <div className="vf-row">
        <div className="vf-col">
          <p className={`${styles.guidelinesText}`}>
            When designing with Vttenfall Digital Design System,make sure <br />
            to think trough th motion effects and transitions that are <br />
            included to it. Watch over the purpose of ech effect and do not <br />
            combine several components with heavy animations at once: the <br />
            digitl behaviour of such should bring liveliness and sbtle motion <br />
            rather than chaotic movement.
          </p>
        </div>
        <div className="vf-col">
          <p className={`${styles.guidelinesText}`}>
            ** For the sake of consistency,we use only one default animation
            <br />
            for now **
          </p>
          <p className={`${styles.guidelinesText}`}>
            Motion focuses attention on what's important without creating <br />
            unnecessary distraction.
          </p>
          <p className={`${styles.guidelinesText}`}>Object effects: Scale, Move, Elevation, Color-change</p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <p>
            Duration: 0.3s <br />
            Easee: cubic-bezier(.6,0,0,1)
          </p>
          <img src={motion} style={{ width: '100%' }} />
        </div>
        <div className="vf-col">&nbsp;</div>
        <div className="vf-col">&nbsp;</div>
      </div>
    </Fragment>
  );
};

export default Motion;
