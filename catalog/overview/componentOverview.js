import React, { useState } from 'react';
import overviewJSON from '../../components-overview-metadata.json'
import styles from './styles.scss'
import OverviewItem from "./overviewItem";

const ComponentOverview = () => {


  const renderOverview = () => {
    return overviewJSON.components.map(item => {
      return <OverviewItem item={item} key={item.name} />
    })

  }
  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
        <tr>
          <th colSpan="4" rowSpan="2">Name</th>
          <th colSpan="4" rowSpan="2">Description</th>
          <th colSpan="4">Implementation</th>
          <th colSpan="5">Design</th>
          <th rowSpan="2">Read more</th>
        </tr>
        <tr>
          <th>Html</th>
          <th>React</th>
          <th>Vue</th>
          <th>Angular</th>
          <th>Figma</th>
          <th>Photo-shop</th>
          <th>Abstract</th>
          <th>Adobe</th>
          <th>Sketch</th>
        </tr>
        </thead>
        <tbody>


        {renderOverview()}

        </tbody>
      </table>

    </div>
  );
};

export default ComponentOverview;

