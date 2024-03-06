import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { IIconProps } from '../types';

const Icon: React.FC<IIconProps> = ({ icon, link, color }) => {
  const navigate = useNavigate();

  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <a href={link} target="_blank" rel="noreferrer">
      <div className="cursor-pointer" onClick={() => navigate(link)}>
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
