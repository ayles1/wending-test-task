import React, { FC } from 'react';

import { cashActions } from '@/store/cashSlice/cash.slice';
import { wendingActions } from '@/store/wendingSlice/wending.slice';

import { useAppDispatch, useTypedSelector } from '@/hooks/redux';

import styles from './MoneyBar.module.scss';

const MoneyBar: FC<any> = () => {
    const { user } = useTypedSelector((state) => state.cash);
    const { pullMoney } = useAppDispatch(cashActions);
    const { incrementBalance } = useAppDispatch(wendingActions);
    const handleClick = (amount: '1' | '2' | '5' | '10') => {
        if (user.money[amount]) {
            incrementBalance(Number(amount));
            pullMoney(amount);
        }
    };
    return (
        <div className={styles.moneyIn}>
            <div>Монеты</div>
            <div className={styles.moneyContainer}>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('10')}>10</button>
            </div>
        </div>
    );
};

export default MoneyBar;
