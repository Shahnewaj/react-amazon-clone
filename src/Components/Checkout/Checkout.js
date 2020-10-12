import React from 'react'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'
function Checkout() {
    return (
        <div className='checkout' >
            <div className="checkout_left">
                <img className='checkout_ad' src="https://images-na.ssl-images-amazon.com/images/G/01/trade_in/Trade-in_Appstore_Banner_1000x208_V2.jpg" alt='' />

                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
                <h2>The subtotal will go  </h2>
            </div>
        </div>
    )
}

export default Checkout
