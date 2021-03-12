import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';

const HeaderH1 = () => {
  return (
    <Fragment>
      <div className='vf-row'>
        <div className='vf-col'>
          <h1 className='use-in-toc'>Header H1</h1>
        </div>
      </div>
      <div className='vf-row'>
        <div className='vf-col'>
          <p>
            Should always be used for titles of top-level sections of a screen.
            Primarily used for Marquee/Hero sections.
          </p>
        </div>
      </div>
      <div className='vf-row'>
        <ElementSpeifications
          screenSize='Desktop'
          fontName='Vatenfall Hall Display'
          fontWeight='Bold'
          fontSize='52px'
          lineHeight='62px'
        />
        <ElementSpeifications
          screenSize='Tablet'
          fontName='Vatenfall Hall Display'
          fontWeight='Bold'
          fontSize='52px'
          lineHeight='62px'
        />
        <ElementSpeifications
          screenSize='Mobile'
          fontName='Vatenfall Hall Display'
          fontWeight='Bold'
          fontSize='34px'
          lineHeight='40px'
        />
      </div>
    </Fragment>
  )
};

export default HeaderH1;
