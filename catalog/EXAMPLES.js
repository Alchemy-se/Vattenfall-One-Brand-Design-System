import React from "react";
import './Examples.css'

const Examples = () => (
  <div className="examples">
    <p style={{ fontSize: '16px', width: '50%', lineHeight: '32px' }}>
      Here are a few examples of designs you can create with the Digital Design system.
    </p>

    <h2 className="examples__header">Corporate website</h2>
    <div className="vf-row">
      <div className="vf-col">
        <h4 className="examples__image-header">Homepage</h4>
        <a href="./img/use-cases/Web/Homepage-Desktop.jpg">
          <img className="examples__image" src="./img/use-cases/Web/Homepage-Desktop.jpg" />
        </a>
        <p style={{marginTop: "20px" }}>
          <a href="/start.html" target="_blank" rel="noopener">See the coded page</a>
        </p>
        <p>
          <a href="https://share.goabstract.com/6f85c042-9b71-4bcd-96a5-9c27a2b2a581" target="_blank" rel="noopener">
            Go to Abstract
          </a>
        </p>
      </div>

      <div className="vf-col">
        <h4 className="examples__image-header">Article</h4>
        <a href="./img/use-cases/Web/Article-Desktop.jpg">
          <img className="examples__image" src="./img/use-cases/Web/Article-Desktop.jpg" />
        </a>
        <p style={{marginTop: "20px"}}>
          <a href="./article.html" target="_blank" rel="noopener">See the coded page</a>
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
        <h4 className="examples__image-header">Secondary page</h4>
        <a href="./img/use-cases/Web/Investors-Desktop.jpg">
          <img className="examples__image" src="./img/use-cases/Web/Investors-Desktop.jpg" />
        </a>
        <p style={{marginTop: "20px"}}>
          <a href="./investors.html" target="_blank" rel="noopener">
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



    <h2 className="examples__header">Service website</h2>  
    <div className="vf-row">
      <div className="vf-col">
        <h4 className="examples__image-header">Log in</h4>
        <a href="./img/use-cases/Service/Login.jpg">
          <img className="examples__image" src="./img/use-cases/Service/Login.jpg" />
        </a>
      </div>

      <div className="vf-col">
        <h4 className="examples__image-header">Dashboard</h4>
        <a href="./img/use-cases/Service/Home.jpg">
          <img className="examples__image" src="./img/use-cases/Service/Home.jpg" />
        </a>
      </div>
    </div>

    <div className="vf-row">
      <div className="vf-col">
        <h4 className="examples__image-header">Comparison</h4>
        <a href="./img/use-cases/Service/Compare.jpg">
          <img className="examples__image" src="./img/use-cases/Service/Compare.jpg" />
        </a>
      </div>

      <div className="vf-col">
        <h4 className="examples__image-header">Dashboard</h4>
        <a href="./img/use-cases/Service/Invoices.jpg">
          <img className="examples__image" src="./img/use-cases/Service/Invoices.jpg" />
        </a>
      </div>
    </div>


    <h2 className="examples__header">iOS App</h2> 
    <div className="vf-row">
      <div className="vf-col">
        <h4 className="examples__image-header">Log In</h4>
        <a href="./img/use-cases/App/Login.jpg">
          <img className="examples__ios-image" src="./img/use-cases/App/Login.jpg" />
        </a>
      </div>

      <div className="vf-col">
        <h4 className="examples__image-header">Homescreen</h4>
        <a href="./img/use-cases/App/Home.jpg">
          <img className="examples__ios-image" src="./img/use-cases/App/Home.jpg" />
        </a>          
      </div>

      <div className="vf-col">
        <h4 className="examples__image-header">Overview</h4>
        <a href="./img/use-cases/App/Tarif.jpg">
          <img className="examples__ios-image" src="./img/use-cases/App/Tarif.jpg" />
        </a>
      </div>

      <div className="vf-col">
        <h4 className="examples__image-header">Consumption</h4>
        <a href="./img/use-cases/App/ZählerstandAblesen.jpg">
          <img className="examples__ios-image" src="./img/use-cases/App/ZählerstandAblesen.jpg" />
        </a>
      </div>

      <div className="vf-col">
        <h4 className="examples__image-header">Products</h4>
        <a href="./img/use-cases/App/Details.jpg">
          <img className="examples__ios-image" src="./img/use-cases/App/Details.jpg" />
        </a>
      </div>
    </div>
  </div>
)

export default Examples;
