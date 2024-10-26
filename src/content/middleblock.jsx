"use client"

import { Card } from '@mui/material'
import React from 'react'
import Image from 'next/image';

const Middleblock = () => {
    return (
        <div className='w-full flex flex-col gap-[10px]'>
            <h2 className='text-[24px] font-bold'>Quick Links</h2>
            <Card className="rounded-[20px] bg-[#4749B3] md:hover:bg-white md:px-16 max-md:gap-10 md:py-10 flex md:flex-col items-center group transition-colors duration-300">
                <div className="md:flex hidden group-hover:hidden">
                    <Image src="/home/Logobook.png" alt="booklogo" width={25.79} height={25.29} />
                </div>
                <div className="flex md:hidden px-5 h-full py-5 bg-[#5F61C0]">
                    <Image src="/home/Logobook.png" alt="booklogo" width={35.79} height={35.29} />
                </div>
                <div className="hidden md:group-hover:flex">
                    <Image src="/home/book.png" alt="booklogo" width={25.79} height={25.29} />
                </div>
                <h4 className="text-center text-[24px] 2xl:text-[32px] font-bold md:mt-3 md:mb-1 text-white md:group-hover:text-[#4749B3] transition-colors duration-300">
                    Canvas LMS
                </h4>
                <h6 className="text-center md:flex hidden text-[12px] 2xl:text-[16px] text-white group-hover:text-[#4749B3] transition-colors duration-300">
                    Click here to access your LMS portal for assignments, class recordings, and notes.
                </h6>
            </Card>
            <Card className="rounded-[20px] bg-[#E66DFF] md:hover:bg-white md:px-16 max-md:gap-10 md:py-10 flex md:flex-col items-center group transition-colors duration-300">
                <div className="md:flex hidden group-hover:hidden">
                    <Image src="/home/Logoclass.png" alt="booklogo" width={25.79} height={25.29} />
                </div>
                <div className="flex md:hidden px-5 h-full py-5 bg-[#EB87FF]">
                    <Image src="/home/Logoclass.png" alt="booklogo" width={35.79} height={35.29} />
                </div>
                <div className="hidden md:group-hover:flex">
                    <Image src="/home/personalcard.png" alt="booklogo" width={25.79} height={25.29} />
                </div>
                <h4 className="text-center text-[24px] 2xl:text-[32px] font-bold md:mt-3 md:mb-1 text-white md:group-hover:text-[#E66DFF] transition-colors duration-300">
                    Join Live Class
                </h4>
                <h6 className="text-center md:flex hidden text-[12px] 2xl:text-[16px] text-white group-hover:text-[#E66DFF] transition-colors duration-300">
                    Class 7 Math is starting in 1 hour, 35 minutes.
                </h6>
            </Card>
            <Card className="rounded-[20px] bg-[#6669FE] md:hover:bg-white md:px-16 max-md:gap-10 md:py-10 flex md:flex-col items-center group transition-colors duration-300">
                <div className="md:flex hidden group-hover:hidden">
                    <Image src="/home/Logowhatsapp.png" alt="booklogo" width={25.79} height={25.29} />
                </div>
                <div className="flex md:hidden px-5 h-full py-5 bg-[#7E81FF]">
                    <Image src="/home/Logowhatsapp.png" alt="booklogo" width={35.79} height={35.29} />
                </div>
                <div className="hidden md:group-hover:flex">
                    <Image src="/home/Logobluew.png" alt="booklogo" width={25.79} height={25.29} />
                </div>
                <h4 className="text-center text-[24px] 2xl:text-[32px] font-bold md:mt-3 md:mb-1 text-white md:group-hover:text-[#6669FE]  transition-colors duration-300">
                    Contact Teacher
                </h4>
                <h6 className="text-center md:flex hidden text-[12px] 2xl:text-[16px] text-white group-hover:text-[#6669FE] transition-colors duration-300">
                    Click here to contact your teacher for any doubts or concerns.
                </h6>
            </Card>
        </div>
    )
}

export default Middleblock