import React, { Fragment } from "react";

const IconBlock = ({title, text, children}) => {
  return (
    <Fragment>
      <div className="vf-mt-md" />
      <div className="row align-items-start">
        <h4 className="use-in-toc">{title}</h4>
        <p>{text}</p>
        <div className="vf-col vf-p-0" style={{marginLeft: "-44px", marginTop:"-44px"}}>
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default IconBlock;