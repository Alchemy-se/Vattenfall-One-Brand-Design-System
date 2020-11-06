import React, { Context, useContext, useEffect, useRef, useState } from 'react';
import axios from "axios";
import styles from './styles.scss'
import OverviewItem from "./overviewItem";
import { login, logout } from "../../helpers/apiCalls/authentication";
import authContext from "../../helpers/authContext";
import { fetchAllMetadata, fetchAmount, updateChild } from "../../helpers/apiCalls/metadataCalls";
import Modal from "./modal/Modal";

const ComponentOverview = () => {
  const { setAuthenticated, authenticated } = useContext(authContext);
  const figmaLogo = require('../../assets/icons/figma-logo.png').default;
  const sketchLogo = require('../../assets/icons/sketch-logo.png').default;
  const psXDLogo = require('../../assets/icons/photshop-xd-logo.jpg').default;

  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")
  const [metadata, setMetadata] = useState()
  const [displayModal, setDisplayModal] = useState(false)
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

  const [selectedChild, setSelectedChild] = useState();
  const [selectedParentID, setSelectedParentID] = useState();
  const [sup, setSup] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const metadata = await fetchAllMetadata()
      setMetadata(metadata)
      const amount = await fetchAmount();
      setAmount(amount)
    };


    fetchData()
  }, [])

  useEffect(() => {
    if (selectedChild) {
      setDisplayModal(true)
    }
  }, [selectedChild])

  const saveNewMetadata = async () => {

    console.log("ändrat state!!", selectedChild);
    console.log('SUP!!: ', sup)
    //TODO TA BORT RETURN
    return

    // Find the parent by id in all of the metadata
    const parent = metadata.filter(x => x.id === selectedParentID)[0]

    // replace current child with  updatedChild
    parent.metadata.children.forEach((item) => {
      if (item.name === selectedChild.name) {
        Object.assign(item, selectedChild)
      }
    })

    // make a put request to strapi to save updated child
    await updateChild(parent)
    setDisplayModal(false)

  };

  let support = []
  let supportObj = {}
  const updateChildData = (e) => {


    const type = e.target.type;
    let value = e.target.value;
    const name = e.target.name;

    let language = e.target.getAttribute('language')


    if (type === "radio" || (type === 'select-one' && value !== 'noUse')) {
      value = JSON.parse(value)
    }


    if (type === 'select-one') {

      let selectListId = e.target.id
      let supportForRegion = e.target.getAttribute('supportforregion')

      if (selectListId === "region-support") {

        if (value !== 'noUse') {
          supportObj = {
            region: supportForRegion,
            status: parseInt(value)
          }
          support.push(supportObj)


        } else {
          support = support.filter((s) => s.region !== supportForRegion)
        }
        value = support
      }
    }


    setSelectedChild((prevState) => {


      console.log("In setter [Name]", name);
      console.log("In setter value", value);
      console.log("In setter language", language);


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


    console.log('selectedChild: ', selectedChild)

    /*  setSelectedChild((prevState) => ({
      ...prevState,
      [name]: value,
      [language]: {
        ...prevState[language],
        [name]: value
      }
    }));*/


    /*if (type === "radio") {

      if (value === 'true' || value === 'false') {
        value = JSON.parse(value)
      }

      const language = e.target.language;





      setSelectedChild((prevState) => ({
        ...prevState,
        [language]: {
          ...prevState[language],
          [name]: value
        }
      }));

    }*/

    /*setSelectedChild((prevState) => ({
      ...prevState,
      [name]: value,
      html: {
        ...prevState,
        [key]: "lol"
      }
    }));*/
    /* child: {
     ...prevState.child,
         [name]: value
     }*/

    /*setSelectedChild((prevState) => ({
      ...prevState,
      [name]: value,
      html: {
        exists: "lol"
      }
    }));*/


  }

  const renderModal = () => {


    return (
      <Modal
        child={selectedChild}
        setDisplayModal={setDisplayModal}
        saveNewMetadata={saveNewMetadata}
        updateChildData={updateChildData}
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
          />
        )
      })
    }
  }


  const submitLogin = async (e) => {
    e.preventDefault();
    const loggedIn = await login(identifier, password)
    setAuthenticated(loggedIn)
  }

  const submitLogout = async (e) => {
    e.preventDefault();
    const loggedIn = await logout()
    setAuthenticated(loggedIn)
  };


  const renderFields = () => {
    if (authenticated) {
      return (<form>
        <button onClick={submitLogout}>logga ut</button>
      </form>)
    }
    return (
      <form>
        <input type="text"
               id="username"
               placeholder="Enter username"
               value={identifier}
               onChange={(e) => setIdentifier(e.target.value)}
        />
        <input
          type="text" //TODO ändra till password
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />


        <button onClick={submitLogin} type="submit">Login
        </button>
      </form>
    )
  }

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
              <div className={styles.legendText}>Can only be used if…</div>
            </div>
          </div>


          <div>
            <div className={styles.circleContainer}>
              <div className={styles.awaitingReview} />
              <div className={styles.legendText}>Awaiting review</div>
            </div>

            <div className={styles.circleContainer}>
              <div className={styles.canBeUsed} />
              <div className={styles.legendText}>Can be used</div>
            </div>

          </div>


          <div>
            <div className={styles.circleContainer}>
              <div className={styles.inReview} />
              <div className={styles.legendText}>In review</div>
            </div>

            <div className={styles.circleContainer}>
              <div className={styles.canBeUsedSoon} />
              <div className={styles.legendText}>Can be used but update soon available</div>
            </div>

          </div>

        </div>

        <div className={styles.loginContainer}>
          {renderFields()}

        </div>
      </div>

      {displayModal && renderModal()}

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

