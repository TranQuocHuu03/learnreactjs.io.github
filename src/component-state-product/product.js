import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios"; // import axios từ module để sử dụng

const successAlert = (name) => {
  swal({
    title: "Thank you!",
    text: `You bought a ${name}! Your order is processing!`,
    icon: "success",
  });
};

const Product = (props) => {
  return (
    <div className="card">
      <div className="image">
        <img src={props.imgLink} alt="" />
      </div>
      <div className="card-body">
        <p>Product name: {props.name}</p>
        <p>
          Price: <span className="text-danger">${props.price}</span>
        </p>
        <button
          className="btn btn-primary add"
          onClick={() => successAlert(props.name)}
        >
          Add to cart
        </button>
        <button className="btn btn-primary update">Update</button>
      </div>
    </div>
  );
};

const NewProducts = () => {
  const [data, setData] = useState({
    productList: [],
    categoryList: [],
    isLoaded: false,
  });
  const [product, setProduct] = useState({
    id: "",
    name: "",
    image: "",
    price: "",
  });
  const [categoryId, setCategoryId] = useState("all");

  const getData = async () => {
    if (!data.isLoaded) {
      const res = await axios.get(
        "https://63aa9ceffdc006ba6046faf6.mockapi.io/api/12/categories"
      );
      const categoryList = res.data;

      const res2 = await axios.get(
        "https://63aa9ceffdc006ba6046faf6.mockapi.io/api/12/products"
      );
      const productList = res2.data;

      setData({ categoryList, productList, isLoaded: true });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (data.isLoaded) {
    const newProductComponents =
      categoryId === "all"
        ? data.productList.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              imgLink={product.img}
              name={product.name}
              price={product.price}
            />
          ))
        : data.productList
            .filter((product) => product.IdCategories === categoryId)
            .map((product) => (
              <Product
                key={product.id}
                id={product.id}
                imgLink={product.img}
                name={product.name}
                price={product.price}
              />
            ));

    const categoryComponents = data.categoryList.map((category) => (
      <button
        className="action-primary"
        key={category.id}
        onClick={() => setCategoryId(category.id)}
      >
        {category.name}
      </button>
    ));
    return (
      <section className="new-products">
        <div className="button-nav">
          <button
            className="action-primary"
            key="all"
            onClick={() => setCategoryId("all")}
          >
            All
          </button>
          {categoryComponents}
        </div>
        <div className="product col">{newProductComponents}</div>
      </section>
    );
  }
  return <div>Loading...</div>;
};

export { Product, NewProducts as default };
