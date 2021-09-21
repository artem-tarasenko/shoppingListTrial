import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SingleProduct from "./SingleProduct";

const item = {
  name: "Buckwheat",
  category: "Grains",
  isSelected: false
};

test("testing checkbox works fine", () => {
  const { queryByTestId } = render(
    <SingleProduct item={item} updateProduct={() => null} />
  );
  const check = queryByTestId("check");

  expect(check.checked).toBe(false);
  fireEvent.click(check);
  expect(check.checked).toBe(true);
});

test("Single product has a correct name", () => {
  const { queryByTestId } = render(
    <SingleProduct item={item} updateProduct={() => null} />
  );
  const name = queryByTestId("product-name");

  expect(name.innerHTML).toBe("Buckwheat");
});
