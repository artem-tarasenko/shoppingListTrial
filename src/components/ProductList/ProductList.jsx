import React from "react";
import styles from "./ProductList.module.scss";
import ProductGroup from "./../ProductGroup/ProductGroup";
import { categories } from "./../../testData";

export default function ProductList({ products, updater }) {
  return (
    <div className={styles.container}>
      <h3>Shopping list by category</h3>
      <div className={styles.list}>
        {categories.map((cat, index) => (
          <ProductGroup
            key={index}
            allProducts={products}
            category={cat}
            updater={updater}
          />
        ))}
      </div>
    </div>
  );
}
