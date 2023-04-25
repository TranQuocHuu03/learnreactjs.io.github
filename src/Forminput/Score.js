import React, { Component } from 'react';

class Score extends Component {
    constructor(props){
        super(props);
        this.state={
            hk1:0,
            hk2:0,
            avg:0,
            result:"",
            xl: "",
        };

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange =async (event) => {
    let key = event.target.name;
    let val = event.target.value;
    await this.setState({ [key]: val });
    }

    setavg = ()=> {
      this.setState ({avg :parseFloat((parseFloat(state.hk1) + parseFloat(state.hk2)) / 2)})
    };
    
    handleSubmit=(event)=>{
        event.preventDefault();
        // alert("ban la hoc sinh"+ this.state.xl);
        this.setavg();
        this.setResult();
        this.setXL();
    };

    setResult =()=>{
        if(this.state.avg >= 4.5 && this.state.avg <= 10) this.setState({
            result:"Được lên lớp"
        });
        else if(this.state.avg < 4.5 && this.state.avg >= 0) this.setState({
            result:"Ở lại lớp"
        });
    }
    setXL=()=>{
        if(this.state.avg<=4.5) this.setState({xl:"yếu"});
        else if(this.state.avg<=6.5  && this.state.avg > 4.5 ) this.setState({xl:"trung bình"});
        else if(this.state.avg<=8 && this.state.avg > 6.5) this.setState({xl:"khá"});
        else if(this.state.avg<=9 && this.state.avg > 8) this.setState({xl:"giỏi"});
        else if(this.state.avg<=10 && this.state.avg > 9) this.setState({xl:"xuất sắc"});
    }
    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Kết quả học tập</h3>
                <form onSubmit={this.handleSubmit} className="was-valisated">
                    <div className='form-group'>
                        <label htmlFor="hk1">Điểm HK1</label>
                        <input type="number" className='form-control ' id="hk1" name="hk1" max={10} min={0} defaultValue={0} required onChange={this.handleChange}/>
                        <div className='invalid-feedback'>
                            Điểm không hợp lý
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="hk1">Điểm HK2</label>
                        <input type="number" className='form-control ' id="hk2" name="hk2" max={10} min={0} defaultValue={0} required onChange={this.handleChange}/>
                        <div className='invalid-feedback'>
                            Điểm không hợp lý
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="hk2">Điểm trung bình</label>
                        <input type="number" className="form-control" readOnly value={this.state.avg}/>


                    </div>
                    <div className='form-group'>
                        <label htmlFor="hk2">kết quả</label>
                        <input type="text" className="form-control" defaultValue={0} readOnly value={this.state.result}/>


                    </div>
                    <div className='form-group'>
                        <label htmlFor="hk2">Xếp loại</label>
                        <input type="text" className="form-control" defaultValue={0} readOnly value={this.state.xl}/>
                    </div>
                    <button type="submit" value="submit" className='btn btn-primary'>
                        xem kết quả
                    </button>
                </form>
            </div>
        );
    }

}
export default Score;