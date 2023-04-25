import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import Data from './Forminput/Data';

function MyComponent(){
  const waters = Data();
  const { register, handleSubmit } = useForm();
  const [drinks, setDrinks] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [money, setMoney] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchDrinks() {
      const response = await fetch('/drinks.json');
      const data = await response.json();
      setDrinks(data);
    }
    fetchDrinks();
  }, []);

  useEffect(() => {
    if (selectedDrink) {
      const drink = drinks.find((item) => item.name === selectedDrink);
      setPrice(drink.price);
    }
  }, [selectedDrink, drinks]);

  useEffect(() => {
    const newTotal = quantity * price;
    setTotal(newTotal);
    if (newTotal > money) {
      alert('Số tiền không đủ để đặt hàng');
    }
  }, [quantity, price, money]);

  const onSubmit = (data) => {
    const drink = drinks.find((item) => item.name === data.drink);
    const total = drink.price * data.quantity;
    if (total > money) {
      alert('Số tiền không đủ để đặt hàng');
    } else {
      const change = money - total;
      alert(`Bạn đã đặt ${data.quantity} ${drink.name} với giá ${drink.price} đồng mỗi ly. Số tiền thừa của bạn là ${change} đồng.`);
      setMoney(change);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Thức uống:</label>
        <select name="drink" ref={register} onChange={(e) => setSelectedDrink(e.target.value)}>
          {waters.map((water) => (
            <option key={water.name} value={water.name}>
              {water.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Giá:</label>
        <input type="number" name="price" ref={register} value={price} onChange={(e) => setPrice(Number(e.target.value))} />
      </div>
      <div>
        <label>Tiền mình nhập:</label>
        <input type="number" name="money" ref={register} value={money} onChange={(e) => setMoney(Number(e.target.value))} />
      </div>
      <div>
        <label>Số lượng:</label>
        <input type="number" name="quantity" ref={register} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
      </div>
      <div>
        <button type="submit">Đặt nước</button>
      </div>
    </form>
  );
}

export default MyComponent;
