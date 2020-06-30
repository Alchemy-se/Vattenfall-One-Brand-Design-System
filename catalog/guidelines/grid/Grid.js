import React, { Fragment } from 'react';

import PageHeader from '../pageHeader';
import GridSpecification from './GridSpecification';

import Grid1440 from './1440.png';
import Grid1024 from './1024.png';
import Grid375 from './375.png';

let style = { border: '2px rgba(255,0,0,0.3) solid', padding: '10px', height: '400px' };

const Grid = () => {
  return (
    <Fragment>
      <PageHeader title="The Grid" />
      <section className="p-2 vf-border-top-gray-200">
        <GridSpecification
          device="Desktop"
          width="1440px"
          totalWidth="1128px"
          offset="156px"
          columns="12"
          gutterWidth="24px"
          columnsWidth="72px"
        />
        <div className="vf-row">
          <div className="vf-col-sm-12 vf-col-md-12">
            <img style={{ width: '100%' }} src={Grid1440} />
          </div>
        </div>
      </section>
      <div className="vf-mt-lg"></div>
      <section className="p-2 vf-border-top-gray-200">
        <GridSpecification
          device="Tablet"
          width="1024px"
          totalWidth="944px"
          offset="40px"
          columns="12"
          gutterWidth="16px"
          columnsWidth="64px"
        />
        <div className="vf-row">
          <div className="vf-col-sm-12 vf-col-md-12 vf-col-lg-11">
            <img style={{ width: '100%' }} src={Grid1024} />
          </div>
        </div>
      </section>
      <div className="vf-mt-lg"></div>
      <section className="p-2 vf-border-top-gray-200">
        <GridSpecification
          device="Tablet"
          width="768px"
          totalWidth="648px"
          offset="60px"
          columns="12"
          gutterWidth="24px"
          columnsWidth="32px"
        />
        <div className="vf-row">
          <div className="vf-col-sm-12 vf-col-md-12 vf-col-lg-8">
            {/* image should be changed to 768 when we get it from client */}
            <img style={{ width: '100%' }} src={Grid1024} />
          </div>
        </div>
      </section>
      <div className="vf-mt-lg"></div>
      <section className="p-2 vf-border-top-gray-200">
        <GridSpecification
          device="Mobile"
          width="375px"
          totalWidth="333px"
          offset="21px"
          columns="4"
          gutterWidth="15px"
          columnsWidth="72px"
        />
        <div className="vf-row">
          <div className="vf-col-sm-12 vf-col-md-4">
            <img style={{ width: '100%' }} src={Grid375} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Grid;
