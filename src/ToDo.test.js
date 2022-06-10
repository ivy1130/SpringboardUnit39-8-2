import React from "react";
import { render } from "@testing-library/react";
import ToDo from "./ToDo";

it("renders without crashing", function () {
  render(<ToDo />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<ToDo />);
  expect(asFragment()).toMatchSnapshot();
});

