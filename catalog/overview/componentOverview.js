import React, { useEffect, useState } from 'react';
import styles from './styles.scss'
import OverviewItem from "./overviewItem";

import { fetchAllMetadata, fetchAmount, updateMetadata } from "../../helpers/apiCalls/metadataCalls";
import ChildModal from "./modal/ChildModal";

import ParentModal from "./modal/parentModal";

const ComponentOverview = () => {
  const figmaLogo = require('../../assets/icons/figma-logo.png').default;
  const sketchLogo = require('../../assets/icons/sketch-logo.png').default;
  const psXDLogo = require('../../assets/icons/photshop-xd-logo.jpg').default;

  const [selectedChild, setSelectedChild] = useState();
  const [selectedParentID, setSelectedParentID] = useState();
  const [selectedParent, setSelectedParent] = useState()
  const [metadata, setMetadata] = useState()
  const [displayModal, setDisplayModal] = useState(false)
  const [displayModalParent, setDisplayModalParent] = useState(false)
  const [amount, setAmount] = useState({
    "html": {
      "global": 0
    },
    "angular": {
      "global": 0,
      "NL": 0
    },
    "react": {
      "global": 0,
      "SV": 0
    },
    "design": {
      "figma": 0,
      "adobeXd": 0,
      "sketch": 0
    }
  })


  useEffect(() => {
    const fetchData = async () => {
      setMetadata(await fetchAllMetadata())
      setAmount(await fetchAmount())
    };
    fetchData()
  }, []);


  useEffect(() => {
    if (selectedChild) {
      setDisplayModal(true)
    }
  }, [selectedChild]);

  useEffect(() => {
    if (selectedParent) {
      setDisplayModalParent(true)
    }
  }, [selectedParent])

  const saveNewMetadata = async (type) => {
    let data;
    // Find the parent by id in all of the metadata
    data = metadata.filter(x => x.id === selectedParentID)[0]

    if (type === "child") {
      // replace current child with updatedChild.
      data.metadata.children.forEach((item) => {
        if (item.name === selectedChild.name) {
          // this will update state so we dont need to refetch the data to see the users changes
          Object.assign(item, selectedChild)
        }
      })
    } else {
      // same as above Object.assign.
      Object.assign(data.metadata, selectedParent)
    }

    // make a put request to strapi to save updated data
    const status = await updateMetadata(data)
    if (status === 200) {
      // refetch amount on success
      setAmount(await fetchAmount())
    }
    closeModal()
  };


  const updateChildData = (e) => {

    const type = e.target.type;
    let value = e.target.value;

    // NL, SV
    let supportForRegion = e.target.getAttribute('supportforregion')

    // split name of element eg. "exists-html" -> ["exists", "html"] for using when setting state
    let nameLanguages = e.target.name.split("-");
    let name = nameLanguages[0];
    let language = nameLanguages[1];

    // parse "true/false" -> true/false || "1" -> 1
    if (type === "radio" || type === 'select-one') {
      value = JSON.parse(value)
    }

    // select list for region specific status
    if (supportForRegion) {
      let support = []
      const supportObj = {
        region: supportForRegion,
        status: value
      };
      support.push(supportObj)
      value = support
    }

    setSelectedChild((prevState) => {
      // Update "first level" props in the state. Eg. description, URLS
      if (!language) {
        return ({
          ...prevState,
          [name]: value
        })
      } else {
        // Update nested states eg html or react props
        return ({
          ...prevState,
          [language]: {
            ...prevState[language],
            [name]: value
          }
        })
      }
    });
  };

  const updateParentData = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setSelectedParent((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  // close modal and clear states
  const closeModal = () => {
    setDisplayModal(false)
    setDisplayModalParent(false)
    setSelectedParentID(null)
    setSelectedChild(null)
    setSelectedParent(null)
  };

  const renderModal = () => {
    return (
      <ChildModal
        child={selectedChild}
        saveNewMetadata={saveNewMetadata}
        updateChildData={updateChildData}
        closeModal={closeModal}
      />
    )
  };

  const renderModalParent = () => {
    return (
      <ParentModal
        updateParentData={updateParentData}
        parent={selectedParent}
        saveNewMetadata={saveNewMetadata}
        closeModal={closeModal}

      />
    )
  }


  const renderOverview = () => {
    if (metadata) {
      return metadata.map(item => {
        return (
          <OverviewItem
            id={item.id}
            item={item.metadata}
            key={item.id}
            setSelectedParentID={setSelectedParentID}
            setSelectedChild={setSelectedChild}
            setSelectedParent={setSelectedParent}
          />
        )
      })
    }
  };

  return (
    <div className={styles.tableContainer}>

      <div className={styles.topContainer}>
        <div className={styles.legend}>

          <div>
            <div className={styles.circleContainer}>
              <div className={styles.unknown} />
              <div className={styles.legendText}>Unknown</div>
            </div>

            <div className={styles.circleContainer}>
              <div className={styles.canBeUsedIf} />
              <div className={styles.legendText}>
                <div className={styles.tooltip}> Conditional use
                  <span className={styles.tooltipText}>Can only be used if…</span>
                </div>
              </div>
            </div>
          </div>


          <div>
            <div className={styles.circleContainer}>
              <div className={styles.awaitingReview} />
              <div className={styles.legendText}>
                <div className={styles.tooltip}>Review pending
                  <span className={styles.tooltipText}>Awaiting review</span>
                </div>


              </div>
            </div>

            <div className={styles.circleContainer}>
              <div className={styles.canBeUsed} />
              <div className={styles.legendText}>
                <div className={styles.tooltip}>Allowed
                  <span className={styles.tooltipText}>Can be used</span>
                </div>

                </div>
            </div>

          </div>


          <div>
            <div className={styles.circleContainer}>
              <div className={styles.inReview} />
              <div className={styles.legendText}>In review</div>
            </div>

            <div className={styles.circleContainer}>
              <div className={styles.canBeUsedSoon} />
              <div className={styles.legendText}>
                <div className={styles.tooltip}>Allowed, update pending
                  <span className={styles.tooltipText}>Can be used but update soon available</span>
                </div>
                </div>
            </div>

          </div>

        </div>

      </div>

      {displayModal && renderModal()}
      {displayModalParent && renderModalParent()}

      <table>
        <thead>
        <tr className={styles.tableHeader}>
          <th colSpan="4" rowSpan="2">Components</th>
          <th colSpan="4" rowSpan="2">Guidelines</th>
          <th style={{ width: '100px' }}>Html/JS</th>
          <th colSpan="2">Angular</th>
          <th colSpan="2">React</th>
          <th rowSpan="2"><img src={sketchLogo} alt="" /></th>
          <th rowSpan="2"><img src={figmaLogo} alt="" /></th>
          <th rowSpan="2"><img src={psXDLogo} alt="" /></th>
          <th rowSpan="2">Read more</th>

        </tr>
        <tr>
          <th>Global</th>
          <th>Global</th>
          <th>NL</th>
          <th>Global</th>
          <th>SV</th>
        </tr>
        </thead>
        <tbody>

        {renderOverview()}

        </tbody>
        <tfoot>
        <tr>
          <td colSpan="8">Total components</td>
          <td>{amount.html.global}</td>
          <td>{amount.angular.global}</td>
          <td>{amount.angular.NL}</td>
          <td>{amount.react.global}</td>
          <td>{amount.react.SV}</td>
          <td>{amount.design.sketch}</td>
          <td>{amount.design.figma}</td>
          <td>{amount.design.adobeXd}</td>
        </tr>
        </tfoot>
      </table>

    </div>
  );
};

export default ComponentOverview;

