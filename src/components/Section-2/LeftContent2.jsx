import React from 'react'
import { Zap } from 'lucide-react'
import img1 from '../../assets/img1.png'

const LeftContent2 = () => {
  return (
    <div className=' h-[70vh] w-1/2 flex flex-col justify-between pl-3'>
      <h1 className='text-5xl/15 font-extrabold'>E-com market is expected <br /> to exceed <span className='bg-lime-300 rounded-full p-1'>$300</span> in 2027</h1>
      <div className='flex gap-5'>
        <Zap size={30} color="#000000" strokeWidth={2} />
        <p className='text-[20px] '>In India MSME contribution to eTailing sales is <br /> expected to grow between 60-70% <br /> annually to reach USD50Bn by FY 2027</p>
      </div>
      <img src={img1} className='h-70' alt="" />
    </div>
  )
}

export default LeftContent2