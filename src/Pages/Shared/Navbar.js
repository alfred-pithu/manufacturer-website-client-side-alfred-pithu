import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const navItems = <>
        <li><NavLink to='/'> Home </NavLink></li>
        <li><NavLink to='/blogs'> Blogs </NavLink></li>
        <li><NavLink to='/portfolio'> Portfolio </NavLink></li>
        <li><NavLink to='/dashboard'> Dashboard </NavLink></li>
        {
            user ? <>
                <li><NavLink to='/login' className='border border-black rounded hover:btn-primary' onClick={() => signOut(auth)}>LogOut</NavLink></li>
                <li className='text-sky-800 my-auto mx-3'>{user.email}</li>
            </>

                : <li><NavLink to='/login'> Login </NavLink></li>
        }
    </>


    return (

        <div className="navbar bg-base-100">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Computer Mania</a>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-bold text-sm">
                    {navItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;