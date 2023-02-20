import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="div-sep"></div>
      <div className="footercontainer">
        {/* Footer */}
        <footer className="text-center text-lg-start ">
          {/* Section: Links  */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="footer-cont col-3 col-sm-3 col-md-3 col-lg-4 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    More From CNET
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Deals
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Review
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Best Products
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Gift Guide
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Shopping Extension
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Videos
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="footer-cont col-3  col-sm-3 col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">About</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      About CNET
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Newsletter
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Sitemap
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Careers
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="footer-cont col-3  col-sm-3 col-md-2 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold mb-4">Policies</h6>
                  <p>Help Center</p>
                  <p>Privacy</p>
                  <p>Cookie Settings</p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="footer-cont col-3  col-sm-3 col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <p className="text-uppercase  mb-4">Terms of Use</p>
                  <p>Licensing</p>
                  <p>Do Not Sell or Share My Personal Information</p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}
          <div className="div-sep"></div>
          <section className="div-sep d-flex justify-content-center justify-content-lg-between p-4 border-top">
            {/* Left */}
            <div className="cnet-cont">
              <span>
                © 2023 CNET, a Red Ventures company. All rights reserved
                <p>US | France | Germany | Japan | Korea</p>
              </span>
            </div>
            {/* Left */}
            {/* Right */}
            <div className="conn-item">
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin" />
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github" />
              </a>
            </div>
            {/* Right */}
          </section>
          {/* Section: Social media */}
        </footer>
        {/* Footer */}
      </div>
    </>
  );
}

export default Footer;
