import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container } from 'react-bootstrap';

const Murphys = () => (
  <Container fluid>
    <TopMenu></TopMenu>
    <MiddleSection></MiddleSection>
<Footer></Footer>

  </Container>
);

const root = createRoot(document.getElementById('root'));
root.render(<StrictMode><Murphys /></StrictMode>);


const TopMenu = () => {
  return (
    <div id="topMenu" className="px-0 justify-content-center">
      <div className="navbar">
        <div className="container">
          <ul className="nav justify-content-start">
            <li><a className="navbar-brand" href="#"><img src={"https://courses.ics.hawaii.edu/ics314f22/morea/ui-frameworks/murphyslogowhite.png"} alt="Murphy's Logo" width="200px" /></a></li>
          </ul>
          <ul className="nav justify-content-end">
            <li className="nav-item nav-link">Home</li>
            <li className="nav-item nav-link">About Us</li>
            <li className="nav-item nav-link">St. Patrick's Day</li>
            <li className="nav-item nav-link">To Go Ordering</li>
            <li className="nav-item nav-link"><i className="bi bi-instagram"></i></li>
            <li className="nav-item nav-link"><i className="bi bi-facebook"></i></li>
            <li className="nav-item nav-link"><i className="bi bi-twitter"></i></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const MiddleSection = () => {
  return (
    <div id="centerText" className="row d-flex align-items-center justify-content-center">
      <div className="col-8 text-center">
        <h1>Now accepting reservations for St Patrick's Day</h1>
        <h1 className="h1">Please call 808-531-0422 for reservations</h1>
        <h1 className="h1">St Patrick's Day To-Go Orders can be ordered on our website menu.</h1>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer id="bottomMenu" className="footer mt-auto py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Lunch</p>
            <hr />
            <p>Monday - Friday: 11:00am - 2:30pm<br />Saturday - Sunday: Not open</p>
          </div>
          <div className="col">
            <p>Bar</p>
            <hr />
            <p>Monday - Friday: From 11:00am to closing<br />Saturday - Sunday: Not open</p>
          </div>
          <div className="col">
            <p>Dinner</p>
            <hr />
            <p>Monday - Friday: 5:00pm - 9:00pm<br />Saturday - Sunday: Not open</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;




