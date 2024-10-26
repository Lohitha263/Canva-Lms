"use client"

import { Card } from '@mui/material'
import React from 'react'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import Image from 'next/image';

const Leftblock = () => {
    return (
        <div className='w-full'>
            <h2 className='text-[24px] font-bold mb-2'>Announcements</h2>
            <Card sx={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px", borderRadius: "20px", border: "1px" }}>
                <div className='flex items-center gap-2 text-[#4749B3] bg-[#F8F8F8] rounded-[4px] px-5 py-2'>
                    <WbSunnyOutlinedIcon className='text-[24px]' />
                    <h6 className='text-[12px] font-light'>On account of Independence Day, August 15th will be a holiday.</h6>
                </div>
                <div className='flex items-center gap-2 text-[#4749B3] bg-[#F8F8F8] rounded-[4px] px-5 py-2'>
                    <AssignmentOutlinedIcon className='text-[24px]' />
                    <h6 className='text-[12px] font-light'>Reminder to finish your assignments and submit them by Monday.</h6>
                </div>
            </Card>
            <h2 className='text-[24px] font-bold py-2'>Your Class Schedule</h2>
            <Card sx={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px", borderRadius: "20px", border: "1px" }}>

                <div className='flex w-full justify-between items-center rounded-[4px] bg-[#F2F2FF] px-5 py-2'>
                    <div className='flex items-center gap-4'>
                        <Image src={"/home/video.png"} alt='videologo' width={20} height={20} />
                        <div>
                            <h6 className='text-[12px] font-light'>Class 7, Science | Live Class</h6>
                            <h6 className='text-[16px] font-semibold text-[#4749B3]'>Tuesday, 5:00 - 5:50 PM</h6>
                        </div>
                    </div>
                    <h6 className='text-[10px] font-normal'>Yestaerday</h6>
                </div>

                <div className='flex w-full justify-between items-center text-white rounded-[4px] bg-[#E66DFF] px-5 py-2'>
                    <div className='flex items-center gap-4'>
                        <Image src={"/home/Logowhite.png"} alt='videologo' width={28} height={25} />
                        <div>
                            <h6 className='text-[12px] font-light'>Class 7, Science | Live Class</h6>
                            <h6 className='text-[16px] font-semibold'>Tuesday, 5:00 - 5:50 PM</h6>
                        </div>
                    </div>
                    <h6 className='text-[10px] font-normal'>Today</h6>
                </div>

                <div className='flex w-full justify-between items-center rounded-[4px] bg-[#F2F2FF] px-5 py-2'>
                    <div className='flex items-center gap-4'>
                        <Image src={"/home/video.png"} alt='videologo' width={20} height={20} />
                        <div>
                            <h6 className='text-[12px] font-light'>Class 7, Science | Live Class</h6>
                            <h6 className='text-[16px] font-semibold text-[#4749B3]'>Tuesday, 5:00 - 5:50 PM</h6>
                        </div>
                    </div>
                    <h6 className='text-[10px] font-normal'>Tomorrow</h6>
                </div>

                <div className='flex w-full justify-between items-center rounded-[4px] bg-[#FDF5FF] px-5 py-2'>
                    <div className='flex items-center gap-4'>
                        <Image src={"/home/Logo.png"} alt='videologo' width={28} height={25} />
                        <div>
                            <h6 className='text-[12px] font-light text-[#EFABFD]'>Class 7, Science | Live Class</h6>
                            <h6 className='text-[16px] font-semibold text-[#E66DFF]'>Tuesday, 5:00 - 5:50 PM</h6>
                        </div>
                    </div>
                    <h6 className='text-[10px] font-normal text-[#E981FF]'>23rd Sept.  2024</h6>
                </div>

            </Card>
        </div>
    )
}

export default Leftblock