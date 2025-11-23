import {configureStore} from "@reduxjs/toolkit";
import  SliceReducer  from "./Slice";




export const Store=configureStore({
    reducer:{
       firstSlice:SliceReducer
     
    }
})
