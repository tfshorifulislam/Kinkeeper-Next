import Link from 'next/link';
import React from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className='flex justify-between navbar w-11/12 mx-auto'>
                <div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'timeline'}>Timeline</Link></li>
                            <li><Link href={'stats'}>Stats</Link></li>

                        </ul>
                    </div>
                    <Link href={'/'} className="cursor-pointer text-sm md:text-xl">KeenKeeper</Link>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 text-lg">
                        <li><Link href={'/'}><AiOutlineHome /> Home</Link></li>
                        <li><Link href={'timeline'}><RiTimeLine /> Timeline</Link></li>
                        <li><Link href={'stats'}><ImStatsDots /> Stats</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;