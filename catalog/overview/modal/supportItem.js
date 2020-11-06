import React, { Fragment } from 'react';
import styles from "../styles.scss";


// TODO Måndag
// Bygg ihop unika idn som ska sitta som name på radioboxar plus id för htmlFor
// fyll i datan i alla checkboxes, dropdowns som finns sen tidgare
// styla lite snyggare :)


const SupportItem = ({ updateChildData, language, regionSupportCode = false }) => {
  let header = language === "html" ? "Html/Js" : language
  let region = "Sverige";
  if (regionSupportCode === 'NL') {
    region = "Nederländerna"
  }
  return (
    <div className={styles.supportInformation}>
      <div className={styles.supportItem}>
        <strong>Support for: </strong>
        <label>{header} </label>
        Exists:
        <div className={styles.radioButtonsContainer}>
          <div className={styles.radioButtons}>
            <div className={styles.group}>
              <input type="radio" language="html"
                     name="exists" value="true"
                     onChange={(e) => updateChildData(e)}
              />
              <label htmlFor="exists-true">True</label>
            </div>
            <div className={styles.group}>
              <input type="radio" language="html"
                     name="exists" value="false"
                     onChange={(e) => updateChildData(e)}
              />
              <label htmlFor="exists-false">False</label></div>
          </div>
        </div>
        Global use:
        <div className={styles.radioButtonsContainer}>
          <div className={styles.radioButtons}>
            <div className={styles.group}>
              <input id="globalUse-true" language={language} type="radio" name={"globalUse" + language}
                     value="true"
                     onChange={(e) => updateChildData(e)} />
              <label htmlFor="globalUse-true">True</label></div>

            <div className={styles.group}>
              <input id="globalUse-false" language={language} type="radio"
                     name={"globalUse" + language}
                     value="false"
                     onChange={(e) => updateChildData(e)} />
              <label htmlFor="globalUse-false">False</label></div>
          </div>

          <div>
            <span>Status:</span>
            <select id="global-support" language={language} name="status" onChange={(e) => updateChildData(e)}>
              <option value="-1">Unknown</option>
              <option value="0">Can be used</option>
              <option value="1">In review</option>
              <option value="2">Can be used but update soon available</option>
              <option value="3">Awaiting review</option>
              <option value="4">Can only be used if...</option>
            </select>
          </div>
        </div>
      </div>
      {regionSupportCode && (
        <Fragment>
          Region support:
          <label>{region}</label>

          <select id="region-support" supportforregion={regionSupportCode} language={language} name="support"
                  onChange={(e) => updateChildData(e)}>
            <option value="noUse">Not in use</option>
            <option value="-1">Unknown</option>
            <option value="0">Can be used</option>
            <option value="1">In review</option>
            <option value="2">Can be used but update soon available</option>
            <option value="3">Awaiting review</option>
            <option value="4">Can only be used if...</option>
          </select>
        </Fragment>
      )}


    </div>
  );
};

export default SupportItem;
