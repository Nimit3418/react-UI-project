import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1 = (props) => {
  return (
    <div className='flex justify-between h-[90vh] p-10'>
        <Leftcontent />
        <Rightcontent user={props.user}/>
    </div>
  )
}

export default Page1