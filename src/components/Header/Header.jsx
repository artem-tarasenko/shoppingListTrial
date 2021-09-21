import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link title="list" to="/">
        PRODUCTS
      </Link>
      <Link title="add" to="/add-item">
        ADD PRODUCT
      </Link>
    </div>
  );
}
