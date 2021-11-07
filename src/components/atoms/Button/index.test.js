import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";

test("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner if isLoading is present", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag if type='link' and isExternal is present", () => {
  const { container } = render(
    <Button href="" type="link" isExternal></Button>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> component if type='link' is present", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <button> tag if nothing is present", () => {
  const { container } = render(<Button></Button>);

  expect(container.querySelector("button")).toBeInTheDocument();
});
