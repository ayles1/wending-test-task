import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProduct, products } from '../../mocks/Products';

interface IWendingMachine {
    products: IProduct[];
    selectedProduct: IProduct | null;
    userProducts: IProduct[];
    rejectReason: string;
    userBalance: number;
    machineBalance: number;
    machineChange: number;
}

const initialState: IWendingMachine = {
    products,
    selectedProduct: null,
    userProducts: [],
    userBalance: 6878,
    machineBalance: 0,
    rejectReason: '',
    machineChange: 10000
};
const wendingSlice = createSlice({
    name: 'Wending',
    initialState,
    reducers: {
        resetRejectReason(state) {
            state.rejectReason = '';
        },
        setMachineBalance(state, action: PayloadAction<number>) {
            state.machineBalance = action.payload;
        },
        setUserBalance(state, action: PayloadAction<number>) {
            state.userBalance = action.payload;
        },

        incrementBalance(state, action: PayloadAction<number>) {
            if (state.userBalance >= action.payload) {
                state.userBalance -= action.payload;
                state.machineBalance += action.payload;
            }
            return state;
        },
        getOne(state, action: PayloadAction<string>) {
            const wendingIndex = state.products.findIndex((p) => p.id === action.payload);
            const wendingProduct = state.products[wendingIndex];
            const userIndex = state.userProducts.findIndex((p) => p.id === action.payload);
            const userProduct = state.userProducts[userIndex];
            if (wendingProduct) {
                if (wendingProduct.amount > 0) {
                    if (state.machineBalance >= wendingProduct.price) {
                        state.machineBalance -= wendingProduct.price;
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

        resetMachine() {
            return initialState;
        }
    }
});

export const wendingActions = wendingSlice.actions;
export default wendingSlice.reducer;
