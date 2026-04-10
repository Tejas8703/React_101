import React, { useEffect, useState } from 'react'

const App = () => {

  const[a,setA] = useState(0)
  const[b,setB] = useState(0)

  useEffect(function(){
    aChange()
  },[a])
  
  useEffect(function(){
    bChange()
  },[b])

  function aChange(){
    console.log("a changed");
  }
  function bChange(){
    console.log("b changed");
    
  }

  return (
    <div>
      <h2>A is {a}</h2>
      <h2>B is {b}</h2>
      <button onClick={()=>{
        setA(a+1)
      }}>A Changed</button>
      <button onClick={()=>{
        setB( b-1 )
      }}>B Changed</button>
    </div>
  )
}

export default App
