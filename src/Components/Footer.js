import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="container-fluid pt-4 pb-2" style= {{backgroundColor: "black"}}>
          <div className=" text-center align-items">
              <h4 className="text-light font-weight-light pb-2">Let's Build your Career...!!</h4>
              <Link to="/contactme" className='font-weight-light btn-md'>
                <button className="btn btn-outline-light">Contact me</button>
              </Link>
          </div>
          <div className="row">
              <div className="col-12 col-md-4 text-center d-flex flex-column pt-5 h-100">
                  <h5 className="text-info font-weight-light"> Quick Links </h5>
                  <Link to="/" className="text-light font-weight-light">Home</Link>
                  <Link to="/" className="text-light font-weight-light">About</Link>
                  <Link to="/" className="text-light font-weight-light">Courses</Link>
                  <Link to="/project/add" className="text-light font-weight-light">Add Project</Link>
                  <Link to="/contactme" className="text-light font-weight-light">Contact</Link>
                  <Link to="/" className="text-light font-weight-light">Help</Link>
              </div>
              <div className="col-12 col-md-4 text-center d-flex flex-column pt-5 h-100" style={{fontSize:"120px"}}>
                  <h5 className="text-info font-weight-light">Begin Somewhere....</h5>
                  <div className="d-flex flex-horizontal overflow-auto footercourseslist">
                      <Link to="/" className="text-light mx-3">
                          <i className="fa-brands fa-python"></i>
                      </Link>
                      <Link to="/" className="text-light mx-3">
                          <i className="fa-brands fa-java"></i>
                      </Link>
                      <Link to="/" className="text-light mx-3">
                          <i className="fa-brands fa-bootstrap"></i>
                      </Link>
                      <Link to="/" className="text-light mx-3">
                          <i className="fa-brands fa-js"></i>
                      </Link>
                      <Link to="/" className="text-light mx-3">
                          <i className="fa-brands fa-react"></i>
                      </Link>
                  </div>
              </div>
              <div className="col-12 col-md-4 text-center d-flex flex-column pt-5 h-100" style={{fontSize:"20px"}}>
                  <h5 className="text-info font-weight-light"> Follow us on </h5>
                  <Link to="/" className="text-light">
                      <i className="fa-brands fa-instagram mx-1 my-1 text-white"></i>
                  </Link>
                  <Link to="/" className="text-light">
                  <i className="fa-brands fa-facebook mx-1 my-1 text-white"></i>
                </Link>
                <Link to="/" className="text-light">
                    <i className="fa-brands fa-twitter mx-1 my-1 text-white"></i>
                </Link>
                <Link to="/" className="text-light">
                    <i className="fa-brands fa-telegram mx-1 my-1 text-white"></i>
                </Link>
                <Link to="/" className="text-light">
                    <i className="fa-brands fa-linkedin-in mx-1 my-1 text-white"></i>
                </Link>
            </div>
        </div>
        <div className="container my-5 text-light text-center border-top">
            <h6 className="my-2 pt-2 font-weight-light"> &#169;   2022 Major Project &#8482;</h6>
        </div>
        </div>
  )
}

export default Footer;
