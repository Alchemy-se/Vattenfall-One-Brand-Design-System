import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';

const BodyTextSmall = () => {
  return (
    <Fragment>
      <div className='vf-row'>
        <div className='vf-col'>
          <h4 className='use-in-toc'>Body text small</h4>
        </div>
      </div>
      <div className='vf-row'>
        <div className='vf-col'>
          <p className='vf-typo-p-secondary'>
            This is the body text small, which is used in all of Vattenfall’s
            modules as body text.
          </p>
        </div>
      </div>
      <div className='vf-row'>
        <ElementSpeifications
          screenSize='Dektop'
          fontName='Vattenfall Hall'
          fontWeight='Regular'
          fontSize='16px'
          lineHeight='28px'
        />
        <ElementSpeifications
          screenSize='Tablet'
          fontName='Vattenfall Hall'
          fontWeight='Regular'
          fontSize='16px'
          lineHeight='28px'
        />
        <ElementSpeifications
          screenSize='Mobile'
          fontName='Vattenfall Hall'
          fontWeight='Regular'
          fontSize='16px'
          lineHeight='28px'
        />
      </div>
    </Fragment>
  )
};

export default BodyTextSmall;
