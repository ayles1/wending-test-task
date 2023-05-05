import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC<any> = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Layout;
