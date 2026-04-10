import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from './component/card'

const App = () => {
  const[data,setData] = useState([])
  const [index, setIndex] = useState(1)

    const getData = async () =>{
      const response = await fetch(`https://picsum.photos/v2/list?page=${index}&limit=30`)
      const result = await response.json()

      setData(result)
    }
    
    useEffect(function(){
      getData()
    },[index])

    let printData = <h3>Loading...</h3>
    if(data.length > 0){
      printData = data.map(function(elem,idx){
        return <div key={idx}>
            <Card elem = {elem}/>
          </div>
      })
    }

  

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white flex flex-col'>
      <div className='flex flex-wrap gap-4 p-2 overflow-auto '>
        {printData}  
      </div>
      {data.length > 0 && (
        <div className='flex justify-center gap-6 items-center p-4' >
          <button style={{opacity:index == 1 ? 0.6 : 1}}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
          onClick={()=>{
            if(index > 1) {
              setIndex(index-1)
              }
          }}>Prev</button>
            <h3> Page {index}</h3>
          <button 
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
          onClick={()=>{
            setIndex(index + 1)
          }}
          >Next</button>
        </div>
      )}

    </div>
  )
}

export default App
