import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Guidelines.scss";
import { Anchor } from "antd";
import Modals from "../zendesk/modals/modals";
import { useScript } from "../../helpers/hooks/useEffects/useScript";
const { Link } = Anchor;


const GuidelinesWrapper = ({ children }) => {
  const uri = location.pathname
  console.log('uri: ', uri)
  const containerRef = useRef(null);
  const [tocData, setTocData] = useState([])

  useEffect(() => {
    const scrollableElement = document.getElementById("content-container");
    if (scrollableElement) {
      scrollableElement.scrollTo(0, 0);
    }
  }, [children])

  useEffect(() => {
    let nodes = ReactDOM.findDOMNode(containerRef.current);
    let tags = nodes.getElementsByClassName("use-in-toc");



    let tocs = []
    // Special case for grid elements as they have different structure
    // and no way to separate two elements with same name in h2 (tablet)
    let gridElements = nodes.getElementsByClassName("use-in-toc-grid");
    for (let i = 0; i < gridElements.length; i++) {
      let currentElement = gridElements[i];
      const content = currentElement.id;
      const elementID = content.replace(/\s/g, '-')
      tocs.push({ id: "#" + elementID, name: content })

    }

    for (let i = 0; i < tags.length; i++) {
      let currentElement = tags[i];
      const content = currentElement.textContent;
      const elementID = formatId(content)
      currentElement.setAttribute("id", elementID)
      tocs.push({ id: "#" + elementID, name: content })
    }

    if (tocs.length >= 1) {
      setTocData(tocs)
    }

  }, [])


  const formatId = (textContent) => {
    textContent = textContent.replace(/–/g, '');
    textContent = textContent.replace(/\s/g, '-');
    return textContent.toLowerCase()
  };


  const tableOfContents = () => {
    if (tocData.length < 1) {
      return null;
    }

    const links = tocData.map(item => {
      const value = item.name;
      const id = item.id
      return (<Link href={id} title={value} key={"anchor-" + id} />);
    });
    return (
      <div className={styles.tableOfContentContainer}>
        <Anchor
          getContainer={() => document.getElementById("content-container")}
          showInkInFixed={true}
          affix={true}
        >
          {links}
        </Anchor>
      </div>
    )
  }

  const renderModals = () => {
    return <Modals uri={uri} type={'guidelines'} />
  }

  useScript("/js/horizon.min.js");

  return (
    <div className={styles.guidelinesContainer} ref={containerRef}>
      {tableOfContents()}
      {children}
      {renderModals()}
    </div>
  );

};
export default GuidelinesWrapper;
