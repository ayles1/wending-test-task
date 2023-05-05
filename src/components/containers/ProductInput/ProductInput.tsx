import React, { FC, useState } from 'react';

import { wendingActions } from '@/store/wendingSlice/wending.slice';

import { useAppDispatch, useTypedSelector } from '@/hooks/redux';

import styles from './ProductsInput.module.scss';

const ProductInput: FC<any> = () => {
    const { getOne, resetRejectReason } = useAppDispatch(wendingActions);
    const { rejectReason } = useTypedSelector((state) => state.wending);
    const [productId, setProductId] = useState<string>('');
    const iter = Array.from({ length: 10 }, (_, i) => i);
    const handleChange = (value: string) => {
        resetRejectReason();
        setProductId((prev) => prev + value);
    };
    const handleReset = () => {
        resetRejectReason();
        setProductId('');
    };
    const handleSubmit = () => {
        getOne(productId);
        setProductId('');
    };
    return (
        <div className={styles.container}>
            <div>Введите номер товара</div>
            <div className={styles.productId}>
                {iter.map((item, index) => (
                    <button key={index} onClick={() => handleChange(index.toString())}>
                        {index}
                    </button>
                ))}
            </div>
            <div>{rejectReason}</div>
            <div>{productId}</div>
            <button onClick={handleReset}>Стереть</button>
            <button onClick={handleSubmit}>Получить</button>
        </div>
    );
};

export default ProductInput;
