import React from 'react';

import UserStats from '@/components/containers/UserStats/UserStats';
import WendingMachine from '@/components/containers/WendingMachine/WendingMachine';

const Home = () => {
    return (
        <>
            <UserStats />
            <WendingMachine />;
        </>
    );
};

export default Home;
