import React, { Fragment } from "react";
import styles from "./headingRenderer.scss";

const getValueFromArray = (children) => {
  const mapped = children.map(child => {
    if (child.props.inline) {
      return <code>{child.props.value}</code>
    }
    return child.props.value
  });
  return mapped.join(" ");
};

const HeadingHashLink = (rawValue) => {
  if (Array.isArray(rawValue)) {
    let value = "";
    for (let i = 0; i < rawValue.length; i++) {
      value += rawValue[i].props.value
    }
    value = value.toLowerCase().replace(/ /g, "-");
    return (
      <span className={styles.anchorWrapper}>
				&nbsp;<a className={styles.anchor} href={"#" + value}>#</a>
			</span>
    );
  }
  const value = rawValue.toLowerCase().replace(/ /g, "-");
  return (
    <span className={styles.anchorWrapper}>
			&nbsp;<a className={styles.anchor} href={"#" + value}>#</a>
		</span>
  );
};

const getId = (rawValue) => {
  if (Array.isArray(rawValue)) {
    let value = "";
    for (let i = 0; i < rawValue.length; i++) {
      value += rawValue[i].props.value
    }
    value = value.toLowerCase().replace(/ /g, "-");
    return value;
  }
  const value = rawValue.toLowerCase().replace(/ /g, "-");
  return value;
};

const Heading = (props) => {
  console.log('props: ', props)

  switch (props.level) {
    case 1: {
      return props.children.map(child =>
        <h1 id={getId(child.props.value)} key={"heading-" + child.key}
            className={styles.headingContainer + " find_by_header"}>
          {child.props.value}
          {HeadingHashLink(child.props.value)}
        </h1>
      )
    }
    case 2: {
      return props.children.map(child =>
        <h2 id={getId(child.props.value)} key={"heading-" + child.key}
            className={styles.headingContainer + " find_by_header"}>
          {child.props.value}
          {HeadingHashLink(child.props.value)}
        </h2>
      )
    }
    case 3: {
      return props.children.map(child =>
        <h3 id={getId(child.props.value)} key={"heading-" + child.key}
            className={styles.headingContainer + " find_by_header"}>
          {child.props.value}
          {HeadingHashLink(child.props.value)}
        </h3>
      )
    }
    case 4: {
      return props.children.map(child =>
        <h4 id={getId(child.props.value)} key={"heading-" + child.key}
            className={styles.headingContainer + " find_by_header"}>
          {child.props.value}
          {HeadingHashLink(child.props.value)}
        </h4>
      );
    }
    case 5: {
      return (
        <h5 id={getId(props.children)} key={"heading-" + props.children[0].key}
            className={styles.headingContainer + " find_by_header"}>
          {
            props.children.map(child => {
              if (child.props.inline) {
                return <code>{child.props.value}</code>
              }
              return child.props.value
            })
          }
          {HeadingHashLink(props.children)}
        </h5>
      );
    }
    case 6 : {
      return props.children.map(child => {
          return (<Fragment key={"fragment-" + child.key}>
              <h1 id={getId(child.props.value)} key={"heading-" + child.key}
                  style={{display: "none"}}
                  className={styles.headingContainer + " find_by_header no-header-on-component"}>
              </h1>
              <span id={"report-issue-hidden"} />
            </Fragment>
          );
        }
      )
    }
    default: {
      console.error("HeadingRenderer missing case for level: ", props.level);
      return null;
    }
  }
}

export default Heading;
