import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from '../Checkout/CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

function Order({order}) {
    return (
        <div className="order" >
            <h2>Order</h2>
             <p>{moment.unix(order.data.created).format('MM Do YYYY, h:mma')}</p>
             <p className="order_id">
                 <small>{order.id}</small>
             </p>
             {order.data.basket?.map(item =>(
                 <CheckoutProduct 
                 key={item.id}
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                 hiddenButton
             />
             ))}
            <CurrencyFormat renderText={(value)=>(
                    <>
                        <h3 className="order_total"> Order Total :  <strong>{value} </strong> </h3> 
                    </>
                )} 
                decimalScale ={2}
                value={order.data.amount / 100 }
                displayType={'text'}
                thousandSeparator ={true}
                prefix={"$"}
                
            /> 
        </div>
    )
}

export default Order
