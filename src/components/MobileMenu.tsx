'use client';
import Link from 'next/link';
import { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='md:hidden'>
      <div
        className='flex cursor-pointer flex-col gap-[4.5px]'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`h-1 w-6 rounded-sm bg-blue-500 ${isOpen ? 'rotate-45' : ''} origin-left duration-500 ease-in-out`}
        ></div>
        <div
          className={`h-1 w-6 rounded-sm bg-blue-500 ${isOpen ? 'opacity-0' : ''} duration-500 ease-in-out`}
        ></div>
        <div
          className={`h-1 w-6 rounded-sm bg-blue-500 ${isOpen ? '-rotate-45' : ''} origin-left duration-500 ease-in-out`}
        ></div>
      </div>
      {isOpen && (
        <div className='absolute left-0 top-24 z-10 flex h-[calc(100vh-96px)] w-full flex-col items-center justify-center gap-8 bg-white text-xl font-medium'>
          <Link href='/'>Home</Link>
          <Link href='/'>Friends</Link>
          <Link href='/'>Group</Link>
          <Link href='/'>Stories</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
