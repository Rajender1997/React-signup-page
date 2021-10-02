export const initialState = {
    basket: [
      {
        id: "3254354345",
        title: "Redmi 9 Power (Blazing Blue, 4GB RAM, 64GB Storage) - 6000mAh Battery |FHD+ Screen| 48MP Quad Camera | Alexa Hands-Free Capable",
        price: 13999,
        rating:  4,
        image: "https://m.media-amazon.com/images/I/71hEzQGO5qL._SX679_.jpg",


      }
    ],
    user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);

    switch(action.type) {
          case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return { 
              ...state,
            basket: [...state.basket, action.item],
           };
          case 'REMOVE_FROM_BASKET':
            // Logic for Removing item from basket...

            // we cloned the basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if ( index >= 0) {
              //item exists in basket, remove it...
              newBasket.splice(index, 1);
            }
            else{
              console.warn(
                `Cant remove product (id: ${action.id}) as its nobasket`
              );
            }

            return { ...state,
               basket: newBasket
               }; 
          default:
            return state;
    }
}

export default reducer;
