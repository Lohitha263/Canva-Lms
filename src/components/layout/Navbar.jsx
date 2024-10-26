"use client"

import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

const Navbar = () => {

    return (
        <div className='bg-[#6669FE] h-[98px] w-full flex justify-center fixed z-[99]'>
            <div className='w-11/12 h-full flex justify-between items-center'>
                <Link href={"/"}>
                    <Image src={"/layout/LOGO.png"} alt='Logo' height={49.03} width={96.67} />
                </Link>
                <div className='md:text-[32px] text-[24px] font-bold text-white'>
                    Student Potal
                </div>
                <div className='md:flex hidden flex-col text-[#FFFFFF]'>
                    <h2 className='text-[23.33px] font-semibold'>Hello, Gabrisa</h2>
                    <h6 className='text-[12px] '>Class 7, Math + Science</h6>
                </div>
            </div>
        </div>
    )
}

export default Navbar