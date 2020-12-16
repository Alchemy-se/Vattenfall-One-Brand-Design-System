import React from 'react';
import PageHeader from "../../lib/pageHeader";
import styles from "./styles.scss";

const Introduction = () => {
  return (
    <div>
      <PageHeader title={'Introduction'} />
      <div className={styles.container}>

       <span> No matter if you are a designer or a developer, we have created a tool / modular system with the Digital Design
        System for you to map and manage all processes in the creation of an online project according to our brand and
        technical standards. By synchronizing the modules and components in Abstract, Sketch and GitHub we enable
        designers and developers to use the same basis to create a stringent and uniform result according to the
        Vattenfall Brand Expression.</span>

        <div className={styles.section}>

          <h4>Designers</h4>
          <span>Designers receive all current design specifications and styles in Sketch & Abstract.
            The created layouts serve later as blueprints for programming. No HTML exports from Sketch are necessary! </span>
          <a href="/get-started/design" className="vf-link-with-arrow">Designers</a>

        </div>

        <div className={styles.section}>

          <h4>Developers</h4>
          <span>Programmers receive the basic kit for programming websites, service websites or apps as code.
            All modules and components are identical to the design.
            Please always work 100% with our modules and never copy anything from other sites - because they might not be up to date. </span>
          <a href="/get-started/developer" className="vf-link-with-arrow">Developers</a>

        </div>
      </div>


    </div>
  );
};

export default Introduction;
