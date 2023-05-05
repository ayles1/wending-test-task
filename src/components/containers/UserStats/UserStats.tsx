import React, { FC } from 'react';

import { useTypedSelector } from '@/hooks/redux';

import styles from './UserStats.module.scss';

const UserStats: FC<any> = () => {
    const { userProducts, userBalance } = useTypedSelector((state) => state.wending);
    return (
        <div className={styles.container}>
            <div>Ваши товары</div>
            {userProducts.map((product, index) => (
                <div className={styles.item} key={product.price + index}>
                    <div>{product.name}</div>
                    <div>{product.amount}</div>
                </div>
            ))}

            <div>Ваш баланс {userBalance}</div>
        </div>
    );
};

export default UserStats;
