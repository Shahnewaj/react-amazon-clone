import React from 'react'
import { useStateValue } from '../../StateProvider'
import './Product.css'

function Product({id, title , image , price , rating}) {

    const [ , dispatch ] = useStateValue();

    const addToBasket =() =>{
        // dispatch   action item into  to data layer 
        dispatch({
            type : 'ADD_TO_BASKET',
            item:{
                id,
                title,
                price,
                image,
                rating
            }

        })
    }

    return (
        <div className="product" >
            <div className="product_info">
    <p> {title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating).fill().map(()=>( <p style={{color:'#F29000'}}>★</p>))}           
                </div>
              
            </div>
            <img src={image} alt='' />
            <button onClick={addToBasket} >Add to Basket</button>
        </div>
    )
}

export default Product
