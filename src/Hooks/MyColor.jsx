import React, { useState } from 'react';
import { ReactDOM } from 'react';
function MyColor() {
    const[color, setColor]= useState("red");
    return (
        <>
        <h1>My favorite color is {color}</h1>
        <button type="button"  onClick={()=>setColor("blue")}>Blue</button>
        <button type="button"  onClick={()=>setColor("blue")}>red</button>
        <button type="button"  onClick={()=>setColor("blue")}>green</button>
        <button type="button"  onClick={()=>setColor("blue")}>yellow</button>
        </>
    )
}
export default MyColor;