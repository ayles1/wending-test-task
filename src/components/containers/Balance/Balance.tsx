import React, { FC, useEffect } from 'react';

import { wendingActions } from '@/store/wendingSlice/wending.slice';

import { useAppDispatch, useTypedSelector } from '@/hooks/redux';

import styles from './Balance.module.scss';

const Balance: FC<any> = () => {
    const { machineBalance } = useTypedSelector((state) => state.wending);
    const { changeLeft, user } = useTypedSelector((state) => state.cash);
    const { setMachineBalance, setUserBalance } = useAppDispatch(wendingActions);

    useEffect(() => {
        let balance = 0;
        for (let item in user.cash) {
            const denomination = item as '10' | '50' | '100' | '200' | '500' | '1000' | '5000';
            balance += user.cash[denomination] * Number(denomination);
        }
        for (let item in user.money) {
            const denomination = item as '1' | '2' | '5' | '10';
            balance += user.money[denomination] * Number(denomination);
        }
        setUserBalance(balance);
    }, [user]);

    useEffect(() => {
        if (changeLeft) {
            setMachineBalance(changeLeft);
        }
    }, [changeLeft]);
    return (
        <div className={styles.container}>
            <div>Ваш баланс</div>
            <div className={styles.balance}>{machineBalance} Р</div>
        </div>
    );
};

export default Balance;
