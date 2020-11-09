import React from 'react';
import styles from "../styles.scss";
import SupportItem from "./supportItem";

const ParentModal = ({ parent, closeModal, updateParentData,saveNewMetadata }) => {
  const { guidelineUri, description, sketchUrl, figmaUrl, adobeXDUrl, uri } = parent
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <form style={{marginBottom: "30px"}}>
          <div className={styles.textInformation} style={{width : "500px"}}>
            <label> Component name</label>
            <span>{parent.name}</span>

            <label>Description</label>
            <textarea rows={5}
                      value={description}
                      name="description"
                      onChange={(e) => updateParentData(e)}
            />

            <label>URI</label>
            <input
              disabled={true}
              defaultValue={uri}

            />
            <label>Guideline URI</label>
            <input
              name={"guidelineUri"}
              value={!guidelineUri ? "" : guidelineUri}
              onChange={(e) => updateParentData(e)}
            />
            <label>Sketch url</label>
            <input
              name={"sketchUrl"}
              value={!sketchUrl ? "" : sketchUrl}
              onChange={(e) => updateParentData(e)}
            />
            <label>Figma url</label>
            <input
              name={"figmaUrl"}
              value={!figmaUrl ? "" : figmaUrl}
              onChange={(e) => updateParentData(e)}
            />
            <label>Adobe XD url</label>
            <input
              name={"adobeXDUrl"}
              value={!adobeXDUrl ? "" : adobeXDUrl}
              onChange={(e) => updateParentData(e)}
            />
          </div>

        </form>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={() => closeModal()} type="button"
                className={`vf-btn  vf-btn--outline-dark ${styles.border}`}>Cancel
        </button>

        <button onClick={() => saveNewMetadata()} type="button"
                className="vf-btn vf-btn--md vf-btn--primary">Save
        </button>

      </div>
    </div>
  );
};

export default ParentModal;
