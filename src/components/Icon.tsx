import React from 'react';
import type { IIconProps } from '../types';

const Icon = ({ icon, link, color }: IIconProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className=" cursor-pointer  " a={link}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 24 24"
          fill={color}
          className="hover:fill-rose-600"
        >
          <path d={icon} />
        </svg>
      </div>
    </a>
  );
};

export default Icon;
