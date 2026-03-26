import { useState } from 'react'
import './App.css'
import React from 'react'
import Section1 from './components/Section-1/Section1'
import Section2 from './components/Section-2/Section2'

const App = () => {

  const users=[
    {
      img: "https://images.unsplash.com/photo-1717068341511-204207d72705?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: 'Our solutions are crafted with precision to deliver exceptional user experiences across all digital platforms',
      tag: 'Satisfied'
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661371243525-d02768a7feee?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "We deliver innovative solutions that empower businesses to grow efficiently and sustainably in competitive markets",
      tag: 'Satisfied'
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: 'Our platform combines cutting edge technology with user friendly design to create seamless digital experiences',
      tag: 'Satisfied'
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661281292577-27c65307ac42?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: 'We prioritize quality, reliability, and performance to ensure consistent results for our valued clients worldwide',
      tag: 'Satisfied'
    },
    {
      img: "https://images.unsplash.com/photo-1633113215719-e9cc39f594b2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: 'Our team is dedicated to transforming ideas into impactful solutions through strategic thinking and innovation',
      tag: 'Satisfied'
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661717805091-5821cc62004a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: 'We help organizations scale faster by leveraging modern tools, data insights, and efficient development practices',
      tag: 'Satisfied'
    }
  ]

  return (
    <div>
      <Section1 user={users}/>
      <Section2/>
    </div>
  )
}

export default App