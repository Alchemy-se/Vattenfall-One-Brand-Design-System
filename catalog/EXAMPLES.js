import React from "react";
import './Examples.css'

const Examples = () => (
  <div className="examples">
      <p style={{ fontSize: '16px', 
                  width: '50%', 
                  lineHeight: '32px'
                }}>
      Here are a few examples of designs you can create with the Digital Design system.
      </p>

      <h2 className="examplesHeader">Corporate website</h2>
        <div className="vf-row">
          <div className="vf-col">
            <h4 className="imageHeader">Homepage</h4>
              <div className="vf-col">
              <a href="./img/use-cases/Web/Homepage-Desktop.jpg">
                <figure>
                   <img className="examplesImage" src="./img/use-cases/Web/Homepage-Desktop.jpg"></img>
                    <figcaption style={{ color: '#888888', marginTop: '20px'}}>Desktop</figcaption>
                </figure>
              </a>
              </div>
          </div>
          <div className="vf-col">
            <h4 className="imageHeader">Article</h4>
              <div className="vf-col">
              <a href="./img/use-cases/Web/Article-Desktop.jpg">
                <figure>
                  <img className="examplesImage" src="./img/use-cases/Web/Article-Desktop.jpg"></img>
                  <figcaption style={{ color: '#888888', marginTop: '20px'}}>Desktop</figcaption>  
                </figure>
              </a>
              </div> 
          </div>
        </div>
        <div className="vf-row">
          <div className="vf-col">
            <h4 className="imageHeader">Secondary page</h4>
              <div className="vf-col">
              <a href="./img/use-cases/Web/Investors-Desktop.jpg">
              <figure>
                <img className="examplesImage" src="./img/use-cases/Web/Investors-Desktop.jpg"></img>
                <figcaption style={{ color: '#888888', marginTop: '20px'}}>Desktop</figcaption>  
              </figure>
              </a>
              </div>
            </div>
        </div>

     <h2 className="examplesHeader">Service website</h2>  
      <div className="vf-row">
          <div className="vf-col">
            <h4 className="imageHeader">Log in</h4>
              <div className="vf-col">
              <a href="./img/use-cases/Service/Login.jpg">
                <img className="examplesImage" src="./img/use-cases/Service/Login.jpg"></img>
              </a>
             </div>
          </div>
          <div className="vf-col">
            <h4 className="imageHeader">Dashboard</h4>
              <div className="vf-col">
              <a href="./img/use-cases/Service/Home.jpg">
                <img className="examplesImage" src="./img/use-cases/Service/Home.jpg"></img>
              </a>
              </div>
          </div>
          </div>
          <div className="vf-row">
          <div className="vf-col">
            <h4 className="imageHeader">Comparison</h4>
            <div className="vf-col">
            <a href="./img/use-cases/Service/Compare.jpg">
              <img className="examplesImage" src="./img/use-cases/Service/Compare.jpg"></img>
            </a>
            </div>
          </div>
          <div className="vf-col">
            <h4 className="imageHeader">Dashboard</h4>
            <div className="vf-col">
            <a href="./img/use-cases/Service/Invoices.jpg">
              <img className="examplesImage" src="./img/use-cases/Service/Invoices.jpg"></img>
            </a>
            </div>
         </div>
      </div>
       
    
    <h2 className="examplesHeader">iOS App</h2> 
    <div className="vf-row">
          <div className="vf-col">
            <h4 className="imageHeader">Log In</h4>
            <a href="./img/use-cases/App/Login.jpg">
              <img className="iosImage" src="./img/use-cases/App/Login.jpg"></img>
            </a>
          </div>
          <div className="vf-col">
            <h4 className="imageHeader">Homescreen</h4>
            <a href="./img/use-cases/App/Home.jpg">
               <img className="iosImage" src="./img/use-cases/App/Home.jpg"></img>
            </a>          
            </div>
          <div className="vf-col">
            <h4 className="imageHeader">Overview</h4>
            <a href="./img/use-cases/App/Tarif.jpg">
              <img className="iosImage" src="./img/use-cases/App/Tarif.jpg"></img>
            </a>
          </div>
          <div className="vf-col">
            <h4 className="imageHeader">Consumption</h4>
            <a href="./img/use-cases/App/ZählerstandAblesen.jpg">
              <img className="iosImage" src="./img/use-cases/App/ZählerstandAblesen.jpg"></img>
            </a>
          </div>
          <div className="vf-col">
            <h4 className="imageHeader">Products</h4>
            <a href="./img/use-cases/App/Details.jpg">
              <img className="iosImage" src="./img/use-cases/App/Details.jpg"></img>
            </a>
          </div>
    </div>

  </div>
)

export default Examples;
