import React, { Fragment } from 'react';
import styles from "../../get-started/designers/index.scss";
import PageHeader from "../pageHeader";

const Contact = () => {
  return (
    <Fragment>
      <PageHeader title={"Contact"} />

      <div className={styles.container}>
        <span>If you need to contact us for general queries Email us on <a
          href="mailto:dds@se.nordddb.com">dds@se.nordddb.com</a>
          <br />
          For inquiries regarding specific needs or assets, please submit a request.
        </span>
        <a style={{ display: 'block', marginTop: '24px' }} href="/contact/new-request" className="vf-link-with-arrow">New
        Request</a>


      </div>
    </Fragment>
  );
};

export default Contact;
