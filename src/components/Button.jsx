import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ isActive }) => {
  return (
    <Link
      to="/signin"
      className={` OpenSans border-black border-[0.15rem]   rounded-full px-[2.8rem] py-[0.6rem] font-semibold hover:bg-black hover:text-white transition-colors ${
        isActive ? 'font-bold' : ''
      }`}
    >
      Sign In
    </Link>
  );
};

export default Button;
