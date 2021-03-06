import React from "react";
import GuidelinesStyles from "./Guidelines.scss";

const GuidelinesBlock = ({title, text, textlineTwo, children}) => {
  return (
    <div className="vf-row w-100" style={{ margin: '44px 0' }}>
      <div className="vf-col-12" style={{paddingLeft: '0'}}>
        <h2 className="use-in-toc">{title}</h2>
        {text && 
          <p>{text}</p>
        }
        {textlineTwo && 
          <p>{textlineTwo}</p>
        }
        <div className={GuidelinesStyles.guidelinesBlockChildWrapper}>
        {children && children}
        </div>
      </div>
    </div>
  );
};

export default GuidelinesBlock;