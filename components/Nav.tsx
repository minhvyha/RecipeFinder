'use client'
import React, { useContext } from 'react';
// import { MainContext } from './MainContext'; // adjust the import path as needed
import logo from '../public/assets/blue-abstract-logo-vector.jpg'; // adjust the import path as needed
import Image from 'next/image';
const Nav = () => {
  // const { account } = useContext(MainContext);

  return (
    <nav className="flex items-center justify-between p-4 bg-white text-orange-500 shadow-md">
      <div className="flex items-center">
        <Image src={logo} alt='' width={50} height={50} />
        <h1 className="ml-2">Recipe Finder</h1>
      </div>
      {/* <button className={`px-4 py-2 rounded ${account ? 'bg-orange-500 text-white' : 'border border-orange-500 text-orange-500'}`}>
        {account ? 'Dashboard' : 'Sign In'}
      </button> */}
    </nav>
  );
};

export default Nav;