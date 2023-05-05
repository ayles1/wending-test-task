import React, { FC } from 'react';

import { useTypedSelector } from '@/hooks/redux';

import styles from './Balance.module.scss';

const Balance: FC<any> = () => {
    const { userBalance } = useTypedSelector((state) => state.wending);
    return (
        <div className={styles.container}>
            <div>Ваш баланс</div>
            <div className={styles.balance}>{userBalance} Р</div>
        </div>
    );
};

export default Balance;
