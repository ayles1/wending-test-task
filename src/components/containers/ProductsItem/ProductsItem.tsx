import React, { FC } from 'react';

import { wendingActions } from '@/store/wendingSlice/wending.slice';

import { useAppDispatch } from '@/hooks/redux';

import { IProductsItem } from './ProductsItem.interface';
import styles from './ProductsItem.module.scss';

const ProductsItem: FC<IProductsItem> = (item) => {
    const { getOne } = useAppDispatch(wendingActions);

    const { amount, name, image, price, id } = item;
    const iter = Array.from({ length: amount }, (_, i) => i);

    const isEmpty = amount === 0;
    console.log(isEmpty);
    return (
        <div className={styles.product}>
            <div className={styles.imageContainer}>
                {isEmpty ? (
                    <div>Пусто!</div>
                ) : (
                    <>
                        {iter.map((item, index) => (
                            <img
                                key={id + index}
                                src={image}
                                className={styles.image}
                                style={{ top: `-${index * 5}px`, left: `${index}0px` }}
                            />
                        ))}
                    </>
                )}
            </div>
            <div className={styles.name}>{name}</div>
            <div className={styles.price}>{price} Р</div>
            <div>{id}</div>
        </div>
    );
};

export default ProductsItem;
