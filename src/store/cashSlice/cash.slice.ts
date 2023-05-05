import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICash {
    money: {
        '1': number;
        '2': number;
        '5': number;
        '10': number;
    };
    cash: {
        '10': number;
        '50': number;
        '100': number;
        '200': number;
        '500': number;
        '1000': number;
        '5000': number;
    };
}

interface IState {
    user: ICash;
    wendingMachine: ICash;
    changeLeft: number;
}

const initialState: IState = {
    user: {
        money: {
            '1': 1,
            '2': 1,
            '5': 1,
            '10': 1
        },
        cash: {
            '10': 1,
            '50': 1,
            '100': 1,
            '200': 1,
            '500': 1,
            '1000': 1,
            '5000': 1
        }
    },
    wendingMachine: {
        money: {
            '1': 1,
            '2': 1,
            '5': 1,
            '10': 1
        },
        cash: {
            '10': 1,
            '50': 1,
            '100': 1,
            '200': 1,
            '500': 1,
            '1000': 1,
            '5000': 1
        }
    },
    changeLeft: 0
};

const cashSlice = createSlice({
    name: 'Cash',
    initialState,
    reducers: {
        pullMoney(state, action: PayloadAction<keyof ICash['money']>) {
            const userMoney = state.user.money[action.payload];
            if (userMoney > 0) {
                state.wendingMachine.money[action.payload] += 1;
                state.user.money[action.payload] -= 1;
            }
            return state;
        },
        pullCash(state, action: PayloadAction<keyof ICash['cash']>) {
            const userCash = state.user.cash[action.payload];
            if (userCash > 0) {
                state.wendingMachine.cash[action.payload] += 1;
                state.user.cash[action.payload] -= 1;
            }
            return state;
        },
        calculateChange(state, action: PayloadAction<number>) {
            const change = action.payload;
            let cashAvailable = 0;

            for (let item in state.wendingMachine.cash) {
                const denomination = item as keyof ICash['cash'];
                cashAvailable += state.wendingMachine.cash[denomination] * Number(denomination);
            }
            for (let item in state.wendingMachine.money) {
                const denomination = item as keyof ICash['money'];
                cashAvailable += state.wendingMachine.money[denomination] * Number(denomination);
            }
            if (change > cashAvailable) {
                throw new Error('Not enough cash available');
            }

            let remainingChange = change;

            const fiveThousands = state.wendingMachine.cash['5000'];
            const thousands = state.wendingMachine.cash['1000'];
            const fiveHundreds = state.wendingMachine.cash['500'];
            const twoHundreds = state.wendingMachine.cash['200'];
            const hundreds = state.wendingMachine.cash['100'];
            const fifties = state.wendingMachine.cash['50'];
            const tens = state.wendingMachine.cash['10'];

            if (remainingChange >= 5000 && fiveThousands > 0) {
                const numFiveThousands = Math.min(
                    Math.floor(remainingChange / 5000),
                    fiveThousands
                );
                state.user.cash['5000'] += numFiveThousands;
                remainingChange -= numFiveThousands * 5000;
            }

            if (remainingChange >= 1000 && thousands > 0) {
                const numThousands = Math.min(Math.floor(remainingChange / 1000), thousands);
                state.user.cash['1000'] += numThousands;
                remainingChange -= numThousands * 1000;
            }

            if (remainingChange >= 500 && fiveHundreds > 0) {
                const numFiveHundreds = Math.min(Math.floor(remainingChange / 500), fiveHundreds);
                state.user.cash['500'] += numFiveHundreds;
                remainingChange -= numFiveHundreds * 500;
            }

            if (remainingChange >= 200 && twoHundreds > 0) {
                const numTwoHundreds = Math.min(Math.floor(remainingChange / 200), twoHundreds);
                state.user.cash['200'] += numTwoHundreds;
                remainingChange -= numTwoHundreds * 200;
            }

            if (remainingChange >= 100 && hundreds > 0) {
                const numHundreds = Math.min(Math.floor(remainingChange / 100), hundreds);
                state.user.cash['100'] += numHundreds;
                remainingChange -= numHundreds * 100;
            }
            if (remainingChange >= 50 && fifties > 0) {
                const numFifties = Math.min(Math.floor(remainingChange / 50), fifties);
                state.user.cash['50'] += numFifties;
                remainingChange -= numFifties * 50;
            }
            if (remainingChange >= 10 && tens > 0) {
                const numTens = Math.min(Math.floor(remainingChange / 50), tens);
                state.user.cash['10'] += numTens;
                remainingChange -= numTens * 10;
            }

            const moneyTens = state.wendingMachine.money['10'];
            const fives = state.wendingMachine.money['5'];
            const twos = state.wendingMachine.money['2'];
            const ones = state.wendingMachine.money['1'];

            if (remainingChange >= 10 && moneyTens > 0) {
                const numMoneyTens = Math.min(Math.floor(remainingChange / 10), moneyTens);
                state.user.money['10'] += moneyTens;
                remainingChange -= numMoneyTens * 10;
            }
            if (remainingChange >= 5 && fives > 0) {
                const numFives = Math.min(Math.floor(remainingChange / 5), fives);
                state.user.money['5'] += fives;
                remainingChange -= numFives * 5;
            }
            if (remainingChange >= 2 && twos > 0) {
                const numTwos = Math.min(Math.floor(remainingChange / 2), twos);
                state.user.money['2'] += twos;
                remainingChange -= numTwos * 2;
            }
            if (remainingChange >= 1 && ones > 0) {
                const numOnes = Math.min(Math.floor(remainingChange / 1), ones);
                state.user.money['1'] += ones;
                remainingChange -= numOnes * 1;
            }
            state.changeLeft = remainingChange;
        },
        resetCash(state) {
            return (state = initialState);
        }
    }
});

export const cashActions = cashSlice.actions;
export default cashSlice.reducer;
