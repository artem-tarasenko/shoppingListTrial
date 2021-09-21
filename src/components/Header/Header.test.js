import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

test("header rendered correctly with 2 links", () => {
  const { queryByTitle } = render(
    <Router>
      <Header />
    </Router>
  );

  const list = queryByTitle("list");
  const add = queryByTitle("add");

  expect(list.innerHTML).toBe("PRODUCTS");
  expect(add.innerHTML).toBe("ADD PRODUCT");
});
