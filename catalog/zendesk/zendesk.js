import React, { useEffect, useState, Fragment } from 'react'
import styles from './styles.scss'
import { useLocation } from 'react-router-dom'
import { sendRequest } from '../../helpers/apiCalls/zendeskCalls'
import ModalContent from './components/modalContent'
import NewZendeskRequest from './components/newZendeskRequest'
import ConfirmModal from './modals/confirmModal'
import Spinner from '../utilities/spinner/Spinner'

const Zendesk = ({
  data,
  setOpenModal,
  setDisplayConfirmModal,
  setStatus,
  isNewRequest,
}) => {
  const close = require('../../assets/icons/Close.svg').default
  const location = useLocation()
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  )
  // get path name. match components/guidelines from e.g http://localhost:3213/components/colors
  const pathRegex = new RegExp('(?<=\\/)[a-z]+(?=\\/)')
  let guidelineUri = ''
  let componentUri = ''
  let selectedChild = {}
  let status
  let fullUrl = isNewRequest ? window.location.href : window.location.origin

  // file size in k. Approx 50 mb. Hard limit from zendesk
  const maxFileSize = 50000000
  let errorMessage = ''
  const [hasError, setHasError] = useState({
    subject: '',
    name: '',
    email: '',
    comment: '',
    language: '',
    category: '',
  })
  const [newRequestInfo, setNewRequestInfo] = useState({
    status: '',
    displayConfirmModal: false,
  })
  const initialReportState = {
    subject: '',
    name: '',
    email: '',
    comment: '',
    category: isNewRequest ? '' : pathRegex.exec(location.pathname)[0],
    language: isNewRequest ? '' : 'html/js',
    typOfRequest: isNewRequest ? 'New Request' : 'Report issue',
  }
  const [reportData, setReportData] = useState(initialReportState)

  const [isLoading, setIsLoading] = useState(false)

  const [files, setFiles] = useState(false)

  const [submitHasBeenClicked, setSubmitHasBeenClicked] = useState(false)

  const [disableSubmit, setDisableSubmit] = useState(false)

  const [validEmail, setValidEmail] = useState(true)

  const clearInputs = () => {
    setReportData(initialReportState)
    setSubmitHasBeenClicked(false)
  }

  if (!isNewRequest) {
    fullUrl = window.location.origin

    if (data.length >= 1) {
      selectedChild = data[0]

      if (reportData.category === 'components') {
        guidelineUri = ''
        componentUri = selectedChild.uri
        fullUrl = fullUrl + componentUri
      } else {
        guidelineUri = selectedChild.uri
        componentUri = ''
        fullUrl = fullUrl + guidelineUri
      }
    }
  }

  const handleInputData = e => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    setReportData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleFiles = e => {
    e.preventDefault()
    const filesFromForm = Array.from(e.target.files)
    let fileArray = []
    filesFromForm.forEach(file => {
      fileArray.push(file)
    })
    // concat new array of files if file is added one at a time
    setFiles(prevState => [...prevState, ...fileArray])
  }

  const handleError = () => {
    for (const [key, value] of Object.entries(reportData)) {
      // Check if value without spaces is less than 1. If so set the error state to true
      const isEmpty = value.trim().length < 1
      setHasError(prevState => ({
        ...prevState,
        [key]: isEmpty,
      }))
    }
  }

  useEffect(() => {
    if (submitHasBeenClicked) {
      handleError()
      validateEmail()
    }
  }, [reportData, submitHasBeenClicked])

  const validateEmail = () => {
    const isValid = emailRegex.test(reportData.email)
    setValidEmail(isValid)
    return isValid
  }

  const sendReport = async e => {
    e.preventDefault()

    setSubmitHasBeenClicked(true)
    handleError()
    const errors = Object.values(hasError).filter(x => x !== false)
    const validEmail = validateEmail()

    if ((!errors.includes('') && errors.length >= 1) || !validEmail) {
      return
    }

    setIsLoading(true)
    const data = {
      request: {
        requester: { name: reportData.name, email: reportData.email },
        subject: reportData.subject,
        comment: { body: reportData.comment },
        custom_fields: [
          { id: 360016456719, value: reportData.language }, // html/js, react, angular
          { id: 360016469620, value: reportData.category }, // component/guidelines
          { id: 360016469640, value: reportData.typOfRequest }, //new request/report issue
          { id: 360016469660, value: componentUri },
          { id: 360016456899, value: guidelineUri },
          { id: 360016469680, value: fullUrl },
        ],
      },
    }
    status = await sendRequest(data, files)
    if (status) {
      if (isNewRequest) {
        setNewRequestInfo({
          status,
          displayConfirmModal: true,
        })
      } else {
        setOpenModal(false)
        setDisplayConfirmModal(true)
        setStatus(status)
      }
      setIsLoading(false)
    }
  }

  const deleteFile = index => {
    const tempFiles = [...files]
    const filesToKeep = tempFiles.filter((x, i) => {
      if (i !== index) {
        return x
      }
    })
    setFiles(filesToKeep)
  }

  const shortFilename = (name, offset) => {
    const names = name.split('.')
    const shorted = names[0].substr(0, offset) + '[...]'
    return shorted + '.' + names[1]
  }

  const renderFileNames = () => {
    const offset = isNewRequest ? 30 : 10

    let names = []
    files.map((file, index) => {
      const toBig = file.size > maxFileSize
      let displayName = file.name
      if (displayName.length > offset) {
        displayName = shortFilename(displayName, offset)
      }
      return names.push(
        <li key={name + '-' + index}>
          <span className={`${toBig && styles.errorText}`}>{displayName}</span>
          <img src={close} onClick={() => deleteFile(index)} alt='close btn' />
        </li>
      )
    })
    return <ul className={styles.fileNameList}>{names}</ul>
  }

  const displayError = () => {
    if (files) {
      const filesToBig = files.filter(file => file.size > maxFileSize)

      if (filesToBig.length >= 1) {
        errorMessage = 'File(s) to big'
      }
      if (files.length > 5) {
        errorMessage = 'Maximum 5 files are allowed'
      }
      if (filesToBig.length >= 1 && files.length > 5) {
        errorMessage = 'Maximum 5 files are allowed, File(s) to big'
      }
      return <span className={styles.errorText}>{errorMessage}</span>
    }
  }

  useEffect(() => {
    if (errorMessage.length > 5) {
      setDisableSubmit(true)
    } else {
      setDisableSubmit(false)
    }
  }, [displayError])

  const modalContentProps = {
    validEmail,
    isLoading,
    selectedChild,
    reportData,
    hasError,
    handleInputData,
    Spinner,
    disableSubmit,
    displayError,
    files,
    handleFiles,
    renderFileNames,
    sendReport,
    setOpenModal,
  }

  if (isNewRequest) {
    return (
      <Fragment>
        {newRequestInfo.displayConfirmModal && (
          <ConfirmModal
            setDisplayConfirmModal={setNewRequestInfo}
            status={newRequestInfo.status}
            clearInput={clearInputs}
          />
        )}
        <NewZendeskRequest {...modalContentProps} />
      </Fragment>
    )
  } else {
    return <ModalContent {...modalContentProps} />
  }
}

export default Zendesk
