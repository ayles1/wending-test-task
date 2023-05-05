import React, { FC } from 'react';

import { useTypedSelector } from '@/hooks/redux';

import styles from './UserStats.module.scss';

const UserStats: FC<any> = () => {
    const { userProducts, userBalance } = useTypedSelector((state) => state.wending);
    const { user } = useTypedSelector((state) => state.cash);
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
            <div>
                <div>Монеты</div>
                <div>1 рубль : {user.money['1']}</div>
                <div>2 рубля : {user.money['2']}</div>
                <div>5 рублей : {user.money['5']}</div>
                <div>10 рублей : {user.money['10']}</div>
            </div>
            <div>
                <div>Купюры</div>
                <div>10 рублей : {user.cash['10']}</div>
                <div>50 рублей : {user.cash['50']}</div>
                <div>100 рублей : {user.cash['100']}</div>
                <div>200 рублей : {user.cash['200']}</div>
                <div>500 рублей : {user.cash['500']}</div>
                <div>500 рублей : {user.cash['500']}</div>
                <div>1000 рублей : {user.cash['1000']}</div>
                <div>5000 рублей : {user.cash['5000']}</div>
            </div>
        </div>
    );
};

export default UserStats;
