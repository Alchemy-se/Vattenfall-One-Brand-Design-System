import React, { useEffect, useState } from 'react';
import styles from './styles.scss'

const FIGMA = 'figma';
const SKETCH = 'sketch';
const ADOBE_XD = 'adobeXd';
const ANGULAR = 'angular';
const HTML = 'html';
const REACT = 'react';
const SV = 'SV';
const NL = 'NL';

const OverviewItem = ({ item }) => {
  const { name, children, figmaUrl, adobeXdUrl, sketchUrl } = item;
  const [isExpanded, setIsExpanded] = useState(false);

  const countDesign = (program) => {
    const designs = children.filter(design => design[program])
    return <td style={{ textAlign: "center" }}> {designs.length} </td>
  };

  const renderDesignLink = (child, type, url) => {
    if (child[type] && url) {
      return <td className={styles.ready}><a style={{color:'black'}} target='_blank' href={url}>Link</a></td>
    }
    return <td className={styles.noData} />
  };

  const renderGuidelineUri = (uri) => {
    if (uri) {
      return <a href={uri}>Guideline</a>
    }
    return "---"
  };

  const countLanguages = (type, region) => {
    let languages = [];
    // Region specific
    if (region) {
      children.forEach(lang => {
        if (lang[type].exists) {
          lang[type].support.forEach(item => {
            if (item.status === 0) {
              languages.push(item)
            }
          })
        }
      });
    } else {
      // Global use
      languages = children.filter(lang => {
        return lang[type].exists &&
          lang[type].globalUse &&
          lang[type].status === 0;
      });
    }
    return <td style={{ textAlign: "center" }}> {languages.length} </td>
  };

  const renderStatus = (child, type, region) => {

    let status = child[type].status;
    if (child[type].globalUse) {

      if (child[type].status !== 0) {

        if (child[type].status === 1) {
          status = 3
        }
        if (child[type].status === 2) {
          status = 4
        }
      } else {
        status = child[type].status
      }
    }

    if (region) {
      status = child[type].support.map(supportItem => {
        if (supportItem.region === region) {
          return supportItem.status
        }
      });
      status = status[0]
    }

    switch (status) {
      case -1:
        return <td className={styles.noData} />;
      case 0:
        return <td className={styles.ready} />
      case 1:
        return <td className={styles.inProgress} />
      case 2:
        return <td className={styles.declined} />
      case 3:
        return <td className={styles.slantedReadyInProgress} />
      case 4:
        return <td className={styles.slantedReadyDeclined} />
      default:
        return <td />
    }
  };
  const showExpand = (children) => {
    return children.map(child => {
      return (
        <tr className={styles.expandedRow} key={child.name}>
          <td className={styles.name} colSpan="4"><a href={child.uri}>{child.name}</a></td>
          <td className={styles.guideline} colSpan="4">{renderGuidelineUri(child.guidelineUri)}</td>

          {renderStatus(child, HTML)}
          {renderStatus(child, ANGULAR)}
          {renderStatus(child, ANGULAR, NL)}
          {renderStatus(child, REACT)}
          {renderStatus(child, REACT, SV)}

          {renderDesignLink(child, SKETCH, sketchUrl)}
          {renderDesignLink(child, FIGMA, figmaUrl)}
          {renderDesignLink(child, ADOBE_XD, adobeXdUrl)}

        </tr>)
    })
  };

  return (
    <React.Fragment>
      <tr onClick={() => setIsExpanded(!isExpanded)} className={styles.row}>
        <td colSpan="4"><a href={item.uri}>{name}</a></td>
        <td colSpan="4">{renderGuidelineUri(item.guidelineUri)}</td>
        {countLanguages(HTML)}
        {countLanguages(ANGULAR)}
        {countLanguages(ANGULAR, NL)}
        {countLanguages(REACT)}
        {countLanguages(REACT, SV)}

        {countDesign(SKETCH)}
        {countDesign(FIGMA)}
        {countDesign(ADOBE_XD)}

        <td className={styles.expand}>
          {isExpanded ? 'Close' : 'Open'}
        </td>
      </tr>
      {isExpanded && showExpand(children)}
    </React.Fragment>

  )

};

export default OverviewItem;
