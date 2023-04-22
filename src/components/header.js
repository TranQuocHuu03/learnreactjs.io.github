import './header.css';
import React, { Component } from 'react';

class Header extends Component{
    render(){
      return (
        // <header>
        //   <a href="#" className="logo">
        //     <img src="https://suno.vn/blog/wp-content/uploads/2014/12/nike-lich-su-thiet-ke-logo.jpg" />
        //     <h1>Shop-Huu</h1>
        //   </a>
        //   <input type="checkbox" id="check" />
        //   <label htmlFor="check">
        //     <img
        //       src="https://1.bp.blogspot.com/-TQ6sqw09POE/YVmBmHDNLtI/AAAAAAAABBE/h2kA7cyP42gurgfw1OttA8o6-9IFWvm7wCLcBGAsYHQ/s0/menu1.png"
        //       className="img1"
        //     />
        //     <img
        //       src="https://1.bp.blogspot.com/-7FrNzRkSTfA/YVmBmBWPd1I/AAAAAAAABBA/7ddyu0cIswgmBH3FCqUAuOnCU6Rq5bgbgCLcBGAsYHQ/s0/menu2.png"
        //       className="img2"
        //     />
        //   </label>
        //   <div className="links">
        //     <div>
        //       <a href="/">Home</a>
        //       <a href="/Admin">Admin</a>
        //       <a href="#">Content</a>
        //       <a href="#">Profile</a>
        //       <a href="#">About</a>
        //     </div>
        //   </div>
        //   <Routes>
        //     <Route path="/" element={<Home />} />
        //     <Route path="/Admin" element={<Admin />} />
        //   </Routes>
        // </header>



        <div id="header">
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
</div>
      );
    }
}


export default Header;