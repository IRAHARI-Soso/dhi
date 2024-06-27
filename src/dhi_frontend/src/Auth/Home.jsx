import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    
    <div class="container-fluid p-3">
      <header>
        <p className='alert alert-primary p-3 shadow rounded contsiner-fluid text-center display-5'>DECENTRALIZED HEALTH INSURANCE SYSTEM</p>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">DHI</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Features">Features</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
     

      {/* <div className="bg-image">
        <img src="./images/1.jpeg" alt="Background" style={{ width: '100%', height: 'auto' }} />
      </div> */}

      <div className="container shadow rounded p-3">
        <div className="row">
          <div className="col-md-3 section">
            <h4>Advertisement</h4>
            <p className='p-3 shadow rounded alert alert-basic'>Content for Advertisement</p>
          </div>
          <div className="col-md-3 section">
            <h4>Programs</h4>
            <p className='p-3 shadow rounded alert alert-dark'>Content for Programs</p>
          </div>
          <div className="col-md-3 section">
            <h4>Announcements</h4>
            <p className='p-3 shadow rounded alert alert-success'>Content for Announcements</p>
          </div>
          <div className="col-md-3 section">
            <h4>Trends Claims</h4>
            <p className='p-3 shadow rounded alert alert-primary'>Content for Trends Claims</p>
          </div>

          <div className="col-md-12 section">
            <h4>Decentralized Health Insurance</h4>
            <p className='p-3 shadow rounded alert alert-dark'>
              Decentralized Health Insurance (DHI) leverages blockchain technology to provide transparent and secure health
              insurance solutions. By decentralizing the control and distribution of health insurance claims, DHI aims to
              reduce fraud, ensure privacy, and offer real-time processing of claims. Members of DHI benefit from lower premiums,
              faster claims settlements, and a community-driven approach to health insurance. The use of smart contracts ensures
              that all terms and conditions are automatically enforced without the need for intermediaries, creating a more
              efficient and fair system.
            </p>
          </div>
        </div>
      </div>

      <footer className="footer container p-3">
        <div>
          <p>&copy; 2024 Blockchain Developer Team 1 IPRC NGOMA</p>
          <p>
            <a href="mailto:support@vondy.com">Email</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">AWS</a>
            <a href="https://forum.vondy.com" target="_blank" rel="noopener noreferrer">Forum</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;