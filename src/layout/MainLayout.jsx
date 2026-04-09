import React from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import { Outlet } from 'react-router';

const mainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div style={{ marginTop: '50px' }}>
                <Outlet/>
            </div>
        </div>
    );
};

export default mainLayout;