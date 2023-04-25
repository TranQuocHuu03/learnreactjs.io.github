import React from "react";

function Product({ id, name, price, quantity, onAdd, onRemove }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>Giá: {price} đồng</p>
      <p>Số lượng: {quantity}</p>
      <button onClick={() => onAdd(id)}>Thêm</button>
      <button onClick={() => onRemove(id)}>Bớt</button>
    </div>
  );
}

export default Product;
