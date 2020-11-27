import React from 'react';

const HeroBlock = ({title, text, textlineTwo, children}) => {
  return (
    <div className="vf-row w-100" style={{ margin: '44px 0' }}>
      <div className="vf-col-12" style={{paddingLeft: '0'}}>
        <h4 className="use-in-toc">{title}</h4>
        <p>{text}</p>
        {textlineTwo && 
          <p>{textlineTwo}</p>
        }
        <div style={{width: "78vw", marginLeft:"-44px", marginTop:"-44px"}}>
        {children}
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;