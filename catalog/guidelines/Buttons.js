import React, { Fragment } from 'react';
import PageHeader from '../lib/pageHeader';
import Column from "./Column";
import YellowButtons from "./buttons/yellow";
import styles from '../Guidelines.scss';

import Description from './Description';

const Button = () => {
  return (
    <Fragment>
      <PageHeader title="Buttons" />
      <section className="p-2 vf-border-top-gray-200"></section>
      <Description />
      <div className="vf-row">
        <div className="vf-col">
          <h3>Yellow</h3>
        </div>
        <div className="vf-col">
          <h3>&nbsp;</h3>
        </div>
        <div className="vf-col">
          <h3>&nbsp;</h3>
        </div>
        <div className="vf-col">
          <h3>&nbsp;</h3>
        </div>
      </div>
        <YellowButtons />
      <section className="p-2 vf-border-bottom-gray-200"></section>
    </Fragment>
  );
};

export default Button;
