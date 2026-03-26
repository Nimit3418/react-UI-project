import React from 'react'
import { CornerDownRight } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex px-12 py-10 justify-between'>
        <button className='rounded-full bg-black text-white p-4 text-sm tracking-[2.5px]'>TARGET AUDIENCE</button>
        <h1 class='font-bold flex gap-2 text-[20px] pr-13 tracking-[3px]'> <CornerDownRight size={28}/> DIGITAL BANKING PLATFORM</h1>
    </div>
  )
}

export default Navbar