import React from 'react';
import styles from './Guidelines.scss';
import PageHeader from '../lib/pageHeader';

const Guidelines = () => {
  return (
    <React.Fragment>
      <PageHeader title={'Design guidelines'}/>
      <div className={styles.guidelinesContainer}>
        <div>
          <p className={styles.guidelinesText}>
            In order to set the components in context here are a few examples of designs you can create with the Digital
            Design system.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Guidelines;
