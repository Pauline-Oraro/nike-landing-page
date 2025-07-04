import React from 'react';
import { navLinks } from '../constants';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
        <img src={headerLogo}
        alt="logo" 
        className='m-0 w-[129px] h-[29px]' />
        </a>
        {/*visible on desktop devices */}
        <ul className='flex-1/2 flex justify-center items-center gap-16 max-lg:hidden'>
        {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
        ))}
        </ul>
        {/*hamburger menu on mobile devices */}
        <div className='hidden max-lg:block'>
            <img src={hamburger} alt="hamburger menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav
