import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import AddProduct from "./components/AddProduct/AddProduct";
import Header from "./components/Header/Header";

import { itemList } from "./testData";

// Для данного SPA я решил не использовать ничего стороннего больше чем
// требуется для работы приложения, например Redux, с которым, возможно,
// все выглядело бы чище и логичней, но т.к. стейты тут не сложные и
// вложенность компонентов не сильно большая я остановился просто на хуках
//

export default function App() {
  const [list, setList] = useState([]);

  //initial load effect, from where app's data will be loaded
  useEffect(() => {
    //get products from local storage
    const json = localStorage.getItem("products");
    const storedProducts = JSON.parse(json);

    //if local storage has any "products" data saved => proceed with it
    if (storedProducts) return setList(storedProducts);
    //otherwise load sampla data from testData.js
    setList(itemList);
  }, []);

  //update stored list on change of state to store data to local storage
  //whenever something is added
  useEffect(() => {
    const json = JSON.stringify(list);
    localStorage.setItem("products", json);
  }, [list]);

  //function to update product list
  //(one list item either gets selected or deselected)
  //passed to the ProductList component
  function updateProductList(selectedItem) {
    setList((prevValue) => {
      return prevValue.reduce((arr, item) => {
        if (item.name !== selectedItem.name) return [...arr, item];
        return [...arr, selectedItem];
      }, []);
    });
  }

  //function to add new product to the list
  //passed to the AddProduct component
  function addProduct(newItem) {
    setList((prevList) => [...prevList, newItem]);
  }

  //basic React-Router setup to implement 2 pages in the SPA
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route exact path="/">
          <ProductList products={list} updater={updateProductList} />
        </Route>
        <Route path="/add-item">
          <AddProduct addProduct={addProduct} />
        </Route>
      </Switch>
    </Router>
  );
}
