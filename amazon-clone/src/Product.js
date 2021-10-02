import React from 'react';
import './Product.css';
import { useStateValue } from "./State Provider";

function Product({id,title,image,price,rating}) {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        //Add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
              id: id,
              title: title,
              image: image,
              price: price,
              rating: rating
            }
        })

    };

    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
            <p className="product_price">&nbsp;&nbsp;
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
        </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
            </div>
    )
}

export default Product
