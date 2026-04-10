import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('tejas')//num as a string
  const [num, setNum] = useState(0)//num as a number
  const [desc, setdesc] = useState({user:"tejas", age:23})//num as a object
  const [adv , setadv] = useState(10)
  
  const usePrev = () => {
    setadv(prev => (prev + 1))
    setadv(prev => (prev + 1))
    setadv(prev => (prev + 1))
  }


  const btnclicked = ()=>{
    const newdDesc = {...desc};
    newdDesc.user = 'Ritu'
    newdDesc.age = 29
    setdesc(newdDesc)
  }  

  const changeName = () =>{
    setName("Lala")
  } 
  const changeNum = () =>{
    setNum(num + 1)
  }
  const decreaseNum = () =>{
    setNum(num - 1)
  }
  

  return (
    <div>
      <h1>{adv}</h1>
      <button onClick={usePrev}>click</button>

      <h1>{desc.user},{desc.age} </h1>
      <button onClick={btnclicked}>change description</button>
      <h1>My name is now {name}</h1>
      <h1>Count is {num}</h1>
      <button onClick={changeName}>Click for naam karan</button>
      <button onClick={changeNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
    </div>
  )
}

export default App
