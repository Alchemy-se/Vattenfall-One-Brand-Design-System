import React from "react";
import styles from './Examples.css'
import PageHeader from "./lib/pageHeader";

const Examples = ({openModal}) => (
  <React.Fragment>
    <PageHeader title={"Examples"}/>
    <div className={styles.examples}>
      <p style={{ fontSize: '16px', width: '50%', lineHeight: '32px' }}>
        Here are a few examples of designs you can create with the Digital Design system.
      </p>

      <h2 className={styles.examples__header}>Corporate website</h2>
      <div className="vf-row">
        <div className="vf-col">
          <h4 className={styles.examples__image_header}>Homepage</h4>
          <img className={styles.examples__image} src="./img/use-cases/Web/Homepage-Desktop.jpg" onClick={() => {
            openModal(true, "./img/use-cases/Web/Homepage-Desktop.jpg")
          }}/>
          <p style={{marginTop: "20px" }}>
            <a href="/static/start.html" target="_blank" rel="noopener">See the coded page</a>
          </p>
          <p>
            <a href="https://share.goabstract.com/6f85c042-9b71-4bcd-96a5-9c27a2b2a581" target="_blank" rel="noopener">
              Go to Abstract
            </a>
          </p>
        </div>

        <div className="vf-col">
          <h4 className={styles.examples__image_header}>Article</h4>
          <img className={styles.examples__image} src="./img/use-cases/Web/Article-Desktop.jpg" onClick={() => {
            openModal(true, "./img/use-cases/Web/Article-Desktop.jpg")
          }}/>
          <p style={{marginTop: "20px"}}>
            <a href="/static/article.html" target="_blank" rel="noopener">See the coded page</a>
          </p>
          <p>
            <a href="https://share.goabstract.com/cb9164a3-976c-474d-a351-72906a7f4c13" target="_blank" rel="noopener">
              Go to Abstract
            </a>
          </p>
        </div>
      </div>

      <div className="vf-row">
        <div className="vf-col">
          <h4 className={styles.examples__image_header}>Secondary page</h4>
          <img className={styles.examples__image} src="./img/use-cases/Web/Investors-Desktop.jpg" onClick={() => {
            openModal(true, "./img/use-cases/Web/Investors-Desktop.jpg")
          }}/>
          <p style={{marginTop: "20px"}}>
            <a href="/static/investors.html" target="_blank" rel="noopener">
              See the coded page
            </a>
          </p>
          <p>
            <a href="https://share.goabstract.com/f4fa75b4-6b07-46ca-a84b-2a0fe44d8e50" target="_blank" rel="noopener">
              Go to Abstract
            </a>
          </p>
        </div>
      </div>



      <h2 className={styles.examples__header}>Service website</h2>
      <div className="vf-row">
        <div className="vf-col">
          <h4 className={styles.examples__image_header}>Log in</h4>
          <img className={styles.examples__image} src="./img/use-cases/Service/Login.jpg" onClick={() => {
            openModal(true, "./img/use-cases/Service/Login.jpg")
          }}/>
        </div>

        <div className="vf-col">
          <h4 className={styles.examples__image_header}>Dashboard</h4>
          <img className={styles.examples__image} src="./img/use-cases/Service/Home.jpg" onClick={() => {
            openModal(true, "./img/use-cases/Service/Home.jpg")
          }}/>
        </div>
      </div>

      <div className="vf-row">
        <div className="vf-col">
          <h4 className={styles.examples__image_header}>Comparison</h4>
          <img className={styles.examples__image} src="./img/use-cases/Service/Compare.jpg" onClick={() => {
            openModal(true, "./img/use-cases/Service/Compare.jpg")
          }}/>
        </div>

        <div className="vf-col">
          <h4 className={styles.examples__image_header}>Dashboard</h4>
          <img className={styles.examples__image} src="./img/use-cases/Service/Invoices.jpg" onClick={() => {
            openModal(true, "./img/use-cases/Service/Invoices.jpg")
          }}/>
        </div>
      </div>


      <h2 className={styles.examples__header}>iOS App</h2>
      <div className="vf-row">
        <div className="vf-col">
          <h4 className={styles.examples__image_header}>Log In</h4>
          <img className={styles.examples__ios_image} src="./img/use-cases/App/Login.jpg" onClick={() => {
            openModal(true, "./img/use-cases/App/Login.jpg")
          }}/>
        </div>

        <div className="vf-col">
          <h4 className={styles.examples__image_header}>Homescreen</h4>
          <img className={styles.examples__ios_image} src="./img/use-cases/App/Home.jpg" onClick={() => {
            openModal(true, "./img/use-cases/App/Home.jpg")
          }}/>
        </div>

        <div className="vf-col">
          <h4 className={styles.examples__image_header}>Overview</h4>
          <img className={styles.examples__ios_image} src="./img/use-cases/App/Tarif.jpg" onClick={() => {
            openModal(true, "./img/use-cases/App/Tarif.jpg")
          }}/>
        </div>

        <div className="vf-col">
          <h4 className={styles.examples__image_header}>Consumption</h4>
          <img className={styles.examples__ios_image} src="./img/use-cases/App/ZahlerstandAblesen.jpg" onClick={() => {
            openModal(true, "./img/use-cases/App/ZahlerstandAblesen.jpg")
          }}/>
        </div>

        <div className="vf-col">
          <h4 className={styles.examples__image_header}>Products</h4>
          <img className={styles.examples__ios_image} src="./img/use-cases/App/Details.jpg" onClick={() => {
            openModal(true, "./img/use-cases/App/Details.jpg")
          }}/>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Examples;
