import React from 'react';

const NavMenu = () => {
    return (
        <div className='container mx-auto py-7'>
            <div className="navbar__main flex justify-between">
                <div className="logo">
                    <h1>Kanban</h1>
                </div>
                <div className="menu__items">
                    <ul className='lg:flex'>
                        <li className='mx-6'>Home</li>
                        <li className='mx-6'>About Us</li>
                        <li className='mx-6'>Pricing</li>
                        <li className='mx-6'>Resources</li>
                        <li className='mx-6'>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;