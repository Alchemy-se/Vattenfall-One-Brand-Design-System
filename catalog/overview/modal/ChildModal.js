import React from 'react';
import styles from "../styles.scss";
import SupportItem from "./supportItem";

const ChildModal = ({ child, closeModal, saveNewMetadata, updateChildData }) => {
  return (
    <div style={{transform:'translate(-38%, -50%)'}} className={styles.modalContainer}>

      <div className={styles.modalContent}>


        <form>
          <div className={styles.column}>
            <div className={styles.textInformation}>
              <label> Component name</label>
              <span>{child.name}</span>

              <label style={{ fontWeight: "normal" }}>Description</label>
              <textarea rows={5}
                        value={child.description ? child.description : ""}
                        name="description"

                        onChange={(e) => updateChildData(e)} />

              <div className={styles.radioButtonsContainer}>
                <label> Sketch url</label>
                <div className={styles.radioButtons}>
                  <div className={styles.group}>
                    <input
                      type="radio"
                      value="true"
                      id={"sketchUrl-true"}
                      name={"sketchUrl"}
                      onChange={(e) => updateChildData(e)}
                      checked={child.sketchUrl === true}
                    />

                    <label htmlFor={"sketchUrl-true"}>Yes</label>
                  </div>

                  <div className={styles.group}>
                    <input
                      type="radio"
                      value="false"
                      id={"sketchUrl-false"}
                      name={"sketchUrl"}
                      onChange={(e) => updateChildData(e)}
                      checked={child.sketchUrl === false}
                    />
                    <label htmlFor={"sketchUrl-false"}>No</label>
                  </div>
                </div>
              </div>


              <div className={styles.radioButtonsContainer}>
                <label> Figma url</label>
                <div className={styles.radioButtons}>
                  <div className={styles.group}>
                    <input
                      type="radio"
                      value="true"
                      id={"figmaUrl-true"}
                      name={"figmaUrl"}
                      onChange={(e) => updateChildData(e)}
                      checked={child.figmaUrl === true}
                    />

                    <label htmlFor={"figmaUrl-true"}>Yes</label>
                  </div>

                  <div className={styles.group}>
                    <input
                      type="radio"
                      value="false"
                      id={"figmaUrl-false"}
                      name={"figmaUrl"}
                      onChange={(e) => updateChildData(e)}
                      checked={child.figmaUrl === false}
                    />
                    <label htmlFor={"figmaUrl-false"}>No</label>
                  </div>
                </div>
              </div>

              <div className={styles.radioButtonsContainer}>
                <label> Adobe XD url</label>
                <div className={styles.radioButtons}>
                  <div className={styles.group}>
                    <input
                      type="radio"
                      value="true"
                      id={"adobeXDUrl-true"}
                      name={"adobeXDUrl"}
                      onChange={(e) => updateChildData(e)}
                      checked={child.adobeXDUrl === true}
                    />

                    <label htmlFor={"adobeXDUrl-true"}>Yes</label>
                  </div>

                  <div className={styles.group}>
                    <input
                      type="radio"
                      value="false"
                      id={"adobeXDUrl-false"}
                      name={"adobeXDUrl"}
                      onChange={(e) => updateChildData(e)}
                      checked={child.adobeXDUrl === false}
                    />
                    <label htmlFor={"adobeXDUrl-false"}>No</label>
                  </div>
                </div>
              </div>

              <label style={{ fontWeight: "normal" }}> Guideline URI</label>
              <input
                value={!child.guidelineUri ? "" : child.guidelineUri}
                name="guidelineUri"
                onChange={(e) => updateChildData(e)} />


              <label style={{ fontWeight: "normal" }}>URI</label>
              <input
                style={{marginBottom:0}}
                disabled={true}
                defaultValue={child.uri}
              />
            </div>

            <div className={styles.divider} />
          </div>
          <div className={styles.column}>

            <SupportItem
              updateChildData={updateChildData}
              language="html"
              child={child.html}
            />
            <div className={styles.divider} />

            <SupportItem
              updateChildData={updateChildData}
              language="angular"
              regionSupportCode="NL"
              child={child.angular}
            />
          </div>


          <div className={styles.column}>
            <div>
              <SupportItem
                updateChildData={updateChildData}
                language="react"
                regionSupportCode="SV"
                child={child.react}
              />
              <div className={styles.divider} />
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={() => closeModal()} type="button"
                      className={`vf-btn vf-btn--lg vf-btn--outline-dark ${styles.border}`}>Cancel
              </button>

              <button onClick={() => saveNewMetadata('child')} type="button"
                      className="vf-btn vf-btn--lg vf-btn--primary">Save
              </button>
            </div>
          </div>

        </form>

      </div>


    </div>
  )
    ;
};

export default ChildModal;
