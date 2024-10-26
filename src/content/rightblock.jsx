"use client"

import { Card, Dialog } from '@mui/material'
import React, { useState } from 'react'
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Rightblock = () => {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    const handleClickOpen3 = () => {
        setOpen3(true);
    };

    const handleClose3 = () => {
        setOpen3(false);
    };

    return (
        <div className='w-full'>
            <h2 className='text-[24px] font-bold mb-3'>Access Class Recordings</h2>
            <Card className='px-8 py-10'>
                <div className='h-full w-full'>
                    <div className='bg-[#F6F6FB] flex py-2 px-3 gap-3 rounded-[8px]'>
                        <Image src={"/home/search-normal.png"} alt='searchlogo' width={24} height={16} />
                        <input
                            type="text"
                            placeholder="Search for class recordings"
                            className="pl-2 bg-[#F6F6FB] w-full border-none focus:outline-none text-[12px] font-light"
                        />
                    </div>
                    <div className='flex w-full justify-between items-center py-5'>
                        <h6 className='text-[10px] 2xl:text-[14px] font-normal'>Filter By:</h6>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center bg-[#F6F6FB] px-3 py-2 rounded-[8px] gap-2'>
                                <h6 className='text-[10px] 2xl:text-[14px] font-normal'>This Week</h6>
                                <KeyboardArrowDownIcon />
                            </div>
                            <div className='flex items-center bg-[#F6F6FB] px-3 py-2 rounded-[8px] gap-2'>
                                <h6 className='text-[10px] 2xl:text-[14px] font-normal'>All Subjects</h6>
                                <KeyboardArrowDownIcon />
                            </div>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-5'>

                        <div onClick={handleClickOpen1} className='hover:border-b cursor-pointer border-black w-full group flex justify-between pb-4'>
                            <div className='flex flex-col justify-between'>
                                <div>
                                    <h4 className='text-[12px] 2xl:text-[14px] font-medium text-[#4749B3] group-hover:opacity-75'>Class 7 Math</h4>
                                    <h2 className='text-[16px] font-bold group-hover:text-[#4749B3] '>Algebraic Equations </h2>
                                </div>
                                <h6 className='text-[10px] font-normal'>24th October, 2024</h6>
                            </div>
                            <div className='bg-[url("/home/Rectangle700.png")] h-[64px] w-[120px] rounded-md'>
                                <div className='w-full h-full bg-[#474996] bg-opacity-50 rounded-md flex justify-center items-center'>
                                    <h6 className='text-[10px] text-white group-hover:flex hidden'>
                                        play Now
                                    </h6>
                                    <div className='group-hover:hidden flex'>
                                        <Image src={"/home/video-circle.png"} alt='video-circle' width={24} height={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Dialog
                            open={open1}
                            onClose={handleClose1}
                            maxWidth="md"
                            PaperProps={{
                                style: {
                                    width: '100%',
                                    maxHeight: '90vh',
                                    backgroundColor: "#4749B3",
                                    padding: 0,
                                    overflow: 'hidden',
                                    borderRadius: "28px",
                                    display: 'flex',
                                    flexDirection: 'column',
                                },
                            }}
                        >

                            <div className="py-3 text-white relative">
                                <h6 className="text-[16px] font-light text-center">Class 7 Science</h6>
                                <h5 className="text-[20px] font-bold text-center">Fundamentals of Organic Chemistry</h5>
                                <div className='absolute right-5 top-2'>
                                    <CloseIcon onClick={handleClose1} />
                                </div>
                            </div>
                            <div className="relative w-full" style={{ aspectRatio: '1120/630' }}>
                                <Image
                                    src="/home/Rectangle1.png"
                                    width={1120}
                                    height={630}
                                    objectFit="contain"
                                    alt="classes"
                                />
                            </div>
                        </Dialog>

                        <div onClick={handleClickOpen2} className='hover:border-b cursor-pointer border-black w-full group flex justify-between pb-4'>
                            <div className='flex flex-col justify-between'>
                                <div>
                                    <h4 className='text-[12px] 2xl:text-[14px] font-medium text-[#4749B3] group-hover:opacity-75'>Class 7 Math</h4>
                                    <h2 className='text-[16px] font-bold group-hover:text-[#4749B3] '>Inert Gases</h2>
                                </div>
                                <h6 className='text-[10px] font-normal'>24th October, 2024</h6>
                            </div>
                            <div className='bg-[url("/home/Rectangle700.png")] h-[64px] w-[120px] rounded-md'>
                                <div className='w-full h-full bg-[#474996] bg-opacity-50 rounded-md flex justify-center items-center'>
                                    <h6 className='text-[10px] text-white group-hover:flex hidden'>
                                        play Now
                                    </h6>
                                    <div className='group-hover:hidden flex'>
                                        <Image src={"/home/video-circle.png"} alt='video-circle' width={24} height={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Dialog
                            open={open2}
                            onClose={handleClose2}
                            PaperProps={{
                                style: {
                                    backgroundColor: "transparent"
                                },
                            }}
                        >
                            <div className='bg-[#6F6F6F] px-12 py-12 text-white flex flex-col items-center rounded-[20px]'>
                                <Image src="/home/Logoclass.png" alt="booklogo" width={25.79} height={25.29} />
                                <h4 className='text-[24px] font-bold '>No Live Classes</h4>
                                <h6 className='text-[11.91px]'>You have no live classes scheduled for today.</h6>
                            </div>
                        </Dialog>

                        <div onClick={handleClickOpen3} className='hover:border-b cursor-pointer border-black w-full group flex justify-between pb-4'>
                            <div className='flex flex-col justify-between'>
                                <div>
                                    <h4 className='text-[12px] 2xl:text-[14px] font-medium text-[#E66DFF] group-hover:opacity-75'>Class 7 Math</h4>
                                    <h2 className='text-[16px] font-bold group-hover:text-[#E66DFF] w-9/12'>Fundamentals of
                                        Organic Chemistry</h2>
                                </div>
                                <h6 className='text-[10px] font-normal'>24th October, 2024</h6>
                            </div>
                            <div className='bg-[url("/home/Rectangle700.png")] h-[64px] w-[120px] rounded-md'>
                                <div className='w-full h-full bg-[#E66DFF] bg-opacity-50 rounded-md flex justify-center items-center'>
                                    <h6 className='text-[10px] text-white group-hover:flex hidden'>
                                        play Now
                                    </h6>
                                    <div className='group-hover:hidden flex'>
                                        <Image src={"/home/video-circle.png"} alt='video-circle' width={24} height={24} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Dialog
                            open={open3}
                            onClose={handleClose3}
                            PaperProps={{
                                style: {
                                    backgroundColor: "transparent",
                                    display: "flex",
                                    alignItems: "center",
                                    boxShadow: "none"
                                },
                            }}
                        >
                            <div className="flex flex-col items-center justify-center w-full">
                                <div className='w-full mb-5 bg-white px-5 text-[#E66DFF] flex justify-center items-center py-2 rounded-[13.33px]'>
                                    <NotificationsIcon />
                                    <h6 className='text-[17.03px] max-md:text-[12px] font-bold'>Class 7 Math is starting in 1 hour, 34 minutes.</h6>
                                </div>
                                <div className='bg-white md:w-10/12 px-5 py-12 text-white flex flex-col items-center rounded-[20px]'>
                                    <h4 className='text-[24px] max-md:text-[20px] font-bold text-[#6669FE] text-center '>You can join the live class 5 minutes before it starts. Please wait.</h4>
                                    <button onClick={handleClose3} className='rounded-[21.97px] px-4 py-2 bg-[#6669FE] text-white text-[13.91px] font-bold mt-2'>Okay</button>
                                </div>
                            </div>
                        </Dialog>


                        <div className='hover:border-b border-black w-full group flex justify-between pb-4'>
                            <div className='flex flex-col justify-between'>
                                <div>
                                    <h4 className='text-[12px] 2xl:text-[14px] font-medium text-[#4749B3] group-hover:opacity-75'>Class 7 Math</h4>
                                    <h2 className='text-[16px] font-bold group-hover:text-[#4749B3] '>Trigonometry 101</h2>
                                </div>
                                <h6 className='text-[10px] font-normal'>24th October, 2024</h6>
                            </div>
                            <div className='bg-[url("/home/Rectangle700.png")] h-[64px] w-[120px] rounded-md'>
                                <div className='w-full h-full bg-[#474996] bg-opacity-50 rounded-md flex justify-center items-center'>
                                    <h6 className='text-[10px] text-white group-hover:flex hidden'>
                                        play Now
                                    </h6>
                                    <div className='group-hover:hidden flex'>
                                        <Image src={"/home/video-circle.png"} alt='video-circle' width={24} height={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Card>
        </div>
    )
}

export default Rightblock