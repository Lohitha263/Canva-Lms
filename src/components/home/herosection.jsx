import React from 'react'
import Rightblock from '@/content/rightblock';
import Middleblock from '@/content/middleblock';
import Leftblock from '@/content/leftblock';

const Herosection = () => {

  return (
    <div className='w-full pt-[98px] bg-[#F2F2FF]'>
      <div className='w-full h-full bg-[url("/home/BGVector.png")] flex justify-center'>
        <div className='w-11/12 h-full md:flex gap-10 py-10'>
          <div className='w-full'>
            <Leftblock />
          </div>
          <div className='w-full'>
            <Middleblock />
          </div>
          <div className='w-full'>
            <Rightblock />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosection