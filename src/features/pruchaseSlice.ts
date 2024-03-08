import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    purchaseList:[],
};

export const purchaseSlice = createSlice({
    name: "purchase",
    initialState,
    reducers: {
        addToPurchase: (state,action) => {

            state.purchaseList.push (action.payload)
        },
        removeFromPurchase: (state,action) => {
            return {
                ...state,
                purchaseList: [...state.purchaseList].filter((product) => product.id !== action.payload)
            };


            },

    },
});

export const { addToPurchase,removeFromPurchase } = purchaseSlice.actions

export default purchaseSlice.reducer;