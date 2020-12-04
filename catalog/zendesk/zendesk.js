import React, { useEffect, useState } from 'react';
import styles from './styles.scss';
import { useLocation } from "react-router-dom";
import { sendRequest } from "../../helpers/apiCalls/zendeskCalls";
import ModalContent from "./components/modalContent";
import NewZendeskRequest from "./components/newZendeskRequest";


const Zendesk = ({ data, setOpenModal, setDisplayConfirmModal, setStatus, isNewRequest }) => {
  const close = require('../../assets/icons/Close.svg').default;
  const spinner = require('../../assets/spinner.gif').default;
  const location = useLocation();
  const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
  let guidelineUri;
  let componentUri;
  let language;
  let category;
  let fullUrl;
  if (!isNewRequest) {

    // get path name. match components/guidelines from e.g http://localhost:3213/components/colors
    const pathRegex = new RegExp("(?<=\\/)[a-z]+(?=\\/)")
    let selectedChild = { name: "" };
    category = pathRegex.exec(location.pathname)[0];
    fullUrl = window.location.origin;


    language = "html/js";
    if (data.length >= 1) {
      selectedChild = data[0];

      if (category === 'components') {
        guidelineUri = "";
        componentUri = selectedChild.uri;
        fullUrl = fullUrl + componentUri
      } else {
        guidelineUri = selectedChild.uri;
        componentUri = "";
        fullUrl = fullUrl + guidelineUri
      }
    }
  }

  // file size in k. Approx 50 mb. Hard limit from zendesk
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
      validateEmail()
    }
  }, [reportData, submitHasBeenClicked]);
  const [validEmail, setValidEmail] = useState(true)
  const validateEmail = () => {
    if (emailRegex.test(reportData.email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }

  }

  const sendReport = async (e) => {
    e.preventDefault();
    setSubmitHasBeenClicked(true);

    const checkErrors = handleError();
    validateEmail()
    if (checkErrors || !validEmail) {
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
          { id: 360011158198, value: "report issue" },
          { id: 360011185617, value: componentUri },
          { id: 360011158218, value: guidelineUri },
          { id: 360011298258, value: fullUrl }
        ]
      }
    };
    const status = await sendRequest(data, files);
    if (status) {
      setIsLoading(false);
      setOpenModal(false);
      setDisplayConfirmModal(true);
      setStatus(status)
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

  //TODO måndag fortästt att fixa så modalCOntent samt newRequest kan dela funktioner

  useEffect(() => {
    if (errorMessage.length > 5) {
      setDisableSubmit(true)
    } else {
      setDisableSubmit(false)
    }

  }, [displayError]);

  const modalContentProps = {
    validEmail,
    isError,
    isLoading,

    reportData,
    hasError,
    handleInputData,
    spinner,
    disableSubmit,
    displayError,
    files,
    handleFiles,
    renderFileNames,
    sendReport,
    setOpenModal
  }
  return (
    isNewRequest ? <NewZendeskRequest {...modalContentProps} /> :
      <ModalContent {...modalContentProps} />
  );


};

export default Zendesk;
