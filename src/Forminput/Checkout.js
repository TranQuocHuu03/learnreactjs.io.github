import React, { useState } from "react";
import data from "./Forminput/data.js";
import Product from "../Product";

function Checkout() {
    const products = data();
  const [order, setOrder] = useState([]);

  const handleAdd = (id) => {
    const index = order.findIndex((item) => item.id === id);
    if (index >= 0) {
      const item = order[index];
      const updatedItem = { ...item, quantity: item.quantity + 1 };
      const updatedOrder = [...order];
      updatedOrder[index] = updatedItem;
      setOrder(updatedOrder);
    } else {
      const product = products.find((item) => item.id === id);
      setOrder([...order, { ...product, quantity: 1 }]);
    }
  };

  const handleRemove = (id) => {
    const index = order.findIndex((item) => item.id === id);
    if (index >= 0) {
      const item = order[index];
      if (item.quantity === 1) {
        const updatedOrder = [...order];
        updatedOrder.splice(index, 1);
        setOrder(updatedOrder);
      } else {
        const updatedItem = { ...item, quantity: item.quantity - 1 };
        const updatedOrder = [...order];
        updatedOrder[index] = updatedItem;
        setOrder(updatedOrder);
      }
    }
  };

  const total = order.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  const [payment, setPayment] = useState(0);

  const handlePaymentChange = (event) => {
    setPayment(parseInt(event.target.value));
  };

  const change = payment - total;

  return (
    <div>
      <h2>Đơn hàng</h2>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          quantity={order.find((item) => item.id === product.id)?.quantity || 0}
          onAdd={handleAdd}
          onRemove={handleRemove}
        />
      ))}
      <h2>Tổng tiền: {total} đồng</h2>
      <label>Số tiền thanh toán:</label>
      <input type="number" value={payment} onChange={handlePaymentChange} />
      <button onClick={() => alert(`Số tiền thừa: ${change}, Số lượng: ${order.length}`)}>Thanh toán</button>
    </div>
  );
}

export default Checkout;
