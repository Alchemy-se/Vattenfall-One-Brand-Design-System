import React, { useEffect, useState } from 'react';
import overviewJSON from '../../components-overview-metadata.json'
import styles from './styles.scss'
import OverviewItem from "./overviewItem";

const ComponentOverview = () => {
  const figmaLogo = require('../../assets/icons/figma-logo.png').default;
  const sketchLogo = require('../../assets/icons/sketch-logo.png').default;
  const psXDLogo = require('../../assets/icons/photshop-xd-logo.jpg').default;
  const { amount } = overviewJSON

  const renderOverview = () => {
    return overviewJSON.components.map(item => {
      return <OverviewItem item={item} key={item.name} />
    })
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.legend}>
        <thead>
        <tr>
          <td className={styles.ready}>Ready</td>
          <td className={styles.slantedReadyInProgress}>Ready/In progress</td>
          <td className={styles.slantedReadyDeclined}>Ready/Declined</td>
        </tr>
        <tr>
          <td className={styles.noData}>No data</td>
          <td className={styles.inProgress}>In progress</td>
          <td className={styles.declined}>Declined</td>
        </tr>
        <tr>
        </tr>

        </thead>
      </table>
      <table>
        <thead>
        <tr>
          <th colSpan="4" rowSpan="2">Components</th>
          <th colSpan="4" rowSpan="2">Guidelines</th>
          <th style={{ width: '100px' }}>Html/JS</th>
          <th colSpan="2">Angular</th>
          <th colSpan="2">React</th>
          <th rowSpan="2"><img src={sketchLogo} alt="" /></th>
          <th rowSpan="2"><img src={figmaLogo} alt="" /></th>
          <th rowSpan="2"><img src={psXDLogo} alt="" /></th>
          <th rowSpan="2">Read more</th>

        </tr>
        <tr>
          <th>Global</th>
          <th>Global</th>
          <th>NL</th>
          <th>Global</th>
          <th>SV</th>
        </tr>
        </thead>
        <tbody>

        {renderOverview()}

        </tbody>
        <tfoot>
        <tr>
          <td className={styles.totalName} colSpan="8">Total components</td>
          <td>{amount.html.global}</td>
          <td>{amount.angular.global}</td>
          <td>{amount.angular.NL}</td>
          <td>{amount.react.global}</td>
          <td>{amount.react.SV}</td>
          <td>{amount.design.sketch}</td>
          <td>{amount.design.figma}</td>
          <td>{amount.design.adobeXd}</td>
        </tr>
        </tfoot>
      </table>

    </div>
  );
};

export default ComponentOverview;

