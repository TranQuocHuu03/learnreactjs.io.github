import React, { Component } from 'react';
import { connect } from 'react-redux';



class ActionButton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isGoing: true,
            guestName:"bùi văn tèo",
            course: "react.js",
            message:"your message here"
        };
    };
    handleInputChange=(event)=>{
        const target=event.target;
        const value=target.type==="checkbox"? target.checked:target.value;
        const name=target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit=(event)=>{
        alert('Tham gia :'
        + this.state.isGoing+ ',ho tên:'
        + this.state.guestName+ ','
        + this.state.course+ 'và'
        + this.state.message
        );
        event.preventDefault();
    };



    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(demoform);