import React from 'react';
// import 'antd/dist/antd.css';
import styles from './index.scss';
import { Anchor } from 'antd';

const { Link } = Anchor;

const getId = (rawValue) => {
  if(Array.isArray(rawValue)) {
    let value = "";
    for(let i = 0; i < rawValue.length; i++) {
      value+= rawValue[i].props.value
    }
    value = "#"+value.toLowerCase().replace(/ /g, "-");
    return value;
  }
  const value = "#"+rawValue.toLowerCase().replace(/ /g, "-");
  return value;
};

const TableOfContents = ({content}) => {
  console.log('content: ', content)
  if(!content || content.length === 0) {
    return null;
  }


  const links = content.map(item => {
    const value = item.props.value;
    const id = getId(item.props.value);
    return (<Link href={id} title={value} key={"anchor-"+id}/>);
  });
  const targetOffset = 100;
  return (
    <div className={styles.container}>
      <Anchor
        targetOffset={targetOffset}
        getContainer={() => document.getElementById("content-container")}
        showInkInFixed={true}
        affix={true}
      >
        {links}
      </Anchor>
    </div>
  )
}
export default TableOfContents;
