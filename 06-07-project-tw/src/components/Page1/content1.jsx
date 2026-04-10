import React from 'react'
import LeftContent from './leftContent'
import RightContent from './rightContent'

const Content1 = (props) => {
  return (
    <div className='py-8 px-18 flex items-center justify-between h-[85vh] gap-5 '>
        <LeftContent/>
        <RightContent users ={props.users} />
    </div>
  )
}

export default Content1
