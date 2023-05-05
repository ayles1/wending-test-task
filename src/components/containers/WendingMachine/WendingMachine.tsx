import React, { FC } from 'react';

import Balance from '@/components/containers/Balance/Balance';
import CashBar from '@/components/containers/CashBar/CashBar';
import Change from '@/components/containers/Change/Change';
import MoneyBar from '@/components/containers/MoneyBar/MoneyBar';
import ProductInput from '@/components/containers/ProductInput/ProductInput';
import ProductOutput from '@/components/containers/ProductOutput/ProductOutput';
import ProductsContainer from '@/components/containers/ProductsContainer/ProductsContainer';

import styles from './WendingMachine.module.scss';

const WendingMachine: FC<any> = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.productsBar}>
                    <ProductsContainer />
                    <ProductOutput />
                </div>
                <section className={styles.cashBar}>
                    <MoneyBar />
                    <CashBar />
                    <ProductInput />

                    <Balance />
                    <Change />
                </section>
            </div>
        </div>
    );
};

export default WendingMachine;
