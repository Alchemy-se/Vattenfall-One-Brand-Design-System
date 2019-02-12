import React from "react";

const Examples = () => (
  <div style={{ margin: '0 30px 40px 40px' }}>
      <p className="vf-pt-md" style={{ fontSize: '16px', 
                  width: '50%', 
                  lineHeight: '32px'
                }}>
      To set the components in context here are a few examples of designs you can create with the Digital Design system.
      </p>

      <h2 style={{marginTop: '40px'}}>Corporate website</h2>
        <div className="vf-row">
          <div className="vf-col">
            <h4>Homepage</h4>
              <div className="vf-col">
                <img style={{height: '147px'}} src="./img/use-cases/Web/Homepage-Desktop.jpg"></img>
              </div>
              <div className="vf-col">
                <img></img>
              </div>
          </div>
          <div className="vf-col">
            <h4>Article</h4>
              <div className="vf-col">
                <img style={{height: '147px'}} src="./img/use-cases/Web/Article-Desktop.jpg"></img>
              </div>
          </div>
        </div>
        <div className="vf-row">
          <div className="vf-col">
            <h4>Secondary pages</h4>
          </div>
        </div>

     <h2 style={{marginTop: '40px'}}>Service website</h2>  
     <div className="vf-row">
          <div className="vf-col">
            <h4>Log in</h4>
              <div className="vf-col">
                  <img style={{height: '147px'}} src="./img/use-cases/Service/Login.jpg"></img>
             </div>
          </div>
          <div className="vf-col">
            <h4>Dashboard</h4>
            <div className="vf-col">
                  <img style={{height: '147px'}} src="./img/use-cases/Service/Home.jpg"></img>
            </div>
          </div>
          <div className="vf-col">
            <h4>Comparison</h4>
            <div className="vf-col">
                  <img style={{height: '147px'}} src="./img/use-cases/Service/Compare.jpg"></img>
            </div>
          </div>
        </div>
        <div className="vf-row">
          <div className="vf-col">
            <h4>Dashboard</h4>
            <div className="vf-col">
                  <img style={{height: '147px'}} src="./img/use-cases/Service/Invoices.jpg"></img>
            </div>
          </div>
        </div>
    
    <h2 style={{marginTop: '40px'}}>iOS App</h2> 
    <div className="vf-row">
          <div className="vf-col">
            <h4>Log In</h4>
            <img style={{height: '147px'}} src="./img/use-cases/App/Login.jpg"></img>
          </div>
          <div className="vf-col">
            <h4>Homescreen</h4>
            <img style={{height: '147px'}} src="./img/use-cases/App/Home.jpg"></img>
          </div>
          <div className="vf-col">
            <h4>Overview</h4>
          <img style={{height: '147px'}} src="./img/use-cases/App/Tarif.jpg"></img>
          </div>
          <div className="vf-col">
            <h4>Consumption</h4>
            <img style={{height: '147px'}} src="./img/use-cases/App/ZählerstandAblesen.jpg"></img>
          </div>
          <div className="vf-col">
            <h4>Products</h4>
            <img style={{height: '147px'}} src="./img/use-cases/App/Details.jpg"></img>
          </div>
    </div>

  </div>
)

export default Examples;
