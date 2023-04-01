import './App.css';
import React,{Component} from'../Header/Header';
import Header from'../Header/Header';
import Footer from '../Footer/Footer';
import LeftContent from '../Content/LeftContent';
import RightContent from '../Content/RightContent';
// function left(){
//   return <div>Chào bạn cách tao hàm thứ nhất phổ biến nhất</div>
// }
// var right =function(){
//   return(
//     <div>Chào bạn cách tạo hàm thứ hai loại tạo biến </div>
//   );
// }
// var footer =() =>{
//   return(
//     <div >
//       Chào bạn cách tạo hàm thứ ba loại arrow function
//     </div>
//   );
// }
// class Four extends Component {
//   render() {
//     return (
//       <div>
//         Chào bạn cách tạo class với class
//         Have good day!
//       </div>
//     );
//   }
// }


function App() {
  return (
  
   
   
   <div id="container">
      <Header />
        {/* this is content area */}
        <div id="content">
          {/* this is the content for menu */}
         <LeftContent/>
          {/* this is a content for item  */}
          <RightContent/>
          <div style={{clear: 'both'}} />
        </div>
        {/* footer content */}
        <Footer/>
      </div>

  
  )
}

export default App;

