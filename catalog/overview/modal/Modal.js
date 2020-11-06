import React from 'react';
import styles from "../styles.scss";
import SupportItem from "./supportItem";

const Modal = ({ child, setDisplayModal, saveNewMetadata, updateChildData }) => {

  return (
    <div className={styles.modalContainer}>


      <div className={styles.modalContent}>


        <form>
          <div className={styles.textInformation}>
            <label> Component name</label>
            <span>{child.name}</span>

            <label>Description</label>
            <textarea rows={5}
                      value={child.description}
                      name="description"
                      onChange={(e) => updateChildData(e)} />


            <label> Sketch url</label>
            <input
              onChange={(e) => updateChildData(e)}
              value={child.sketchUrl}
              name="sketchUrl" />

            <label> Figma url</label>
            <input
              onChange={(e) => updateChildData(e)}
              value={child.figmaUrl}
              name="figmaUrl" />
            <label> AdobeXD url</label>
            <input
              onChange={(e) => updateChildData(e)}
              value={child.adobeXDUrl}
              name="adobeXDUrl" />
            <label> Guideline URI</label>
            <input
              defaultValue={child.guidelineUri}
              disabled={true}
            />
            <label>URI</label>
            <input
              disabled={true}
              defaultValue={child.uri}
            />

          </div>


          <SupportItem
            updateChildData={updateChildData}
            language="html"
          />
          <SupportItem
            updateChildData={updateChildData}
            language="angular"
            regionSupportCode="NL"
          />
          <SupportItem
            updateChildData={updateChildData}
            language="react"
            regionSupportCode="SV"
          />


        </form>

      </div>

      <div className={styles.buttonContainer}>
        <button onClick={() => setDisplayModal(false)} type="button"
                className={`vf-btn  vf-btn--outline-dark ${styles.border}`}>Cancel
        </button>

        <button onClick={() => saveNewMetadata()} type="button"
                className="vf-btn vf-btn--md vf-btn--primary">Save
        </button>


      </div>


    </div>
  )
    ;
};

export default Modal;
