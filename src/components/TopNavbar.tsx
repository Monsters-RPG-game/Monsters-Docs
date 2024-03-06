import React from 'react';
import type { ITopNavbarProps } from '../types';
import Icon from './Icon';
import { iconLinks } from '../constants';

const TopNavbar: React.FC<ITopNavbarProps> = ({ handleMenuHide, handleMobileMenu }) => {
  return (
    <nav className="flex flex-1 justify-between border-b max-h-[200px] min-h-[50px] py-3 px-14 ">
      <div className=" flex items-center gap-10 ">
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
        <div className="font-bold p-0">
          <span className="text-rose-700 text-xl">M</span>
          <span className="text-gray-700">onsters</span>
        </div>
      </div>
      <div className="hidden sm:flex items-centers gap-3">
        {iconLinks.map(({ icon, link, color }) => (
          <Icon key={icon} icon={icon} link={link} color={color} />
        ))}
      </div>
    </nav>
  );
};

export default TopNavbar;
