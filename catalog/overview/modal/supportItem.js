import React, { Fragment } from 'react';
import styles from "../styles.scss";


const SupportItem = ({ child, updateChildData, language, regionSupportCode = false }) => {
  const { exists, globalUse } = child;
  let header = language === "html" ? "Html/JS" : language
  let region = "Sweden";

  if (regionSupportCode === 'NL') {
    region = "Netherlands"
  }

  const setSelectValue = () => {
    return child.support.map((item) => {
      if (item.region === regionSupportCode) {
        return item.status
      }
    })[0]
  }

  return (
    <div className={styles.supportInformation}>
      <div className={styles.supportItem}>
        <label className={styles.headerTitle}>{header} </label>
        <div className={styles.radioButtonsContainer}>
          Exists:
          <div className={styles.radioButtons}>
            <div className={styles.group}>
              <input
                id={`exists-true-${language}`}
                type="radio"
                name={`exists-${language}`}
                value="true"
                onChange={(e) => updateChildData(e)}
                checked={exists === true}
              />
              <label htmlFor={`exists-true-${language}`}>Yes</label>
            </div>
            <div className={styles.group}>
              <input
                id={`exists-false-${language}`}
                type="radio"
                name={`exists-${language}`}
                value="false"
                onChange={(e) => updateChildData(e)}
                checked={exists === false}
              />
              <label htmlFor={`exists-false-${language}`}>No</label></div>
          </div>
        </div>
        <div className={styles.radioButtonsContainer}>
          Global use:
          <div className={styles.radioButtons}>
            <div className={styles.group}>
              <input
                id={`globalUse-true-${language}`}
                type="radio"
                name={`globalUse-${language}`}
                value="true"
                onChange={(e) => updateChildData(e)}
                checked={globalUse === true}
              />

              <label htmlFor={`globalUse-true-${language}`}>Yes</label></div>

            <div className={styles.group}>
              <input
                id={`globalUse-false-${language}`}
                type="radio"
                name={`globalUse-${language}`}
                value="false"
                onChange={(e) => updateChildData(e)}
                checked={globalUse === false}

              />
              <label htmlFor={`globalUse-false-${language}`}>No</label></div>
          </div>

          <div>
            <span> Status:</span>
            <select value={child.status} id="global-support" name={`status-${language}`}
                    onChange={(e) => updateChildData(e)}>
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
        <div className={styles.regionSupportContainer}>
          Region support:
          <label>{region}</label>

          <select value={setSelectValue()} id="region-support" supportforregion={regionSupportCode}
                  name={`support-${language}`}
                  onChange={(e) => updateChildData(e)}>
            <option value="-1">Unknown</option>
            <option value="0">Can be used</option>
            <option value="1">In review</option>
            <option value="2">Can be used but update soon available</option>
            <option value="3">Awaiting review</option>
            <option value="4">Can only be used if...</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default SupportItem;
