import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0,
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        add: (state, action) => {
            const isItem = state.items.find(item => item.id = action.payload.product.id);
            if (isItem) {
                state.totalQuantity = action.payload.quantity;

            } else {
                state.items.push(action.payload.product);
                state.totalQuantity = action.payload.quantity;
            }
            
        },

        remove: (state, action) => { 
            const itemToRemove = action.payload.id;
            state.items = state.items.filter(item => item.id !== itemToRemove);
            state.totalPrice = 0;
            state.totalQuantity = 0;
        },

        showCartToggle: (state) => {
            state.showCart = !state.showCart
        }


    }
})

export const cartActions = cartSlice.actions;
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export default store;