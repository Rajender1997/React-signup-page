import React from 'react'
import { useStateValue } from './State Provider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
      <img className="checkout_ad" 
      src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/AdvantagePrime/Catpage/8thSept/D25733060_IN_WLME_Advantage-Justfor-Prime_BAU_1500x450_1.jpg"
      alt=""/>

      {basket?.length === 0 ? (
          <div>
              <h2>Your Shopping Basket is empty</h2>
              <p>
                  You have no items in your basket. To buy one or more items, onClick
                  "Add to basket" next to the item.
              </p>
          </div>
      ) : (
          <div>
              <h2 className="checkout_title">Your Shopping Basket</h2>

              {/* List out all of the Checkout Products */}
              {basket?.map(( item ) => {
                  console.log(item);
                  return(
                 <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}/>
              );
              })}
              
          </div>
      )}
           </div>
           {basket.length > 0 && (
               <div className="checkout_right">
                
                   <Subtotal/> 
                 
                </div>
           )}
        </div>
    );
}

export default Checkout;
