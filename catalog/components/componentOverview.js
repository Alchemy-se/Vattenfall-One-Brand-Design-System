import React, { useState } from 'react';
import overviewJSON from './../../components-overview-metadata.json'

const ComponentOverview = () => {
  const renderOverview = () => {
    console.log('overviewJSON: ', overviewJSON)
    overviewJSON.components.map(item => {
      console.log('item: ', item)
    })

    return 'hej'
    /* overviewJSON.map(item => {
       console.log(item);
     })*/
  }
  return (
    <div>
      {renderOverview()}
    </div>
  );
};

export default ComponentOverview;

