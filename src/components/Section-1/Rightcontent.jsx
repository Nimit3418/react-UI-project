import React from 'react'
import RightCard from './RightCard'

const Rightcontent = (props) => {
  return (
    <div id="right" className='pb-8 pl-4 pr-4 w-3/4 flex flex-nowrap gap-10 overflow-x-auto'>
      {props.user.map(function (e,i){
        return <RightCard key={i} id={i} img={e.img} intro={e.intro} tag={e.tag}/>
      })}
    </div>
  )
}

export default Rightcontent