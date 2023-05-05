import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProduct, products } from '../../mocks/Products';

interface IInitialState {
    products: IProduct[];
    selectedProduct: IProduct | null;
    userProducts: IProduct[];
    rejectReason: string;
    userBalance: number;
    machineChange: number;
}

const initialState: IInitialState = {
    products,
    selectedProduct: null,
    userProducts: [],
    userBalance: 0,
    rejectReason: '',
    machineChange: 100
};
const wendingSlice = createSlice({
    name: 'Wending',
    initialState,
    reducers: {
        resetRejectReason(state) {
            state.rejectReason = '';
        },
        getOne(state, action: PayloadAction<string>) {
            const wendingIndex = state.products.findIndex((p) => p.id === action.payload);
            const wendingProduct = state.products[wendingIndex];
            const userIndex = state.userProducts.findIndex((p) => p.id === action.payload);
            const userProduct = state.userProducts[userIndex];
            if (wendingProduct) {
                if (wendingProduct.amount > 0) {
                    if (state.userBalance >= wendingProduct.price) {
                        state.userBalance -= wendingProduct.price;
                        state.products[wendingIndex].amount -= 1;
                        state.selectedProduct = wendingProduct;
                        if (userProduct) {
                            userProduct.amount += 1;
                        } else {
                            state.userProducts.push({ ...wendingProduct, amount: 1 });
                        }
                    } else {
                        state.rejectReason = 'Недостаточно денег';
                    }
                    return state;
                } else {
                    state.rejectReason = 'Закончился продукт';
                }
            } else {
                state.rejectReason = 'Продукт не найден';
            }
            return state;
        },
        pullCash(state, action: PayloadAction<number>) {
            return { ...state, userBalance: state.userBalance + action.payload };
        },
        resetMachine() {
            return initialState;
        }
    }
});

export const wendingActions = wendingSlice.actions;
export default wendingSlice.reducer;
