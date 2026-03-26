import React from 'react'
import {ArrowUpRight} from 'lucide-react'

const Leftcontent = () => {
  return (
    <div className=' py-7  w-1/3 flex flex-col justify-between'>
      <div>
        <h1 className='px-10 font-extrabold text-6xl/21 '>Prospective <br /> <span className='rounded-full bg-gray-200 p-1 pr-2 pl-2'>Customer</span> <br /> Segment</h1>
        <p className='px-10 pt-6 text-[17px] tracking-wider'>Depending on customer <br /> satisfaction and access <br /> to banking products, potential <br /> target audience can be divided <br />into three groups </p>
      </div>
      <ArrowUpRight size={160} color="#000000" strokeWidth={2} className='px-6 pb-5' />
    </div>
  )
}

export default Leftcontent