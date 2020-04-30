import React from 'react';
import Examples from "../EXAMPLES";
import ReactGA from 'react-ga';

const nav = {
  title: "Examples",
  path: "/examples",
  content: () => {ReactGA.pageview("/examples"); return <Examples/>}
}

export default nav