import React, { useState } from "react";
import data from "./data";

function OrderForm() {
  const [order, setOrder] = useState({});
  const [total, setTotal] = useState(0);
  const [paid, setPaid] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTotal = total;
    Object.keys(order).forEach((key) => {
      const item = data.find((i) => i.name === key);
      newTotal += item.price * parseInt(order[key]);
    });
    setTotal(newTotal);
    setPaid(paid - newTotal);
  };

  return (
    <div>
      <h1>Đặt hàng</h1>
      <form onSubmit={handleSubmit}>
        {data.map((item) => (
          <div key={item.name}>
            <label>
              {item.name} ({item.price}đ)
              <input
                type="number"
                min="0"
                name={item.name}
                value={order[item.name] || ""}
                onChange={handleChange}
              />
            </label>
          </div>
        ))}
        <div>
          <label>
            Tiền nhập vào:
            <input
              type="number"
              min="0"
              value={paid}
              onChange={(e) => setPaid(parseInt(e.target.value))}
            />
          </label>
        </div>
        <button type="submit">Thanh toán</button>
      </form>
      <div>
        Tổng tiền: {total}đ
        {paid > total && <div>Số tiền thừa: {paid - total}đ</div>}
      </div>
    </div>
  );
}

export default OrderForm;
