import React from 'react';
import type { ITopNavbarProps } from '../types';

const TopNavbar: React.FC<ITopNavbarProps> = ({ handleMenuHide, handleMobileMenu }) => {
  return (
    <nav className="flex flex-1 border-b max-h-[200px] min-h-[50px] py-4 px-14 ">
      <div onClick={handleMenuHide} className="hidden cursor-pointer md:flex flex-col gap-[5px] items-center group  ">
        <hr className="leftsidebar_burger " />
        <hr className="leftsidebar_burger" />
        <hr className="leftsidebar_burger " />
      </div>
      <div
        onClick={handleMobileMenu}
        className=" flex cursor-pointer md:hidden flex-col gap-[5px] items-center group  "
      >
        <hr className="leftsidebar_burger " />
        <hr className="leftsidebar_burger" />
        <hr className="leftsidebar_burger " />
      </div>
    </nav>
  );
};

export default TopNavbar;
