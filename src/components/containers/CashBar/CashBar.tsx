import React, { FC } from 'react';

import { wendingActions } from '@/store/wendingSlice/wending.slice';

import { useAppDispatch } from '@/hooks/redux';

import styles from './CashBar.module.scss';

const CashBar: FC<any> = () => {
    const { pullCash } = useAppDispatch(wendingActions);
    const handleClick = (amount: number) => {
        pullCash(amount);
    };
    return (
        <div className={styles.cashIn}>
            <div>Купюры</div>
            <div className={styles.cashContainer}>
                <button onClick={() => handleClick(10)}>10</button>
                <button onClick={() => handleClick(50)}>50</button>
                <button onClick={() => handleClick(100)}>100</button>
                <button onClick={() => handleClick(200)}>200</button>
                <button onClick={() => handleClick(500)}>500</button>
                <button onClick={() => handleClick(1000)}>1000</button>
                <button onClick={() => handleClick(5000)}>5000</button>
            </div>
        </div>
    );
};

export default CashBar;
