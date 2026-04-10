import React, { useRef, useState } from 'react'

const App = () => {

  const [timer, setTimer] = useState(0)

  const currtimer = useRef()

  const startTimer = () =>{
    let value = setInterval(function(){
      setTimer(prev => prev + 1)
    },1000)

    currtimer.current = value
    
  }
  const stopTimer = () =>{
    clearInterval(currtimer.current)
  }

  return (
    <div>
      <div>{timer}</div>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
    </div>
  )
}

export default App
