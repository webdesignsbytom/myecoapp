import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/myea-logo.svg';

const links = ['Home', 'About', 'Myecohome', 'Games', ];

function Navbar() {
  return (
    <>
      <div className='flex flex-row justify-between w-full px-2 mx-auto bg-green-500 sm:flex hover:text-slate-50 items-center'>
        {/* Left hand side of nav perminent */}
        <img src={Logo} alt='logo' className='w-12 h-12 mr-3' />

        {/* small screen menu */}
        <div className='flex flex-row bg-green-500 sm:hidden justify-end'>
          <MenuIcon />
        </div>
        {/* Large screen menu */}
        <nav className='hidden flex-row w-full justify-end items-center sm:flex'>
          <ul className='flex flex-row items-center'>
            {links.map((link, index) => {
              return <li>
                <NavLink key={index} link={link} />
              </li>;
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

function NavLink({ link }) {
  return (
    <>
      <Link to='/' className='block px-4 py-2 text-white hover:text-slate-300'>
        {link}
      </Link>
    </>
  );
}