import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';

const HeaderH2 = () => {
  return (
    <Fragment>
      <div className='vf-row'>
        <div className='vf-col'>
          <h2 className='use-in-toc'>
            Header H2
          </h2>
        </div>
      </div>
      <div className='vf-row'>
        <div className='vf-col'>
          <p>Primarily used for secondary sections inside content area.</p>
        </div>
      </div>
      <div className='vf-row'>
        <ElementSpeifications
          screenSize='Desktop'
          fontName='Vattenfall Hall Display'
          fontWeight='Bold'
          fontSize='36px'
          lineHeight='42px'
        />
        <ElementSpeifications
          screenSize='Tablet'
          fontName='Vattenfall Hall Display'
          fontWeight='Bold'
          fontSize='36px'
          lineHeight='42px'
        />
        <ElementSpeifications
          screenSize='Mobile'
          fontName='Vattenfall Hall Display'
          fontWeight='Bold'
          fontSize='28px'
          lineHeight='32px'
        />
      </div>
    </Fragment>
  )
};

export default HeaderH2;
