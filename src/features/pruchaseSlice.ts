import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/product';

interface PurchasedSlice {
  purchaseList: Product[];
}
const initialState: PurchasedSlice = {
  purchaseList: [],
};

export const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    addToPurchase: (state, action) => {
      state.purchaseList.push(action.payload);
    },
    removeFromPurchase: (state, action) => {
      return {
        ...state,
        purchaseList: [...state.purchaseList].filter((product) => product.id !== action.payload),
      };
    },
  },
});

export const { addToPurchase, removeFromPurchase } = purchaseSlice.actions;

export default purchaseSlice.reducer;
