export const getBasketTotal = (basket) => (
     basket?.reduce((amount, item) => item.price + amount, 0)
);

export const initialState = {
    basket: [{
             id:"0006",
                    title:"Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)",
                    price: 369.00,
                    rating:5,
                    image:"https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US160_.jpg"
    },{
        id:"0006",
               title:"Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)",
               price: 369.00,
               rating:5,
               image:"https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US160_.jpg"
}
]
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
           
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            
            const index = state.basket.findIndex(basketItem => 
                basketItem.id === action.id
            );

            if (index >= 0) {
                // remove item
                newBasket.splice(index, 1);
            } else {
                console.log('Cant remove product as its not in the basket');
            }

            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;    
    }
};

export default reducer;