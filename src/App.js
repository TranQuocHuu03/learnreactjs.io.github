import './App.css';

import React, { Component } from 'react';

// import "./components/header.css";

import Product from './component-state-product/product'
// import JustAnotherCounter from './Hooks/JustAnotherCounter';
// import Counters from './Hooks/Counters';
// import LoginForm from './Hooks/LoginForm';
// import MyColor from './Hooks/MyColor';
import Car from './Hooks/HelloBrand';
class Prod extends Component{
  render(){
    return (
      <>
        {/* <header>
          <a to="#" className="logo">
            <img src="https://t4.ftcdn.net/jpg/04/34/76/59/360_F_434765976_WEoscjYLyWRTZTs2s2t9h9SUKCAqIkqf.jpg" />
            <h1>Shop-Ong...Tran</h1>
          </a>
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <img
              src="https://1.bp.blogspot.com/-TQ6sqw09POE/YVmBmHDNLtI/AAAAAAAABBE/h2kA7cyP42gurgfw1OttA8o6-9IFWvm7wCLcBGAsYHQ/s0/menu1.png"
              className="img1"
            />
            <img
              src="https://1.bp.blogspot.com/-7FrNzRkSTfA/YVmBmBWPd1I/AAAAAAAABBA/7ddyu0cIswgmBH3FCqUAuOnCU6Rq5bgbgCLcBGAsYHQ/s0/menu2.png"
              className="img2"
            />
          </label>
          <div className="links">
            <div>
              <Link to="/">Home</Link>
              <Link to="/Admin">Admin</Link>
              <Link to="/Content">Content</Link>
              <Link to="/About">About</Link>
            </div>
          </div>
        </header> */}

{/* <div id="header">
   <div id="header-logo">
      <a href="http://www.nationallobsterhatchery.co.uk" className="h-logo">
      <img src="images/lobster.png" />
      </a>
      <h1 className="h-logo">This is header</h1>
      <div style={{clear: 'both'}} />
   </div>
   <div id="header-menu">
      <div id="h-menu">
         <ul className="h-ul-menu">
            <li><a href="index.html#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li>
               <a href="#">News</a>
               <ul>
                  <li><a href="#">Sub menu</a></li>
                  <li><a href="#">Sub menu</a></li>
               </ul>
            </li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Contact</a></li>
         </ul>
         <div style={{clear: 'both'}} />
      </div>
   </div>
   <div style={{clear: 'both'}} />
</div> */}


     
        {/* <Product /> */}
        {/* <JustAnotherCounter/> */}
        {/* <LoginForm/> */}
        {/* <MyColor/> */}
        <Car/>
         
      </>
    );
  }
}

export default Prod;
// const TinhTong = () => {
//   let a = 16;
//   let b = 1;
//   let total = a+b;
//   return (
//     <div className="App">
//       <header className="App-header" id="total">
//         <h1>{a} + {b} = {total}</h1>
//       </header>
//     </div>
//     );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello Huu</h1>
//       </header>
//     </div>
//   );
// }

// function Huu(){
//   const show =
//   <div className="App">
//       <header className="App-header">
//         <h1>Hello</h1>
//       </header>
//     </div>;
//   return show;
// }