import React, { useState } from 'react';
import styles from "../styles.scss";
import PageHeader from "../../lib/pageHeader";

const NewZendeskRequest = ({ validEmail, isLoading, reportData, hasError, handleInputData, spinner, disableSubmit, displayError, files, handleFiles, renderFileNames, sendReport, setOpenModal }) => {

  const renderErrorText = (name) => {
    return <span className={styles.errorText}>{name} is required </span>
  }


  return (
    <div className={styles.newRequestForm}>
      {isLoading && <div className={styles.overlay} />}

      {isLoading && <div className={styles.spinner}>
        <img src={spinner} alt="" />
      </div>}
      <PageHeader title={"New asset request"} />


      <div className={styles.inputFieldsContainer}>
        <p>If you need a new asset, want to report an issue or submit a general suggestion on the Vattenfall digital
          design or code assets submit your details below and we will get back to you as soon as we can. </p>
        <div className="vf-input-container">
          <input type="text"
                 id="vf_standard_input"
                 className={`vf-input ${hasError.subject ? "vf-input--error" : "vf-input--css-placeholder"}`}
                 placeholder="Subject"
                 required={true}
                 value={reportData.subject}
                 name='subject'
                 onChange={(e) => handleInputData(e)}
          />
          <label
            htmlFor="vf_standard_input">{`${hasError.subject ? "Subject is required " : "Subject"}`}</label>
        </div>


        <div className="vf-input-container">
          <input type="text"
                 id="vf_standard_input"
                 className={`vf-input ${hasError.name ? "vf-input--error" : "vf-input--css-placeholder"}`}
                 placeholder="Name"
                 value={reportData.name}
                 name='name'
                 onChange={(e) => handleInputData(e)}
          />
          <label htmlFor="vf_standard_input">{`${hasError.name ? "Name is required " : "Name"}`}</label>
        </div>

        <div className="vf-input-container">

          <input type="email"
                 id="vf_standard_input_email"
                 className={`vf-input ${hasError.email || !validEmail ? "vf-input--error" : "vf-input--css-placeholder"}`}
                 placeholder={"Email"}
                 value={reportData.email}
                 name='email'
                 onChange={(e) => handleInputData(e)}
          />
          <label
            htmlFor="vf_standard_input_email">{`${hasError.email || !validEmail ? "Email is required " : "Email"}`}</label>
        </div>
        <div className="vf-input-container">
              <textarea id="vf_textarea_input"
                        value={reportData.comment}
                        name="comment"
                        rows={5}
                        placeholder={"Comment"}
                        onChange={(e) => handleInputData(e)}
                        className={`vf-input ${hasError.comment ? "vf-input--error" : "vf-input--css-placeholder"}`}
              />
          <label htmlFor="vf_standard_input">{`${hasError.comment ? "Comment is required " : "Comment"}`}</label>
        </div>
        <div className={styles.dropdownContainer}>


          <select name={"category"} onChange={(e) => handleInputData(e)} required={true}
                  className={`${styles.selectList} ${hasError.category ? styles.errorBorderSelectList : ""}`}>
            <option value="">Category</option>
            <option value="guideline">Guideline</option>
            <option value="componet">Component</option>
            <option value="guideline & component">Guideline & Component</option>
          </select>
          <div className={styles.errorContainer}>{hasError.category && renderErrorText('Category')}
          </div>

          <select name={"language"} onChange={(e) => handleInputData(e)} required={true}
                  className={`${styles.selectList} ${hasError.language ? styles.errorBorderSelectList : ""}`}>

            <option value="">Language</option>
            <option value="html/js">HTML/JS</option>
            <option value="reactJS">ReactJS</option>
            <option value="angular">Angular</option>
            <option value="all">All</option>
          </select>
          <div className={styles.errorContainer}>{hasError.language && renderErrorText('Language')}
          </div>
        </div>

        <div className={styles.fileUploadContentContainer}
             style={disableSubmit ? { borderColor: "#F93B18" } : {}}

        >

          <span>Upload files (maximum of five).</span>
          <span>Up to 50 Mb each</span>
          {displayError()}

          <label htmlFor="file-upload-button" className="vf-btn vf-btn--sm vf-btn--outline-secondary">
            Attach file(s)...
          </label>
          <input type="file" id="file-upload-button" name="attachment" multiple
                 onChange={(e) => handleFiles(e)} />
          {files && renderFileNames()}
        </div>


        <button type="button"
                onClick={sendReport} disabled={disableSubmit}
                className="vf-btn vf-btn--lg vf-btn--primary">
          Submit
        </button>


      </div>

    </div>
  );
};

export default NewZendeskRequest;
