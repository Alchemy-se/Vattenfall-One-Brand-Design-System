import React, { Fragment } from 'react';
import PageHeader from "../PageHeader";
import styles from './styles.scss'
import DottedDescription from "../DottedDescription";
import CarouselComponent from "../../components/exclude-from-metadata/responsive-components/carousel";
import Modals from "../../zendesk/modals/modals";


const Carousel = () => {
  const hideSource = (source) => {
    let hideSourceCode = source.replace("showSource: true", "showSource: false");
    hideSourceCode = source.replace("responsive: true", "responsive: false");
    return hideSourceCode.substring(hideSourceCode.indexOf("\n") + 1);

  }

  return (
    <Fragment>
      <PageHeader title="Carousel" />

      <h3 className={"use-in-toc"}>
        Example
      </h3>
      <div>We use the Carousel to display different cards which navigate to a certain detail or product page.</div>

      <CarouselComponent />
      <div style={{ marginTop: '44px' }}>
        <div className={styles.infoGroup}>
          <h2 className={`${styles.subHeader} no-report-button use-in-toc`}>General info</h2>
          <span>Dimensions 1440 x 764</span>
        </div>


        <span style={{ marginBottom: "24px" }} className={styles.subHeader}>Specifications content</span>
        <div className={styles.infoGroup}>
          <span className={styles.subHeader}>Background:</span>
          <div>Mandatory: <span className={styles.bold}>Yes</span></div>
          <div>Styling: <span className={styles.bold}>Background color Light Blue, Light Green or Light Grey</span>
          </div>
        </div>

        <div className={styles.infoGroup}>
          <span className={styles.subHeader}>Title:</span>
          <div>Mandatory: <span className={styles.bold}>Yes</span></div>
          <div>Styling: <span className={styles.bold}>H2 Black center-aligned</span></div>
          <div>Rules: <span className={styles.bold}>Max</span> 25 characters –
            <span className={styles.bold}>Min</span> 5 characters
          </div>
        </div>

        <div className={styles.infoGroup}>
          <span className={styles.subHeader}>Card:</span>
          <div>Mandatory: <span className={styles.bold}>Yes</span></div>
          <div>Content: <span className={styles.bold}>Image, H4 title, Rich text, Text Button</span></div>
          <div>Title: <span className={styles.bold}>Max</span> 2 rows, 35 characters – <span
            className={styles.bold}>Min</span> 15 characters
          </div>
          <div>Rich text: <span className={styles.bold}>Text truncate after 105 characters</span></div>
          <div>Rules: <span className={styles.bold}>Always align to left</span></div>
          <div>Interaction: <span className={styles.bold}>Link</span> to internal page</div>
        </div>

        <DottedDescription
          useInToc={false}
          title="Do's and Don't"
          dottedLines={[
            "Always place 4 or more cards in the module.",
            "Make sure to write the titles and text the same length for all the cards in the module.",
            "Don’t make the tertiary button to long. Make only use of verbs in the buttons."
          ]}
        />
      </div>

      <Modals />
    </Fragment>

  );
};

export default Carousel;
