import React, { FC } from 'react';

import { cashActions } from '@/store/cashSlice/cash.slice';
import { wendingActions } from '@/store/wendingSlice/wending.slice';

import { useAppDispatch, useTypedSelector } from '@/hooks/redux';

import styles from './CashBar.module.scss';

const CashBar: FC<any> = () => {
    const { user } = useTypedSelector((state) => state.cash);
    const { pullCash } = useAppDispatch(cashActions);
    const { incrementBalance } = useAppDispatch(wendingActions);
    const handleClick = (amount: '10' | '50' | '100' | '200' | '500' | '1000' | '5000') => {
        if (user.cash[amount]) {
            pullCash(amount);
            incrementBalance(Number(amount));
        }
    };
    return (
        <div className={styles.cashIn}>
            <div>Купюры</div>
            <div className={styles.cashContainer}>
                <button onClick={() => handleClick('10')}>10</button>
                <button onClick={() => handleClick('50')}>50</button>
                <button onClick={() => handleClick('100')}>100</button>
                <button onClick={() => handleClick('200')}>200</button>
                <button onClick={() => handleClick('500')}>500</button>
                <button onClick={() => handleClick('1000')}>1000</button>
                <button onClick={() => handleClick('5000')}>5000</button>
            </div>
        </div>
    );
};

export default CashBar;
