import { Button, Logo } from "components/atoms";
import React from "react";
import Fade from "react-reveal/Fade";

import propTypes from "prop-types";

const index = (props) => {
  const isActive = (path) => {
    return props.location.pathname === path ? "active" : "";
  };

  return (
    <header className="spacing-sm">
      <Fade bottom distance="10px">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div
            className={`container ${
              props.isCenter && "justify-content-center"
            }`}
          >
            <Logo />
            {!props.isCenter && (
              <>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav ml-auto">
                    <Button
                      href="/"
                      type="link"
                      className={`nav-item nav-link ${isActive("/")}`}
                    >
                      Home
                    </Button>
                    <Button
                      href="/browser-by"
                      type="link"
                      className={`nav-item nav-link ${isActive("/browser-by")}`}
                    >
                      Browser By
                    </Button>
                    <Button
                      href="/stories"
                      type="link"
                      className={`nav-item nav-link ${isActive("/stories")}`}
                    >
                      Stories
                    </Button>
                    <Button
                      href="/agents"
                      type="link"
                      className={`nav-item nav-link ${isActive("/agents")}`}
                    >
                      Agents
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </nav>
      </Fade>
    </header>
  );
};

index.propTypes = {
  isCenter: propTypes.bool,
};

export default index;
