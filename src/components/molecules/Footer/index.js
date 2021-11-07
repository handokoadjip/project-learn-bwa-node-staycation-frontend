import { Button, Logo } from "components/atoms";
import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer>
      <Fade bottom distance="10px">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-3 mb-md-0 text-center text-md-left mr-0 mr-md-5">
              <Logo />
              <p className="brand-tagline font-weight-light mt-3">
                We kaboom your brauty holiday instantyl and memorable
              </p>
            </div>
            <div className="col-md-3 mb-3 mb-md-0 text-center text-md-left">
              <h6 className="mt-2">For Beginners</h6>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">
                  <Button href="/register" type="link">
                    New Account
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button href="/properties" type="link">
                    Start Booking a Room
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button href="/use-payments" type="link">
                    Use Payments
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-3 mb-md-0 text-center text-md-left">
              <h6 className="mt-2">Explore Us</h6>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">
                  <Button href="/careers" type="link">
                    Our Careers
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button href="/privacy" type="link">
                    Privacy
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button href="/terms" type="link">
                    Term & Conditions
                  </Button>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mb-3 mb-md-0 text-center text-md-left">
              <h6 className="mt-2">Contact Us</h6>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item">
                  <Button
                    href="mailto:support@staycation.id"
                    type="link"
                    isExternal
                  >
                    upport@staycation.id
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button href="+625656556" type="link" isExternal>
                    025 - 656 - 556
                  </Button>
                </li>
                <li className="list-group-item">
                  <span>Staycation, Serang</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center copyrights">
              Copyright © {new Date().getFullYear()} - All rights reserved -
              Staycation
            </div>
          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
