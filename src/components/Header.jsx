import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
    return (
        <div className='flex-center flex-col h-[126px] bg-primary-grey text-white '>
            <div className='flex-center h-[30%] xl:py-5 md:py-3 pt-12 pb-8 px-6 gap-[10px]'>
                <p className='font-inter text-grey-600 xl:text-base md:text-sm text-xsm'>
                    Subscribe to our Newsletter For New & latest Blogs and Resources  
                </p>
                <GoArrowUpRight className='text-primary-yellow xl:text-2xl text-xl'/>
            </div>
            <nav className='flex-center h-[70%] bg-dark-grey-600 w-full xl:px-[162px] lg:px-20 md:px-10 px-4 xl:py-6 lg:py-5 py-4'>
  <div class="w-full flex-wrap flex-between mx-auto">
  <Link href='/' className='flex gap-2 flex-center'>
        <img
          src='/assets/images/logo.svg'
          alt='logo'
          className='xl:w-[178.91px] xl:h-[50px] md:w-[143.13px] md:h-[40px] w-[125.23px] h-[35px]'
        ></img>
      </Link>
<div className='flex-between gap-10 text-grey-600 text-base'>
  <Link href='/'>Home</Link>
  <Link href='/news'>News</Link>
  <Link href='/podcasts'>Podcasts</Link>
  <Link href='/resources'>Resources</Link>
</div>
    <button type="button" className='yellow_btn'>Contact Us</button>
  </div>
</nav>

            </div>
    )
}

export default Header