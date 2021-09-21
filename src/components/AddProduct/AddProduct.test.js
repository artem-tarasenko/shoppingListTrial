import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddProduct from "./AddProduct";

test("Add Product form renderes", () => {
  const { queryByTestId } = render(<AddProduct />);

  const title = queryByTestId("title");
  const form = queryByTestId("form");
  const nameLabel = queryByTestId("name-label");
  const nameInput = queryByTestId("name-input");
  const catLabel = queryByTestId("cat-label");
  const catSelect = queryByTestId("cat-select");
  const submit = queryByTestId("submit");

  expect(title).toBeInTheDocument;
  expect(form).toBeInTheDocument;
  expect(nameLabel).toBeInTheDocument;
  expect(nameInput).toBeInTheDocument;
  expect(catLabel).toBeInTheDocument;
  expect(catSelect).toBeInTheDocument;
  expect(submit).toBeInTheDocument;
});

test("Valid name input testing", () => {
  const { queryByTestId } = render(<AddProduct />);

  const nameInput = queryByTestId("name-input");
  const catSelect = queryByTestId("cat-select");

  expect(nameInput.value).toBe("");
  fireEvent.change(nameInput, {
    target: { value: "NewItem" }
  });
  expect(nameInput.value).toBe("NewItem");

  expect(catSelect.value).toBe("Veges");
  fireEvent.change(catSelect, {
    target: { value: "Meat" }
  });
  expect(catSelect.value).toBe("Meat");
});

test("show notification in case of empty input", () => {
  const { queryByTestId } = render(<AddProduct />);
  const submitBtn = queryByTestId("submit");
  let text = queryByTestId("notification");

  expect(text).not.toBeInTheDocument;
  fireEvent.click(submitBtn);

  text = queryByTestId("notification");
  expect(text).toBeInTheDocument;
  expect(text.innerHTML).toBe("Please fill in all the fields in the form");
});
