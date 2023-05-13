import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import Card from "./iterm";
import "./demo.css";
function App() {
  const [listProduct, setListProduct] = useState([]);
  const [type, setType] = useReducer((useState, action) => {
    return action;
  }, "");

  const getData = () => {
    axios
      .get("https://61bc131bd8542f0017824588.mockapi.io/a/arrayproducts")
      .then((res) => {
        setListProduct(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleFilter = (type) => {
    setType(type);
  };

  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h4>Filter by type:</h4>
          
            <button onClick={() => handleFilter("")}>All products</button>
            <button onClick={() => handleFilter("electronics")}>Electronics</button>
            <button onClick={() => handleFilter("clothes")}>Clothes</button>
            <button onClick={() => handleFilter("books")}>Books</button>
          
        </div>
        <div className="col-md-8">
          <h3>Product list</h3>
          <div className="row">
            {type === ""
              ? listProduct.map((product) => (
                  <div className="col-md-4" >
                    <Card
                      avatar={product.avatar}
                      name={product.name}
                      price={product.price}
                     
                    ></Card>
                  </div>
                ))
              : listProduct
                  .filter((product) => product.type === type)
                  .map((product) => (
                    <div className="col-md-4" >
                      <Card
                        avatar={product.avatar}
                        name={product.name}
                        price={product.price}
                      ></Card>
                    </div>
                  ))}
          </div>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default App;
