import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./Guidelines.scss";
import { Anchor } from "antd";

const { Link } = Anchor;


class GuidelinesWrapper extends Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.state = {
      tocData: []
    }
  }

  componentDidMount() {
    // Scroll top on navigation change.
    const scrollableElement = document.getElementById("content-container");
    if (scrollableElement) {
      scrollableElement.scrollTo(0, 0);
    }

    const tocArray = []

    let nodes = ReactDOM.findDOMNode(this.containerRef.current);
    let tags = nodes.getElementsByClassName("use-in-toc");


    // Special case for grid elements as they have different structure
    // and no way to separate two elements with same name in h2 (tablet)
    let gridElements = nodes.getElementsByClassName("use-in-toc-grid");
    for (let i = 0; i < gridElements.length; i++) {
      let currentElement = gridElements[i];
      const content = currentElement.id;
      const elementID = content.replace(/\s/g, '-')
      tocArray.push({ id: "#"+ elementID, name: content })
    }

    for (let i = 0; i < tags.length; i++) {
      let currentElement = tags[i];
      const content = currentElement.textContent;
      const elementID = this.formatId(content)
      currentElement.setAttribute("id", elementID)
      tocArray.push({ id:"#"+ elementID, name: content })
    }

    if (tocArray.length >= 1) {
      this.setState({
        tocData: tocArray
      })
    }

  }

  formatId = (textContent) => {
    textContent = textContent.replace(/–/g, '');
    textContent = textContent.replace(/\s/g, '-');
    return textContent.toLowerCase()
  };

  tableOfContents = () => {
    if (this.state.tocData.length < 1) {
      return null;
    }
    const tocData = this.state.tocData
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


  render() {
    return (
      <div className={styles.guidelinesContainer} ref={this.containerRef}>
        {this.tableOfContents()}
        {this.props.children}
      </div>
    );
  }
}

export default GuidelinesWrapper;
