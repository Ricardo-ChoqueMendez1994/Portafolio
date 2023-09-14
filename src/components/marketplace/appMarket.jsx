import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import CardBody from "./cards/CardBody";
import Button from "./button/Button";

// import "./App.css";
const AppMarket = () => {
  const [items, setItem] = useState([]);
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
    console.count("hi");
  }, []);

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }



  return (
    <div>
      <div className="body__container">
        <div className="nav">
          <Header />
          <div className="nav-right">
          <img src="../public/img/carrito.png" alt=""  className="imagen"/>
            <Button num={addedItems.length} click={setShowAddProducts} />
          </div>
        </div>
        <CardBody
          products={items}
          addItem={addItem}
          addedItems={addedItems}
        />
      </div>
    </div>
  );
};

export default AppMarket;
