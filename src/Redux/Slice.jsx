import {createSlice} from "@reduxjs/toolkit"

export const Slice=createSlice({
    name:"firstSlice",
    
   initialState: {
       cartItems:[],
       totalQuantity:0,
       totalAmount:0,

    },

    reducers:{
        addToCart:(state,action)=>{
            const existing= state.cartItems.find((item)=>item.id===action.payload.id);//here item.id means the item inside cart and action.payload.id means the item in productPage. it is checking if that item is alredy in that cart it increase the quantity of that item else it push to cart.

            if(existing){
                existing.quantity+=1;//here quantity is that individual item quantity (if we add one item three times it shows that quantity)
            }
            else{
                state.cartItems.push({...action.payload,quantity:1})

            }

                  state.totalQuantity+=1;//totalQuantity means total items quantity ....

        },
           removeFromCart: (state, action) => {
  const existingItem = state.cartItems.find(item => item.id === action.payload);

  if (existingItem) {
    if (existingItem.quantity > 1) {
      existingItem.quantity -= 1;
      state.totalQuantity -= 1;
    } else {
      state.totalQuantity -= 1;
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    }
  }
}


    }
})

export const {addToCart,removeFromCart} = Slice.actions;
export default Slice.reducer;
