import React from 'react'
import Navbar from './navbar'
import Content1 from './content1'


const Page1 = (props) => {
  
  return (
    <div className=''>
      <Navbar/>
      <Content1 users ={props.users}/>
    </div>
  )
}

export default Page1
