import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Car() {
    const[Car,setCar]=useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });
    const updateColor=()=>{
        setCar(previousState =>{
            return{...previousState, color:"blue"}
        });
    }
    return (
        <>
            <h1>My{Car.brand}</h1>
            <p>It is a {Car.color} {Car.model}  from{Car.year}</p>
            <button type="button" onClick={updateColor}>Blue</button>
        </>
    )
}



export default Car;