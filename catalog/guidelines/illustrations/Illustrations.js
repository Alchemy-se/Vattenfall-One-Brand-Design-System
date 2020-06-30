import React, { Fragment } from 'react';
import PageHeader from '../pageHeader';

import styles from '../Guidelines.scss';
import illustrationStyles from './Illustrations.scss';

import whitebg from './whitebg.png';
import lightbg from './lightbg.png';
import notonred from './notonred.png';
import isometric from './isometric.png';
import lightbluebg from './lightbluebg.png';
import Frontperspective from './Frontperspective.png';
import IsometricGrid from './Isometric Grid – Illustrations.png';

const Illustrations = () => {
  return (
    <Fragment>
      <PageHeader title="Illustrations" />
      <section className="p-2 vf-border-top-gray-200"></section>
      <div className="vf-row">
        <div className="vf-col">
          <h2>Functional</h2>
          <p className={`${styles.guidelinesText}`}>
            Functional - our main illustration style and most frequently used. The inspiration comes from technical
            drawings and <br />
            blueprints. It is a simplified illustration style where the main task is to support the bussines - looking
            inside the energy <br />
            techniques , explaning complex detailed system of our product and services. And this by only using line
            illustrations <br />
            with a few colors and details. The style does not compete with, but complements our bold icons and typeface.
          </p>
          <p className={`${styles.guidelinesText}`}>
            Login to Vattenfall-Frontify to get access to all of Vattenfalls illustrations.
          </p>
        </div>
      </div>
      <section className="p-2 vf-border-top-gray-200"></section>
      <div className="vf-row">
        <div className="vf-col">
          <h2>Key Principles</h2>
          <p className={`${styles.guidelinesText}`}>
            In illustrations the full scale of colors may be used, but in a moderate way. Try not to use more than three
            colors in a <br />
            single illustration, this for not be percived as childish or too colorful.
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
          <img src={whitebg} style={{ width: '100%' }} />
          <h4 style={{ textAlign: 'center' }}>White background</h4>
        </div>
        <div className="vf-col">
          <img src={lightbg} style={{ width: '100%' }} />
          <h4 style={{ textAlign: 'center' }}>Light background</h4>
        </div>
        <div className="vf-col">
          <img src={notonred} style={{ width: '100%' }} />
          <h4 style={{ textAlign: 'center' }}>Not on red background</h4>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img src={isometric} style={{ width: '100%' }} />
          <h4 style={{ textAlign: 'center' }}>White background</h4>
        </div>
        <div className="vf-col">
          <img src={lightbluebg} style={{ width: '100%' }} />
          <h4 style={{ textAlign: 'center' }}>Light background</h4>
        </div>
        <div className="vf-col">
          <img src={Frontperspective} style={{ width: '100%' }} />
          <h4 style={{ textAlign: 'center' }}>Not on red background</h4>
        </div>
      </div>
      <section className="p-2 vf-border-top-gray-200"></section>
      <div className="vf-row">
        <div className="vf-col">
          <h2>Grid</h2>
          <p className={`${styles.guidelinesText}`}>
            To illustrate new isometric illustrations you can use the grid bellow.
            <br />
            You find it under Utility / Isometric Grid - Illustrations
          </p>
        </div>
      </div>
      <div className="vf-row">
        <div className="vf-col">
          <img src={IsometricGrid} style={{ width: '100%' }} />
        </div>
      </div>
    </Fragment>
  );
};

export default Illustrations;
