import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const index = (props) => {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLight) className.push("btn-light");
  if (props.isSmall) className.push("btn-sm");
  if (props.isLarge) className.push("btn-lg");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          // <></> Fragment
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  let target;
  if (props.target === "_blank") {
    target = true;
  }

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={target ? "_blank" : undefined}
          rel={target ? "noopener noreffer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

index.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  className: propTypes.string,
  href: propTypes.string,
  target: propTypes.string,
  onClick: propTypes.func,
  isPrimary: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
};

index.defaultProps = {
  target: undefined,
};

export default index;
