import React, { useRef, useEffect } from 'react'
import styles from '../styles.scss'
import { useDetectOutsideClick } from '../../../helpers/hooks/custom-hooks'

const ModalContent = ({
  validEmail,
  isLoading,
  selectedChild,
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
  setOpenModal,
}) => {
  const ref = useRef(null)
  const isClickedOutside = useDetectOutsideClick(ref)

  useEffect(() => {
    if (isClickedOutside) {
      setOpenModal(false)
    }
  }, [isClickedOutside])

  return (
    <div className={styles.modalContainer} ref={ref}>
      {isLoading && <div className={styles.overlay} />}
      <div className={styles.modalContent}>
        {isLoading && (
          <div className={styles.spinner}>
            <img src={spinner} alt='' />
          </div>
        )}

        <form>
          <h3>Report issue – {selectedChild.name}</h3>
          <div className={styles.inputFieldsContainer}>
            <div className={styles.leftColumn}>
              <div className='vf-input-container'>
                <input
                  type='text'
                  id='vf_standard_input'
                  className={`vf-input ${
                    hasError.subject
                      ? 'vf-input--error'
                      : 'vf-input--css-placeholder'
                  }`}
                  placeholder='Subject'
                  required={true}
                  value={reportData.subject}
                  name='subject'
                  onChange={e => handleInputData(e)}
                />
                <label htmlFor='vf_standard_input'>{`${
                  hasError.subject ? 'Subject is required ' : 'Subject'
                }`}</label>
              </div>

              <div className='vf-input-container'>
                <input
                  type='text'
                  id='vf_standard_input'
                  className={`vf-input ${
                    hasError.name
                      ? 'vf-input--error'
                      : 'vf-input--css-placeholder'
                  }`}
                  placeholder='Name'
                  value={reportData.name}
                  name='name'
                  onChange={e => handleInputData(e)}
                />
                <label htmlFor='vf_standard_input'>{`${
                  hasError.name ? 'Name is required ' : 'Name'
                }`}</label>
              </div>

              <div className='vf-input-container'>
                <input
                  type='email'
                  id='vf_standard_input_email'
                  className={`vf-input ${
                    hasError.email || !validEmail
                      ? 'vf-input--error'
                      : 'vf-input--css-placeholder'
                  }`}
                  placeholder={'Email'}
                  value={reportData.email}
                  name='email'
                  onChange={e => handleInputData(e)}
                />
                <label htmlFor='vf_standard_input_email'>{`${
                  hasError.email || !validEmail ? 'Email is required ' : 'Email'
                }`}</label>
              </div>
            </div>

            <div className='vf-input-container'>
              <textarea
                id='vf_textarea_input'
                value={reportData.comment}
                name='comment'
                placeholder={'Comment'}
                onChange={e => handleInputData(e)}
                className={`vf-input ${
                  hasError.comment
                    ? 'vf-input--error'
                    : 'vf-input--css-placeholder'
                }`}
              />
              <label htmlFor='vf_standard_input'>{`${
                hasError.comment ? 'Comment is required ' : 'Comment'
              }`}</label>
            </div>
          </div>

          <div
            className={styles.fileUploadContentContainer}
            style={disableSubmit ? { borderColor: '#F93B18' } : {}}
          >
            <span>Upload files (maximum of five).</span>
            <span>Up to 50 Mb each</span>
            {displayError()}

            <label
              htmlFor='file-upload-button'
              className='vf-btn vf-btn--sm vf-btn--outline-secondary'
            >
              Attach file(s)...
            </label>
            <input
              type='file'
              id='file-upload-button'
              name='attachment'
              multiple
              onChange={e => handleFiles(e)}
            />
            {files && renderFileNames()}
          </div>

          <div className={styles.buttonRow}>
            <button
              onClick={() => setOpenModal(false)}
              type='button'
              className={`vf-btn  vf-btn--outline-dark ${styles.border}`}
            >
              Cancel
            </button>

            <button
              onClick={sendReport}
              disabled={disableSubmit}
              type='button'
              className='vf-btn vf-btn--md vf-btn--primary'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalContent
