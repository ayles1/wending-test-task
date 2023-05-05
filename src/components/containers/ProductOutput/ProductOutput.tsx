import React, { FC } from 'react';

import { useTypedSelector } from '@/hooks/redux';

import styles from './ProductOutput.module.scss';

const ProductOutput: FC<any> = () => {
    const { userProducts } = useTypedSelector((state) => state.wending);
    const lastProduct = userProducts.slice(-1)[0];
    if (lastProduct) {
        return <div className={styles.productsOutput}>Ваш {lastProduct.name}</div>;
    }
    return null;
};

export default ProductOutput;
