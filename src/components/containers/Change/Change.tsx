import React, { FC } from 'react';

import { cashActions } from '@/store/cashSlice/cash.slice';

import { useAppDispatch, useTypedSelector } from '@/hooks/redux';

import styles from './Change.module.scss';

const Change: FC<any> = () => {
    const { machineBalance } = useTypedSelector((state) => state.wending);
    const { changeLeft } = useTypedSelector((state) => state.cash);

    const { calculateChange } = useAppDispatch(cashActions);

    const handleClick = () => {
        calculateChange(machineBalance);
    };
    return (
        <button className={styles.change} onClick={() => handleClick()}>
            Получить сдачу
        </button>
    );
};

export default Change;
