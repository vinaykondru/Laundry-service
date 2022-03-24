import React from 'react';
import "./popup.css"
import { Link } from "react-router-dom";

const Confirmpopup = () => {
    return (
        <div className='popupmain'>
            <div className='popupcontent'>
                <div className='mark101'>&#10004;</div>
                <div className='placed'>Your order is successfully.</div>
                <div className="order303">You can track the delivery in the "Orders" section.</div>
                <Link to="/postorders"><button className='orderslink'>Go To Orders</button></Link>
            </div>
        </div>
    )
}

export default Confirmpopup;