import React from "react";
import SingleProduct from "./../SingleProduct/SingleProduct";
import styles from "./ProductGroup.module.scss";

//As I did not really know how the Category property should be used,
// so I decided to make it work for a better UI layout, so this component
// will be used to split the list to a smaller bits...

export default function ProductGroup({ allProducts, category, updater }) {
  const filteredProducts = allProducts.filter(
    (product) => product.category === category
  );

  return (
    <div className={styles.productGroup} data-testid="product-group">
      <h4 data-testid="cat-title">{category}</h4>
      {filteredProducts.map((product, index) => (
        <SingleProduct key={index} item={product} updateProduct={updater} />
      ))}
    </div>
  );
}
