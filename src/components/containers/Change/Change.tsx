import React, { FC } from 'react';

import styles from './Change.module.scss';

const Change: FC<any> = () => {
    return <button className={styles.change}>Получить сдачу</button>;
};

export default Change;
