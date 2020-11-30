import React, { useEffect, useState } from 'react';
import styles from './styles.scss';
import { useLocation } from "react-router-dom";
import { sendRequest } from "../../helpers/apiCalls/zendeskCalls";


const Zendesk = ({ data, setOpenModal, handleConfirmModal }) => {


  const close = require('../../assets/icons/Close.svg').default;
  const spinner = require('../../assets/spinner.gif').default;
  const location = useLocation();
  const regex = new RegExp("(?<=\\/)[a-z]+(?=\\/)")
  let selectedChild = { name: "" };
  let category = regex.exec(location.pathname)[0];
  let guidelineUri;
  let componentUri;
  category = category.slice(0, -1);


  const language = "html/js";
  if (data.length >= 1) {
    selectedChild = data[0];

    if (category === 'components') {
      guidelineUri = "";
      componentUri = selectedChild.uri;
    } else {
      guidelineUri = selectedChild.guidelineUri;
      componentUri = "";
    }

  }
  // filesize in k. Approx 50 mb
  const maxFileSize = 50000000;
  let errorMessage = "";
  const [hasError, setHasError] = useState({ subject: false, name: false, email: false, comment: false });

  const [reportData, setReportData] = useState({ subject: "", name: "", email: "", comment: "" });

  const [isLoading, setIsLoading] = useState(false);

  const [files, setFiles] = useState(false);

  const [submitHasBeenClicked, setSubmitHasBeenClicked] = useState(false);

  const [disableSubmit, setDisableSubmit] = useState(false);

  const handleInputData = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setReportData(prevState => ({
      ...prevState,
      [name]: value
    }))
  };

  const handleFiles = (e) => {
    e.preventDefault();
    const filesFromForm = Array.from(e.target.files);
    let fileArray = [];
    filesFromForm.forEach((file) => {
      fileArray.push(file)
    });
    // concat new array of files if file is added one at a time
    setFiles(prevState => [...prevState, ...fileArray]);
  };

  let isError = false;
  const handleError = () => {
    for (const [key, value] of Object.entries(reportData)) {
      // Check if value without spaces is less than 1. If so set errorstate to true
      if (value.trim().length < 1) {
        isError = true;
        setHasError(prevState => ({
          ...prevState,
          [key]: true
        }))
      } else {
        isError = false;
        setHasError(prevState => ({
          ...prevState,
          [key]: false
        }))
      }
    }
    return isError
  };

  useEffect(() => {
    if (submitHasBeenClicked) {
      handleError();
    }
  }, [reportData, submitHasBeenClicked]);

  const sendReport = async (e) => {
    e.preventDefault();
    setSubmitHasBeenClicked(true);

    const checkErrors = handleError();
    if (checkErrors) {
      return
    }
    setIsLoading(true);


    const data = {
      request: {
        requester: { name: reportData.name, email: reportData.email },
        subject: reportData.subject,
        comment: { body: reportData.comment },
        custom_fields: [
          { id: 360011116697, value: language },
          { id: 360011185597, value: category },
          { id: 360011158198, value: "new request/ report issue" },
          { id: 360011185617, value: componentUri },
          { id: 360011158218, value: guidelineUri }
        ]
      }
    };
    const success = await sendRequest(data, files);
    if (success) {
      setIsLoading(false);
      setOpenModal(false);
      handleConfirmModal(success);
    }
  };

  const deleteFile = (index) => {
    const tempFiles = [...files];
    const filesToKeep = tempFiles.filter((x, i) => {
      if (i !== index) {
        return x
      }
    });
    setFiles(filesToKeep);
  };

  const shortFilename = (name) => {
    const names = name.split(".");
    const shorted = names[0].substr(0, 10) + "[...]";
    return shorted + "." + names[1];
  };


  const renderFileNames = () => {
    let names = [];
    files.map((file, index) => {
      const toBig = file.size > maxFileSize;
      let displayName = file.name;
      if (displayName.length > 10) {
        displayName = shortFilename(displayName)
      }
      return names.push(
        <li key={name + "-" + index}>
          <span className={`${toBig && styles.errorText}`}>{displayName}</span>
          <img
            src={close}
            onClick={() => deleteFile(index)}
            alt="close btn"
          />
        </li>
      );
    });
    return (<ul className={styles.fileNameList}>{names}</ul>)
  };


  const displayError = () => {
    if (files) {
      const filesToBig = files.filter(file => file.size > maxFileSize);

      if (filesToBig.length >= 1) {
        errorMessage = "File(s) to big";
      }
      if (files.length > 5) {
        errorMessage = "Maximum 5 files are allowed";
      }
      if (filesToBig.length >= 1 && files.length > 5) {
        errorMessage = "Maximum 5 files are allowed, File(s) to big";
      }
      return <span className={styles.errorText}>{errorMessage}</span>
    }
  };

  useEffect(() => {
    if (errorMessage.length > 5) {
      setDisableSubmit(true)
    } else {
      setDisableSubmit(false)
    }

  }, [displayError]);


  return (
    <div className={styles.modalContainer}>
      {isLoading && <div className={styles.overlay} />}
      <div className={styles.modalContent}>
        {isLoading && <div className={styles.spinner}>
          <img src={spinner} alt="" />
        </div>}

        <form>
          <h3>Report issue – {selectedChild.name}</h3>
          <div className={styles.inputFieldsContainer}>
            <div className={styles.leftColumn}>
              <div className="vf-input-container">
                <input type="text"
                       id="vf_standard_input"
                       className={`vf-input ${hasError.subject && "vf-input--error"}`}
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
                       className={`vf-input ${hasError.name && "vf-input--error"}`}
                       placeholder="Name"
                       value={reportData.name}
                       name='name'
                       onChange={(e) => handleInputData(e)}
                />
                <label htmlFor="vf_standard_input">{`${hasError.name ? "Name is required " : "Name"}`}</label>
              </div>

              <div className="vf-input-container">
                <input type="text"
                       id="vf_standard_input"
                       className={`vf-input ${hasError.email && "vf-input--error"}`}
                       placeholder="Your email"
                       value={reportData.email}
                       name='email'
                       onChange={(e) => handleInputData(e)}
                />
                <label htmlFor="vf_standard_input">{`${hasError.email ? "Email is required " : "Email"}`}</label>
              </div>
            </div>

            <div className="vf-input-container">
              <textarea id="vf_textarea_input"
                        value={reportData.comment}
                        name="comment"
                        onChange={(e) => handleInputData(e)}
                        className={`vf-input ${hasError.comment && "vf-input--error"}`}
              />
              <label htmlFor="vf_standard_input">{`${hasError.comment ? "Comment is required " : "Comment"}`}</label>
            </div>
          </div>

          <div className={styles.fileUploadContentContainer}
                 style={disableSubmit ? { borderColor: "#F93B18" } : {}}>

              <span>Upload your files (5 maximum)</span>
              <span>Up to 50 MB each</span>
              {displayError()}

              <label htmlFor="file-upload-button" className="vf-btn vf-btn--sm vf-btn--outline-secondary">
                Attach file(s)...
              </label>
              <input type="file" id="file-upload-button" name="attachment" multiple
                     onChange={(e) => handleFiles(e)} />
              {files && renderFileNames()}
            </div>

            <div className={styles.buttonRow}>
              <button onClick={() => setOpenModal(false)} type="button"
                      className={`vf-btn  vf-btn--outline-dark ${styles.border}`}>Cancel
              </button>

              <button onClick={sendReport} disabled={disableSubmit} type="button"
                      className="vf-btn vf-btn--md vf-btn--primary">Save
              </button>
            </div>


        </form>
      </div>
    </div>
  );


};

export default Zendesk;
