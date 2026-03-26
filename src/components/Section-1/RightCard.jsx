import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCard = (props) => {
    return (
        <div className='h-full relative bg-black shrink-0 overflow-hidden w-70 rounded-4xl'>
            <img className='h-full w-full object-cover opacity-60' src={props.img} alt="" />
            <div className='absolute h-full w-full top-0 left-0 flex flex-col justify-between p-8'>
                <h1 className='text-2xl font-bold rounded-full h-10 w-10 bg-white  flex flex-col justify-center items-center'>{props.id}</h1>
                <div className='flex flex-col '>
                    <p className='mb-10 leading-normal text-white text-[20px]'>{props.intro}</p>
                    <div className='flex justify-between'>
                        <button className='text-white rounded-full bg-blue-500 p-3'>{props.tag}</button>
                        <button className='text-white rounded-full bg-blue-500 p-3'><ArrowRight size={20} color="#ffffff" strokeWidth={1.25} /> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RightCard