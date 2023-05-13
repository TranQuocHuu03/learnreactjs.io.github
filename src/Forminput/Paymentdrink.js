import React, { Component } from 'react';
// import './menu.css';

class Paymentdrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      price: '',
      money: ''
    };
  }
  checkOrder = (money) => {  // được gọi bởi submitForm
    if (money >= this.state.price) {
      alert(
        'Đồ uống của bạn đây ' +
          this.state.type +
          '\nsố tiền dư: ' +
          (money - this.state.price) +
          'Đ'
      );
    } else {
      alert('Không đủ tiền');
    }
  };

  submitForm = (event) => {  // được gọi khi người ta nhấn submit
    event.preventDefault();
    if (this.state.price === '') {
      alert('Vui lòng chọn đồ uống');
    } else {
      if (this.state.money === '') {
        alert('Vui lòng nhập số tiền của bạn');
      } else{
        this.checkOrder(this.state.money);
      }
    }
  };

  setHandle = (event) => {
    let name = event.target.name;  // tên của input or element
    let value = event.target.value;
    if (name === 'money') {
      if (!Number(value)) {
        alert('Vui lòng nhập số');
      }
    }
    if (name === 'type') {
      if (value === 'cafe sữa') {
        this.setState({ price: 12000 });
      } else if (value === 'cafe đá') {
        this.setState({ price: 10000 });
      } else if (value === 'cafe không đường') {
        this.setState({ price: 8000 });
      } else {
        this.setState({ price: 2000 });
      }
    }
    this.setState({[name]:value });
  };

  render() {
    return (
      <div className="menu-container">
        <form onSubmit={this.submitForm}>
          <table>
            <tbody>
              <tr>
                <td>Mời bạn chọn thức uống: </td>
                <td>
                  <select name="type" onChange={this.setHandle}>
                    <option selected hidden>
                      Mời chọn
                    </option>
                    <option value="cafe sữa">Cà phê sữa</option>
                    <option value="cafe đá">Cà phê đá</option>
                    <option value="cafe không đường">Cà phê không đường</option>
                    <option value="Bò húc">Bò húc</option>
                  </select>
                </td>
                <td>
                  <label>Giá: {this.state.price}Đ</label>
                </td>
              </tr>

              <tr>
                <td>Mời nhập số tiền của bạn:</td>

                <td>
                  <input name="money" type="number" onChange={this.setHandle} />
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" value="Thanh toán" />
        </form>
        <h2></h2>
      </div>
    );
  }
}

export default Paymentdrink;