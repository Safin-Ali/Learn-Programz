import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../header/Navbar';

const Main = () => {
    return (
        <section>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </section>
    );
};

export default Main;