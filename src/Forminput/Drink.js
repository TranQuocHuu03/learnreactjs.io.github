import React, { Component } from 'react';

class Drink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            price: '',
            money: '',
            quantity: 1
        }
    }

    checkOrder = (money) => {
        const totalPrice = this.state.price * this.state.quantity;
        if (money >= totalPrice) {
            const change = money - totalPrice;
            alert(`Bạn đã đặt ${this.state.quantity} ${this.state.type}\nTổng tiền: ${totalPrice}đ\nSố tiền thừa: ${change}đ`);
        }
        else {
            alert("Không đủ tiền");
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        if (this.state.price === '') {
            alert("Vui lòng chọn đồ uống");
        }
        else {
            if (this.state.money === '') {
                alert("Vui lòng nhập tiền của bạn bỏ ra");
            }
            else {
                this.checkOrder(this.state.money);
            }
        }
    }

    setHandle = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name === 'money') {
            if (!Number(value)) {
                alert("Làm ơn nhập số vào");
            }
        }
        if (name === 'type') {
            if (value === "Coffee sữa") {
                this.setState({ price: 12000 });
            }
            else if (value === "Coffee đá") {
                this.setState({ price: 15000 });
            }
            else if (value === "Sting rồng") {
                this.setState({ price: 2000 });
            }
            else { this.setState({ price: 6000 }); }
        }
        if (name === 'quantity') {
            this.setState({ quantity: value });
        }
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <table border="2" width="500px">
                        <thead>
                            <tr>
                                <th>Name drink</th>
                                <th>Price drink</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>{this.state.price}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <td>Bạn cứ chọn thoải mái </td>
                                <td>
                                    <select name="type" onChange={this.setHandle}>
                                        <option selected hidden>Mời bạn chọn</option>
                                        <option value="Coffee sữa">Coffee sữa</option>
                                        <option value="Coffee đá">Coffee đá</option>
                                        <option value="Sting rồng">Sting rồng</option>
                                        <option value="C phê">C phê</option>
                                    </select>
                                </td>
                                <td><label>Price---{this.state.price}</label></td>
                            </tr>
                            <tr>
                                <td>Số lượng</td>
                                <td>
                                    <select name="quantity" value={this.state.quantity} onChange={this.setHandle}>
                                        {[1, 2, 3, 4, 5].map(qty => <option key={qty} value={qty}>{qty}</option>)}
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <tr>
                                    <td>Tiền của bạn</td>
                                    <td><input type="text" name="money" onChange={this.setHandel} /></td>
                                </tr>
                                <tr>
                                    <td colSpan="2" align="center">
                                        <button type="submit">Đặt hàng</button>
                                    </td>
                                </tr>
                            </tr>
                        </tbody>
                    </table>

                </form>
            </div>
        );
    }
}

export default Drink;