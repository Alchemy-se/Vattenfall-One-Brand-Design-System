import React from "react";

const Examples = () => (
  <div style={{ margin: '10px 20px 60px 40px' }}>
      <p style={{ fontSize: '16px', 
                  width: '50%', 
                  lineHeight: '32px'
                }}>
      Here are a few examples of designs you can create with the Digital Design system.
      </p>

      <h2 style={{marginTop: '40px'}}>Corporate website</h2>
        <div className="vf-row">
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Homepage</h4>
              <div className="vf-col">
              <a href="./img/use-cases/Web/Homepage-Desktop.jpg">
                <figure>
                   <img style={{width: '450px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} src="./img/use-cases/Web/Homepage-Desktop.jpg" onclick="window.open(this.src)"></img>
                    <figcaption style={{ color: '#888888', marginTop: '20px'}}>Desktop</figcaption>
                </figure>
              </a>
              </div>
          </div>
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Article</h4>
              <div className="vf-col">
              <a href="./img/use-cases/Web/Article-Desktop.jpg">
                <figure>
                  <img style={{width: '450px', clip: '20px  0px  250px 0 px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/Web/Article-Desktop.jpg"></img>
                  <figcaption style={{ color: '#888888', marginTop: '20px'}}>Desktop</figcaption>  
                </figure>
              </a>
              </div> 
          </div>
        </div>
        <div className="vf-row">
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Secondary page</h4>
              <div className="vf-col">
              <a href="./img/use-cases/Web/Investors-Desktop.jpg">
              <figure>
                <img style={{width: '450px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/Web/Investors-Desktop.jpg"></img>
                <figcaption style={{ color: '#888888', marginTop: '20px'}}>Desktop</figcaption>  
              </figure>
              </a>
              </div>
            </div>
        </div>

     <h2 style={{marginTop: '100px'}}>Service website</h2>  
      <div className="vf-row">
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Log in</h4>
              <div className="vf-col">
              <a href="./img/use-cases/Service/Login.jpg">
                <img style={{width: '400px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/Service/Login.jpg"></img>
              </a>
             </div>
          </div>
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Dashboard</h4>
              <div className="vf-col">
              <a href="./img/use-cases/Service/Home.jpg">
                <img style={{width: '400px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/Service/Home.jpg"></img>
              </a>
              </div>
          </div>
          </div>
          <div className="vf-row">
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Comparison</h4>
            <div className="vf-col">
            <a href="./img/use-cases/Service/Compare.jpg">
              <img style={{width: '400px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/Service/Compare.jpg"></img>
            </a>
            </div>
          </div>
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Dashboard</h4>
            <div className="vf-col">
            <a href="./img/use-cases/Service/Invoices.jpg">
              <img style={{width: '400px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/Service/Invoices.jpg"></img>
            </a>
            </div>
         </div>
      </div>
       
    
    <h2 style={{marginTop: '100px'}}>iOS App</h2> 
    <div className="vf-row">
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Log In</h4>
            <a href="./img/use-cases/App/Login.jpg">
              <img style={{width: '150px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/App/Login.jpg"></img>
            </a>
          </div>
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Homescreen</h4>
            <a href="./img/use-cases/App/Home.jpg">
               <img style={{width: '150px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/App/Home.jpg"></img>
            </a>          
            </div>
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Overview</h4>
            <a href="./img/use-cases/App/Tarif.jpg">
              <img style={{width: '150px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/App/Tarif.jpg"></img>
            </a>
          </div>
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Consumption</h4>
            <a href="./img/use-cases/App/ZählerstandAblesen.jpg">
              <img style={{width: '150px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/App/ZählerstandAblesen.jpg"></img>
            </a>
          </div>
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Products</h4>
            <a href="./img/use-cases/App/Details.jpg">
              <img style={{width: '150px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/App/Details.jpg"></img>
            </a>
          </div>
    </div>

  </div>
)

export default Examples;
