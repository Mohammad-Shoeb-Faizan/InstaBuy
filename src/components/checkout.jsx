import React from "react";
import SuccessImage from '../assets/success.gif';

export default function Checkout() {
    return (
        <div style={{textAlign: "center", display: "flex", justifyContent: "center", height: "100vh"}}>
            <img src={SuccessImage} style={{width: "50%", height: "50%", marginTop: '10rem'}} />
        </div>
    )
}
