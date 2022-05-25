import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    // console.log(user);

    const navItems = <>
        <li><NavLink to='/'> Home </NavLink></li>
        <li><NavLink to='/blogs'> Blogs </NavLink></li>
        <li><NavLink to='/portfolio'> Portfolio </NavLink></li>

        {
            user ? <>

                <li><NavLink to='/dashboard'> Dashboard </NavLink></li>


                <li><NavLink to='/login' className='border border-black rounded hover:btn-primary' onClick={() => signOut(auth)}>LogOut</NavLink></li>
                <li className='text-sky-800 my-auto mx-3'>{user.email}</li>
                {/* <li className='text-red-600 my-auto mx-3'>{user.displayName}</li> */}
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

            <div className='navbar-end lg:hidden'>
                <label htmlFor="drawer" className=" drawer-button lg:hidden">
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                </label>
            </div>



        </div>
    );
};

export default Navbar;