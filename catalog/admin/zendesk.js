import React, { useState } from 'react';
import styles from './styles.scss'
import { useLocation } from "react-router-dom";
import axios from "axios";
import { sendRequest, uploadAttachments } from "../../helpers/apiCalls/zendeskCalls";

const Zendesk = ({ data, setOpenModal }) => {
  console.log('data: ', data)
  const [reportData, setReportData] = useState({ name: "", email: "", subject: "", comment: "" })
  let location = useLocation();
  const regex = new RegExp("(?<=\\/)[a-z]+(?=\\/)")
  const type = regex.exec(location.pathname)[0]

  const language = "html/js"


  const handleInputData = (e) => {
    console.log('event.target.files: ', e.target.files)
    const name = e.target.name;
    const value = e.target.value
    setReportData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const formData = new FormData();

  const handleFiles = (e) => {
    formData.append(
      "files",
      e.target.files[0],
      e.target.files[0].name
    );
  }

 /* const uploadFile = async (e) => {
    e.preventDefault()
    await uploadAttachments(formData)
  }*/

  const sendReport = async (e) => {
    console.log("formdata", [...formData]);
    e.preventDefault()


    const data = {
      request: {
        requester: { name: reportData.name, email: reportData.email },
        subject: reportData.subject,
        comment: { body: reportData.comment  },
        custom_fields: [{ id: 360011116697, value: language }]
      }
    }
    await sendRequest(data, formData)

  }


  console.log('reportData: ', reportData)
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <form>

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            value={reportData.subject}
            name='subject'
            onChange={handleInputData}
          />
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            value={reportData.name}
            name='name'
            onChange={handleInputData}
          />
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            value={reportData.email}
            name='email'
            onChange={handleInputData}
          />
          <label htmlFor="comment">Message</label>
          <textarea value={reportData.comment}
                    name="comment" onChange={handleInputData}
                    rows="3" />

          <input type="file" name="attachment" multiple onChange={handleFiles} />


          <div className={styles.buttonRow}>
            <button onClick={()=> setOpenModal(false)} type="button"
                    className={`vf-btn  vf-btn--outline-dark ${styles.border}`}>Cancel
            </button>

            <button onClick={sendReport} type="button"
                    className="vf-btn vf-btn--md vf-btn--primary">Save
            </button>


          </div>
        </form>

      </div>


    </div>
  );


};

export default Zendesk;
