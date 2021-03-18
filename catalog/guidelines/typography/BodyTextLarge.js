import React, { Fragment } from 'react';
import ElementSpeifications from './ElementSpecification';
import styles from "./Typography.scss";

const BodyTextLarge = () => {
  return (
    <Fragment>
      <div className='vf-row'>
        <div className='vf-col'>
          <h4 className='use-in-toc'>Body text large</h4>
        </div>
      </div>
      <div className='vf-row'>
        <div className='vf-col'>
          <p className={styles.bodyTextLarge}>
            This is the large body copy, our main body text used on the website.
          </p>
        </div>
      </div>
      <div className='vf-row'>
        <ElementSpeifications
          screenSize='Desktop'
          fontName='Vattenfall Hall'
          fontWeight='Regular'
          fontSize='20px'
          lineHeight='36px'
        />
        <ElementSpeifications
          screenSize='Tablet'
          fontName='Vattenfall Hall'
          fontWeight='Regular'
          fontSize='20px'
          lineHeight='36px'
        />
        <div className='vf-col'></div>
      </div>
    </Fragment>
  )
};

export default BodyTextLarge;
