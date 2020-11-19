import React from 'react';

const HeroBlock = ({title, text, textlineTwo}) => {
  return (
    <div className="vf-row w-100" style={{ margin: '100px 0 0 0' }}>
      <div className="vf-col">
        <h4 className="use-in-toc">{title}</h4>
        <p>{text}</p>
        {textlineTwo && 
          <p>{textlineTwo}</p>
        }
      </div>
    </div>
  );
};

export default HeroBlock;