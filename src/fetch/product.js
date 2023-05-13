import React, { useState, useEffect } from "react";
import "./product.css";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://61bc131bd8542f0017824588.mockapi.io/a/arrayproducts"
      );
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div>
    <h1>Data from mockAPI:</h1>
    <br/>
    <div className="container">
      
      {data.map((item) => (
        <div className="card" >
        <p key={item.id}>
         <img src={item.avatar}/>
         {item.name}
         <br></br>
         {item.price}
          </p>
          
      </div>
      ))}
    </div>
    </div>
  );
}

export default App;