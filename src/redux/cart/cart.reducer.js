import CartActionTypes from "./cart.types"
import { addItemInCartWithQuantity, removeItemFromCart, reduceQuantity } from "./cart.utils";

const INTIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state= INTIAL_STATE, action) => { 
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems : addItemInCartWithQuantity(state.cartItems, action.payload)
            }
            
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

        case CartActionTypes.REDUCE_QUANTITY:
            return{
                ...state,
                cartItems: reduceQuantity(state.cartItems, action.payload)
            }
        
        default:
            return state;
    }

}

export default cartReducer;