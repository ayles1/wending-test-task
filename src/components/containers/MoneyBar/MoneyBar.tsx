import React, { FC } from 'react';

import { wendingActions } from '@/store/wendingSlice/wending.slice';

import { useAppDispatch } from '@/hooks/redux';

import styles from './MoneyBar.module.scss';

const MoneyBar: FC<any> = () => {
    const { pullCash } = useAppDispatch(wendingActions);
    const handleClick = (amount: number) => {
        pullCash(amount);
    };
    return (
        <div className={styles.moneyIn}>
            <div>Монеты</div>
            <div className={styles.moneyContainer}>
                <button onClick={() => handleClick(1)}>1</button>
                <button onClick={() => handleClick(2)}>2</button>
                <button onClick={() => handleClick(5)}>5</button>
                <button onClick={() => handleClick(10)}>10</button>
            </div>
        </div>
    );
};

export default MoneyBar;
