import React, { Fragment } from 'react';
import PageHeader from '../pageHeader';
import styles from '../Guidelines.scss';
import illustrationStyles from './Illustrations.scss';
import placeholderImg from '../Untitled.png';
const Illustrations = () => {
  return (
    <Fragment>
      <PageHeader title="Illustrations" />
      <section className="p-2 vf-border-top-gray-200"></section>
      <div className="vf-row">
        <div className="vf-col">
          <h4>Functional</h4>
          <p className={`${styles.guidelinesText}`}>
            Functional - our main illustration style and most frequently used.
            <br />
            The inspiration comes from technical drawings and blueprints. It is <br />
            a simplified illustration style where the main task is to support the
            <br />
            bussines - looking inside the energy techniques , explaning <br />
            complex detailed system of our product and services. And <br />
            this by only using line illustrations with a few colors and details.
            <br />
            The style does not compete with, but complements our bold icons <br />
            and typeface.
          </p>
          <p className={`${styles.guidelinesText}`}>
            A video from Vattenfall showing the illustrations in motion: <br />
            <a className={`${illustrationStyles.linkStyling}`} href={'https://www.youtube.com/watch?v=HLJS759jrOI'}>
              https://www.youtube.com/watch?v=HLJS759jrOI
            </a>
          </p>
          <p className={`${styles.guidelinesText}`}>
            When logged into Vattenfall-Frontify are able to download the illustrations.
          </p>
        </div>
        <div className="vf-col">
          <h4>Key Principles</h4>
          <p className={`${styles.guidelinesText}`}>
            In illustrations the full scale of colors may be used, but in a <br />
            moderate way. Try not to use more than three colors in a single <br />
            illustration, this for not be percived as childish or too colorful.
          </p>
          <p className={`${styles.guidelinesText}`}>
            1. Always apply the illustrations on white, <br />
            2. Vattenfall Light Blue or Vattenfall Light Grey background. <br />
            3. Do not place illustrations on thebackground <br />
            colors, like Vattenfall Ligt Red.
          </p>
          <p className={`${styles.guidelinesText}`}>
            1. The illustrations are available in two different
            <br />
            perspectives - font and isometric.
            <br />
            2.Keep the stroke light and consistent throughout
            <br />
            the full illustration. <br />
            3. Functional style can be used both as still
            <br />
            illustrations and animated.
          </p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img src={placeholderImg} style={{ width: '100%' }} />
          <p>White background</p>
        </div>
        <div className="vf-col">
          <img src={placeholderImg} style={{ width: '100%' }} />
          <p>Light background</p>
        </div>
        <div className="vf-col">
          <img src={placeholderImg} style={{ width: '100%' }} />
          <p>Not on red background</p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img src={placeholderImg} style={{ width: '100%' }} />
          <p>White background</p>
        </div>
        <div className="vf-col">
          <img src={placeholderImg} style={{ width: '100%' }} />
          <p>Light background</p>
        </div>
        <div className="vf-col">
          <img src={placeholderImg} style={{ width: '100%' }} />
          <p>Not on red background</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Illustrations;
