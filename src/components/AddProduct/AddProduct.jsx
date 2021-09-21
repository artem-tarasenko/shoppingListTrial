import React, { useState } from "react";
//categories moved to a separate file with dummy data
import { categories } from "./../../testData";
import styles from "./AddProduct.module.scss";

export default function AddProduct({ addProduct }) {
  const [notification, setNotification] = useState({
    isActive: false,
    text: ""
  });
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: categories[0],
    isSelected: false
  });

  //function to add new product to the list
  function submitForm(e) {
    //guardian if there is an empty field, show message and return
    if (newProduct.name === undefined || newProduct.name === "") {
      setNotification({
        isActive: true,
        text: "Please fill in all the fields in the form"
      });
      e.preventDefault();
      return;
    }

    //add product from the state to the list
    addProduct(newProduct);

    //clear form
    setNewProduct({
      name: "",
      category: "Meat",
      isSelected: false
    });

    //show successful notification
    setNotification({
      isActive: true,
      text: "New product added to the list."
    });
    e.preventDefault();
  }

  function handleChange(e) {
    //destructure target's props to variables
    const { name, value } = e.target;

    //use new variables to update components state
    //where Name variable will automatically rewrites the save value
    //in the object, no matter what it is "name" or "category"
    //other properties will be spreaded and unchanged
    setNewProduct((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  //small component to keep user notified when needed
  const Notification = (message) => (
    <p
      data-testid="notification"
      title="message"
      className={styles.notification}
    >
      {notification.text}
    </p>
  );

  return (
    <>
      <div className={styles.form}>
        <h1 data-testid="title">Add new product</h1>
        {notification.isActive && <Notification />}
        <form onSubmit={submitForm} data-testid="form">
          <label data-testid="name-label">Product Name</label>
          <input
            data-testid="name-input"
            autoComplete="off"
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            onFocus={() => setNotification({ isACtive: false, text: "" })}
          />
          <label data-testid="cat-label">Category</label>
          <select
            data-testid="cat-select"
            name="category"
            onChange={handleChange}
            value={newProduct.category}
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input data-testid="submit" type="submit" value="Add" />
        </form>
      </div>
    </>
  );
}
