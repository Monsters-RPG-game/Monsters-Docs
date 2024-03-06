import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import sidebarLinks from '../constants';
import type { INavLink, ISidebar } from '../types';

const LeftSidebar: React.FC<ISidebar> = ({ isHidden }) => {
  const { pathname } = useLocation();
  return (
    <nav className={`${isHidden ? 'leftsidebar-hidden ' : 'leftsidebar'} flex flex-col justify-between`}>
      <ul className="flex flex-col ">
        {sidebarLinks.map((link: INavLink) => {
          const isActive = pathname === link.route;
          return (
            <NavLink
              to={link.route}
              key={link.label}
              className={`leftsidebar-link group ${isActive && 'text-rose-600'}`}
            >
              <li>{link.label}</li>
            </NavLink>
          );
        })}
      </ul>
      <div>
        Designed with{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 inline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <NavLink className="block leftsidebar-link group" to="https://github.com/HurasAdam">
          HurasAdam
        </NavLink>
      </div>
    </nav>
  );
};

export default LeftSidebar;
