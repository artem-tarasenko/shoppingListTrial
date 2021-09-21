import React from "react";
import { render } from "@testing-library/react";
import ProductGroup from "./ProductGroup";
import { itemList } from "./../../testData";

test("product group has at least title", () => {
  const { queryByTestId } = render(
    <ProductGroup allProducts={itemList} category="Meat" updater={() => null} />
  );
  const group = queryByTestId("product-group");

  expect(group).toBeInTheDocument;
  expect(group.children.length).not.toBeLessThan(1);
});

test("product group has items only for the target category", () => {
  const { queryAllByTestId } = render(
    <ProductGroup allProducts={itemList} category="Meat" updater={() => null} />
  );

  //collect array of names from elemets rendered in the group
  const itemNames = queryAllByTestId("product-name").map(
    (item) => item.innerHTML
  );

  //reduce those names to only ones that has a target category ("Meat")
  //in the original data array
  const result = itemNames.reduce((arr, name) => {
    const itemInAllProducts = itemList.find((item) => item.name === name);
    if (itemInAllProducts.category === "Meat") return [...arr, name];
    return arr;
  }, []);

  //if names array and reduce result are equal than all items has the target category
  expect(itemNames).toStrictEqual(result);
});
