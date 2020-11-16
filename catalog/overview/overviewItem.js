import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.scss'
import authContext from "../../helpers/authContext";

const FIGMA = 'figmaUrl';
const SKETCH = 'sketchUrl';
const ADOBE_XD = 'adobeXDUrl';
const ANGULAR = 'angular';
const HTML = 'html';
const REACT = 'react';
const SV = 'SV';
const NL = 'NL';

const OverviewItem = ({ item, id, setSelectedChild, setSelectedParentID, setSelectedParent }) => {
  const { name, children, figmaUrl, adobeXdUrl, sketchUrl } = item;
  const { authenticated } = useContext(authContext);


  const [isExpanded, setIsExpanded] = useState();
  const [hasBeenClicked, setHasBeenClicked] = useState(false)
  const more = require('../../assets/icons/More.svg').default;
  const close = require('../../assets/icons/Close.svg').default;
  const edit = require('../../assets/icons/edit-icon.png').default;

  const countDesign = (program) => {
    const designs = children.filter(design => design[program])
    return <td className={styles.count}> {designs.length} </td>
  };

  const renderDesignLink = (child, type, url) => {

    if (child[type] && url) {
      return (
        <td style={{ position: "relative" }}>
          <a target='_blank' href={url}>
            <div className={styles.circleTD}>
              <div className={styles.designLink}>
              </div>
            </div>
          </a>
        </td>)


    }
    return (<td>
      <div className={styles.circleTD}>
        <div className={styles.unknown} />
      </div>
    </td>)
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
    return <td className={styles.count}> {languages.length} </td>
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
        return <td>
          <div className={styles.circleTD}>
            <div className={styles.unknown} />
          </div>
        </td>;
      case 0:
        return <td>
          <div className={styles.circleTD}>
            <div className={styles.canBeUsed} />
          </div>
        </td>
      case 1:
        return <td>
          <div className={styles.circleTD}>
            <div className={styles.inReview} />
          </div>
        </td>
      case 2:
        return <td>
          <div className={styles.circleTD}>
            <div className={styles.canBeUsedSoon} />
          </div>
        </td>
      case 3:
        return <td>
          <div className={styles.circleTD}>
            <div className={styles.awaitingReview} />
          </div>
        </td>
      case 4:
        return <td>
          <div className={styles.circleTD}>
            <div className={styles.canBeUsedIf} />
          </div>
        </td>
      default:
        return <td />
    }
  };

  const onEditClick = (name) => {
    const selected = item.children.filter(child => {
      if (child.name === name) {
        return true
      }
    })
    setSelectedParentID(id)
    setSelectedChild(selected[0])
  };


  const showExpand = (children) => {
    return children.map(child => {
      return (
        <tr className={styles.expandedRow} key={child.name}>
          <td colSpan="4">
            <div className={styles.nameContainer}>
              <a href={child.uri}>{child.name}</a>

              {authenticated &&
              <img onClick={() => onEditClick(child.name)}
                   className={styles.editIcon} src={edit} alt="" />
              }
            </div>

          </td>
          <td colSpan="4">{renderGuidelineUri(child.guidelineUri)}</td>

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

      <tr onClick={() => {
        setHasBeenClicked(true)
      }} className={styles.row}>
        <td className={`${isExpanded ? styles.isOpen : ""}`} colSpan="4">
          <div className={styles.nameContainer}>
            <a
              href={item.uri}>{name}
            </a>

            {authenticated &&
            <img onClick={() => {
              setSelectedParentID(id)
              setSelectedParent(item)
            }
            }
                 className={styles.editIcon} src={edit} alt="" />
            }</div>

        </td>
        <td colSpan="4">{renderGuidelineUri(item.guidelineUri)}</td>
        {countLanguages(HTML)}
        {countLanguages(ANGULAR)}
        {countLanguages(ANGULAR, NL)}
        {countLanguages(REACT)}
        {countLanguages(REACT, SV)}

        {countDesign(SKETCH)}
        {countDesign(FIGMA)}
        {countDesign(ADOBE_XD)}

        <td onClick={() => setIsExpanded(!isExpanded)} className={styles.expand}>
          <img
            src={isExpanded ? close : more} alt="btn" />
        </td>
      </tr>
      {isExpanded && showExpand(children)}
    </React.Fragment>

  )

};

export default OverviewItem;
