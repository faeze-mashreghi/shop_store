import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../shared/types/product';

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
    addToPurchase: (state, action: PayloadAction<Product>) => {
      const isExist = state?.purchaseList.findIndex((product) => product.id === action.payload.id);
      if (isExist) state.purchaseList.push(action.payload);
    },
    removeFromPurchase: (state, action) => {
      return {
        purchaseList: [...state.purchaseList].filter((product) => product.id !== action.payload),
      };
    },
  },
});

export const { addToPurchase, removeFromPurchase } = purchaseSlice.actions;

export default purchaseSlice.reducer;
