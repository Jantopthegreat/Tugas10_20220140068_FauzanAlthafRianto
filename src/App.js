import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprod.cloud.rockstargames.com%2Fcrews%2Fsc%2F0659%2F39141309%2Fpublish%2Femblem%2Femblem_512.png&f=1&nofb=1&ipt=f7c709d0402b86214140b5449a2bd04e8f32749c03fe6eaaa826ff2a47d670e4&ipo=images" className="App-logo" alt="logo"/>  NEVERBROKEAGAIN
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="container mt-5">
      <section id="about" className="mt-5">
          <h2>About Us</h2>
          <p>Welcome to our clothing store! We offer a wide range of fashion items to suit your style. Our mission is to provide high-quality clothing at affordable prices.</p>
        </section>
        <section id="products">
          <h2>Our Products</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img src="https://i.pinimg.com/564x/21/ff/dd/21ffdd0fa1655a4f432bbaaf4d4cd8ac.jpg" className="card-img-top" alt="Product 1" style={{width : '400px', height : '400px'}}/>
                <div className="card-body">
                  <h5 className="card-title">Vlone x Never Broke Again Slime T-shirt</h5>
                  <p className="card-text">$200.00</p>
                  <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img src="https://i.pinimg.com/564x/77/8c/bf/778cbf7c0190bb4f1827b2810f13843c.jpg" className="card-img-top" alt="Product 2" style={{width : '400px', height : '400px'}}/>
                <div className="card-body">
                  <h5 className="card-title">Vlone Rodman T-shirt</h5>
                  <p className="card-text">$88.00</p>
                  <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img src="https://i.pinimg.com/564x/bf/ba/ae/bfbaaea7b2e10b39b2057596424089f6.jpg" className="card-img-top" alt="Product 3" style={{width : '400px', height : '400px'}}/>
                <div className="card-body">
                  <h5 className="card-title">Vlone x Never Broke Again Eyes T-shirt</h5>
                  <p className="card-text">$184.00</p>
                  <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img src="https://i.pinimg.com/564x/b9/48/5e/b9485e5c7422e5a4b8b0ca5f7fb86879.jpg" className="card-img-top" alt="Product 4" style={{width : '400px', height : '400px'}}/>
                <div className="card-body">
                  <h5 className="card-title">Juice Wrld x Vlone T-Shirt</h5>
                  <p className="card-text">$145.00</p>
                  <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img src="https://i.pinimg.com/564x/7c/8b/27/7c8b276f0cf9d55929be54b68d8095d3.jpg" className="card-img-top" alt="Product 5" style={{width : '400px', height : '400px'}}/>
                <div className="card-body">
                  <h5 className="card-title">Vlone Rodman Cheetah T-shirt</h5>
                  <p className="card-text">$97.00</p>
                  <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img src="https://i.pinimg.com/736x/e7/29/46/e7294639fed83e5c286c511cc1f1c4b7.jpg" className="card-img-top" alt="Product 5" style={{width : '400px', height : '400px'}}/>
                <div className="card-body">
                  <h5 className="card-title">Vlone x Juice WRLD LND T-Shirt</h5>
                  <p className="card-text">$141.00</p>
                  <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="mt-5">
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to <a href="mailto:info@clothingstore.com">contact us</a>.</p>
        </section>
      </main>
      <footer className="bg-light py-3 mt-5">
        <div className="container">
          <p className="text-center mb-0">© 2024 NEVERBROKEAGAIN</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
