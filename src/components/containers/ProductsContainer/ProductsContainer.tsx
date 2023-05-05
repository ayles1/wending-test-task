import React, { FC } from 'react';

import ProductsItem from '@/components/containers/ProductsItem/ProductsItem';

import { useTypedSelector } from '@/hooks/redux';

import styles from './ProductsContainer.module.scss';

const ProductsContainer: FC<any> = () => {
    const { products } = useTypedSelector((state) => state.wending);
    return (
        <div className={styles.productsContainer}>
            {products.map((item) => (
                <ProductsItem
                    key={item.id}
                    amount={item.amount}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    id={item.id}
                />
            ))}
        </div>
    );
};

export default ProductsContainer;
