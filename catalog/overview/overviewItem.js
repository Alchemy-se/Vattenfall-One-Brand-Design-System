import React, { useState } from 'react';
import styles from './styles.scss'
import { HashLink as Link } from 'react-router-hash-link';
import DescriptionItem from "./descriptionItem";

const OverviewItem = ({ item }) => {
  const { name, children } = item;
  const [isExpanded, setIsExpanded] = useState(false);


  const supportedRegion = (language) => {
    if (language.exists) {
      if (language.globalUse) {
        return 'Global'
      } else if (language.otherSupport.length >= 1) {
        return language.otherSupport.join(", ")
      }
      return 'Yes'
    }
    return "Coming soon"
  };


  const showExpand = (children) => {
    return children.map(child => {
      return (
        <tr className={styles.expandedRow} key={child.name}>

          <td className={styles.name} colSpan="4"><Link to={child.uri}>{child.name}</Link></td>
          <DescriptionItem description={child.description} />
          <td>{supportedRegion(child.html)}</td>
          <td>{supportedRegion(child.react)}</td>
          <td>{supportedRegion(child.vue)}</td>
          <td>{supportedRegion(child.angular)}</td>

          <td>{child.figmaUrl}</td>
          <td>{child.photoshopUrl}</td>
          <td>{child.abstractUrl}</td>
          <td>{child.adobeXDUrl}</td>
          <td>{child.sketchUrl}</td>

        </tr>)
    })
  };

  const countChildren = (type) => {
    console.log('item: ', item)
    const languages = item.children.filter(lang => lang[type].exists);
    return <td style={{ textAlign: "center" }}> {languages.length} </td>
  }

  console.log('item: ', item)
  return (
    <React.Fragment>
      <tr onClick={() => setIsExpanded(!isExpanded)} className={styles.row}>
        <td colSpan="4"><Link to={item.uri}>{name}</Link></td>
        <td className={styles.desc} colSpan="4">General info. No data yet.</td>
        {countChildren('html')}
        {countChildren('react')}
        {countChildren('vue')}
        {countChildren('angular')}
        <td />
        <td />
        <td />
        <td />
        <td />
        <td className={styles.expand} >
          {isExpanded ? 'Close' : 'Open'}
        </td>
      </tr>
      {isExpanded && showExpand(children)}
    </React.Fragment>

  )

};

export default OverviewItem;
