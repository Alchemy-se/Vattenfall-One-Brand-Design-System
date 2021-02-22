import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';

const HeaderH2 = () => {
  return (
    <Fragment>
      <div className='vf-row'>
        <div className='vf-col'>
          <h2 className='use-in-toc' style={{ fontSize: '3.25rem' }}>
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
          screenSize='Dektop'
          fontName='Vattenfall Hall Display'
          fontWeight='Bold'
          fontSize='52px'
          lineHeight='72px'
        />
        <ElementSpeifications
          screenSize='Tablet'
          fontName='Vattenfall Hall Display'
          fontWeight='Bold'
          fontSize='52px'
          lineHeight='72px'
        />
        <ElementSpeifications
          screenSize='Mobile'
          fontName='Vattenfall Hall Display'
          fontWeight='Bold'
          fontSize='36px'
          lineHeight='40px'
        />
      </div>
    </Fragment>
  )
};

export default HeaderH2;
