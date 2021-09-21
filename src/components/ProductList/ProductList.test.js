import React from "react";
import { render } from "@testing-library/react";
import ProductList from "./ProductList";
import { itemList, categories } from "./../../testData";

test("Product list has a group for each category", () => {
  const { queryAllByTestId } = render(
    <ProductList products={itemList} updater={() => null} />
  );
  const groups = queryAllByTestId("product-group");

  expect(groups.length).toBe(categories.length);
});
