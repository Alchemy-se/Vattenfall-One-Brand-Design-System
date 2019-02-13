import React from "react";

const Examples = () => (
  <div style={{ margin: '10px 20px 0 40px' }}>
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
                <img style={{width: '450px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} src="./img/use-cases/Web/Homepage-Desktop.jpg" onclick="window.open(this.src)"></img>
              </div>
              <div className="vf-col">
              </div>
          </div>
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Article</h4>
              <div className="vf-col">
                <img style={{width: '450px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/Web/Article-Desktop.jpg"></img>
              </div>
          </div>
        </div>
        <div className="vf-row">
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Secondary page</h4>
              <div className="vf-col">
                <img style={{width: '450px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/Web/Investors-Desktop.jpg"></img>
              </div>
            </div>
        </div>

     <h2 style={{marginTop: '100px'}}>Service website</h2>  
     <div className="vf-row">
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Log in</h4>
              <div className="vf-col">
                  <img style={{width: '400px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/Service/Login.jpg"></img>
             </div>
          </div>
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Dashboard</h4>
            <div className="vf-col">
                  <img style={{width: '400px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/Service/Home.jpg"></img>
            </div>
          </div>
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Comparison</h4>
            <div className="vf-col">
                  <img style={{width: '400px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/Service/Compare.jpg"></img>
            </div>
          </div>
        </div>
        <div className="vf-row">
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Dashboard</h4>
            <div className="vf-col">
                  <img style={{width: '400px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/Service/Invoices.jpg"></img>
            </div>
          </div>
        </div>
    
    <h2 style={{marginTop: '100px'}}>iOS App</h2> 
    <div className="vf-row">
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Log In</h4>
            <img style={{width: '150px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/App/Login.jpg"></img>
          </div>
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Homescreen</h4>
            <img style={{width: '150px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/App/Home.jpg"></img>
          </div>
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Overview</h4>
          <img style={{width: '150px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/App/Tarif.jpg"></img>
          </div>
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Consumption</h4>
            <img style={{width: '150px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/App/ZählerstandAblesen.jpg"></img>
          </div>
          <div className="vf-col">
            <h4 style={{ marginTop: '30px'}}>Products</h4>
            <img style={{width: '150px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}} src="./img/use-cases/App/Details.jpg"></img>
          </div>
    </div>

  </div>
)

export default Examples;
