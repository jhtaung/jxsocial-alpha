import Link from 'next/link';
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

function Navbar() {
  return (
    <div className='flex h-24 items-center justify-between'>
      {/* LEFT */}
      <div className='w-[20%] md:hidden lg:block'>
        <Link href='/' className='text-xl font-bold text-blue-600'>
          SOCIAL
        </Link>
      </div>
      {/* CENTER */}
      <div className='hidden w-[50%] text-sm md:flex'>
        {/* LINKS */}
        <div className='flex gap-6 text-gray-600'>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/home.png'
              alt='Homepage'
              width={16}
              height={16}
              className='h-4 w-4'
            />
            <span>Homepage</span>
          </Link>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/friends.png'
              alt='Homepage'
              width={16}
              height={16}
              className='h-4 w-4'
            />
            <span>Friends</span>
          </Link>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/stories.png'
              alt='Homepage'
              width={16}
              height={16}
              className='h-4 w-4'
            />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className='flex w-[30%] items-center justify-end gap-4 xl:gap-8'>
        <ClerkLoading>
          <div className='text-surface inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-gray-500 border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white' />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className='cursor-pointer'>
              <Image src='/people.png' alt='' width={24} height={24} />
            </div>
            <div className='cursor-pointer'>
              <Image src='/messages.png' alt='' width={20} height={20} />
            </div>
            <div className='cursor-pointer'>
              <Image src='/notifications.png' alt='' width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className='flex items-center gap-2 text-sm'>
              <Image src='/login.png' alt='' width={20} height={20} />
              <Link href='/sign-in'>Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
}

export default Navbar;
