import React, { Component } from 'react';
class DemoScore extends Component {
    constructor(props){
        super(props);
        this.state={
            hk1:0,
            hk2:0,
            MediumScore:'',
            academicPower:'',
            KQ:''
        };
    }
    myChangeHandler =async(event)=>{
        let key= event.target.name;
        let value=event.target.value;
       await this.setState({
            [key]:value
        });
    }
    mySubmitHandler =(event)=>{
        event.preventDefault();
        let hk1=this.state.hk1;
        let hk2=this.state.hk2;
        let Medium=0;
        if(!Number(hk1) || !Number(hk2)){
            alert("Score semester must be a number");
        }
        else{
            Medium =(parseFloat(hk1) + parseFloat(hk2))/2;
             this.setState({MediumScore:Medium});
            if(Medium>=9){
                this.setState({KQ:"học sinh giỏi"});
                this.setState({academicPower: "Được lên lớp"});
            }
            else if(Medium>=7 && Medium<9){
                this.setState({KQ:"học sinh khá"});
                this.setState({academicPower: "Được lên lớp"});
            }
            else if(Medium>=5 && Medium<7){
                this.setState({KQ:"học sinh trung bình"});
                this.setState({academicPower: "Được lên lớp"});
            }
            else if(Medium>=0 && Medium<5){
                this.setState({KQ:"học sinh yếu"});
                this.setState({academicPower: "Không được lên lớp"});
            }
        }
        console.log(event);
    }
    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Kết quả học tập</h3>
                <form name="form1" onSubmit={this.mySubmitHandler} className="was-valisated">
                    <div className='form-group'>
                        <label htmlFor="hk1">Điểm HK1</label>
                        <input type="number" className='form-control ' id="hk1" name="hk1"  onChange={this.myChangeHandler}/>
                        <div className='invalid-feedback'>
                            Điểm không hợp lý
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="hk1">Điểm HK2</label>
                        <input type="number" className='form-control ' id="hk2" name="hk2"  onChange={this.myChangeHandler}/>
                        <div className='invalid-feedback'>
                            Điểm không hợp lý
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="hk2">Điểm trung bình</label>
                        <input type="number" className="form-control" readOnly value={this.state.MediumScore}  onChange={this.myChangeHandler}/>


                    </div>
                    <div className='form-group'>
                        <label htmlFor="hk2">kết quả</label>
                        <input type="text" className="form-control"   value={this.state.KQ}/>


                    </div>
                    <div className='form-group'>
                        <label htmlFor="hk2">Xếp loại</label>
                        <input type="text" className="form-control"   value={this.state.academicPower}/>
                    </div>
                    <button type="submit" value="submit" className='btn btn-primary'>
                        xem kết quả
                    </button>
                </form>
            </div>
        );
    }
}
export default DemoScore;