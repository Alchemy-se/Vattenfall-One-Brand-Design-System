import React, { useState } from 'react';
import styles from "../styles.scss";

const NewZendeskRequest = ({ validEmail, isError, isLoading, selectedChild, reportData, hasError, handleInputData, spinner, disableSubmit, displayError, files, handleFiles, renderFileNames, sendReport, setOpenModal}) => {

  return (
    <div className={styles.newRequestForm}>
      <h2>Feature request</h2>

      <div className={styles.inputFieldsContainer}>

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
                 className={`vf-input ${hasError.email ? "vf-input--error" : "vf-input--css-placeholder"}`}
                 placeholder={"Email"}
                 value={reportData.email}
                 name='email'
                 onChange={(e) => handleInputData(e)}
          />
          <label
            htmlFor="vf_standard_input_email">{`${hasError.email ? "Email is required " : "Email"}`}</label>
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


          <select required={true} className={styles.selectList}>
            <option value="">Type of request</option>
            <option value="guideline">Guideline</option>
            <option value="componet">Component</option>
            <option value="guideline+component">Guideline & Component</option>
          </select>

          <select required={true} className={styles.selectList}>
            <option value="">Language</option>
            <option value="html/js">HTML/JS</option>
            <option value="reactJS">ReactJS</option>
            <option value="angular">Angular</option>
            <option value="all">All</option>
          </select>
        </div>

        <button type="button"
                className="vf-btn vf-btn--lg vf-btn--primary">
          Submit
        </button>


      </div>



    </div>


  );
};

export default NewZendeskRequest;
