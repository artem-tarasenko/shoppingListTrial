import React, { useState } from "react";
import styles from "./SingleProduct.module.scss";

export default function SingleProduct({ item, updateProduct }) {
  const [isSelected, setIsSelected] = useState(false);

  function toggleState(e) {
    //this function updates local state to show "checklist" updated
    //and create object with a full set of data about single Product
    //to pass it to update
    const { value: name, checked: isSelected } = e.target;
    const category = e.target.dataset.category;

    setIsSelected((prevState) => !prevState);
    updateProduct({ name, isSelected, category });
  }

  return (
    <div className={styles.product} data-testid="single-product">
      <input
        data-testid="check"
        type="checkbox"
        value={item.name}
        data-category={item.category}
        checked={isSelected}
        onChange={toggleState}
      />
      <p
        data-testid="product-name"
        className={isSelected ? styles.selected : ""}
      >
        {item.name}
      </p>
    </div>
  );
}
