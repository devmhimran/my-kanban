import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/my-kanban-logo.png'

const NavMenu = () => {
    return (
        <div className='container mx-auto pt-6'>
            <div className="navbar__main flex justify-between">
                <div className="logo">
                    <Link to='/'><img src={logo} alt="" /></Link>
                </div>
                <div className="menu__items">
                    <ul className='lg:flex font-semibold items-center'>
                        <li className='mx-5'>Home</li>
                        <li className='mx-5'>About Us</li>
                        <li className='mx-5'>Pricing</li>
                        <li className='mx-5'>Resources</li>
                        <li className='mx-5'>Contact</li>
                        <li>
                            <button className='login__btn bg-[#197AFF] text-white px-6 py-2.5 mx-2 rounded-3xl'>Login</button>
                            <button className='login__btn border border-dotted border-[#197AFF] text-[#197AFF] px-6 py-2.5 mx-2 rounded-3xl'>Register</button>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;