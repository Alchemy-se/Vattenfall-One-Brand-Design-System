import React from 'react';
import PageHeader from "../../lib/pageHeader";
import styles from "./styles.scss";

const Overview = () => {
  return (
    <div>
      <PageHeader title={'Overview'} />
      <div className={styles.container}>


        Lorem ipsum dolor sit amet, his ei nonumy volumus, sit magna salutandi ad. Vim ad case quodsi. Ut sed liber
        malorum corpora, per et everti consequuntur. Tritani facilisi interpretaris te eam. Wisi ferri temporibus eos
        te, ex pro epicuri definiebas. Esse omittam sit et. Mea ignota meliore consequat ut, discere delicata accusamus
        et quo. Eu veniam qualisque dignissim pri. Mea praesent pertinacia id.

        <div className={styles.buttonContainer} >

          <a href="/get-started/design" className="vf-link-with-arrow">Designers</a>
          <a href="/get-started/developer" className="vf-link-with-arrow">Developers</a>

        </div>
      </div>


    </div>
  );
};

export default Overview;
