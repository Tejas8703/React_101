import { useState } from 'react'
import { Trash } from 'lucide-react';
const App = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()
    
    const copyTask = [...task];
    copyTask.push({title,text})

    setTask(copyTask)
    
    console.log(copyTask)
    setTitle('')
    setText('')
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task]
    copyTask.splice(idx,1)    

    setTask(copyTask)
    
  }

  return (
    <div className='h-screen lg:flex bg-black text-white overflow-y-auto'>
      
      <form onSubmit={(e)=>{submitHandler(e)}} className= 'flex items-start  p-10 flex-col lg:w-1/2 gap-4' > 
        <h1 className='text-3xl font-bold'>Add Notes </h1>
          <input 
          type = "text" 
          placeholder='Enter Notes Heading' 
          className=' px-5 py-2 w-full border-2 border-white '
          value={title}
          onChange={(e)=>{
          setTitle(e.target.value);
        }}
          />
          <textarea 
          type='text'
          placeholder='write details'
          className='px-5 py-2 h-32 w-full border-2 border-white flex items-start'
          value = {text}
          onChange={(e)=>{ setText(e.target.value)} }
          />
          <button className='px-5 py-2 w-full border-2 border-white bg-white text-black active:scale-97 active:bg-gray-200'>
            Submit
          </button>
      </form>
      
        <div className=' p-10 lg:w-1/2 lg:border-l-2 '>
        <h1 className='text-3xl font-bold'>Recent Notes </h1>
          <div className='flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto'>
            
            {task.map(function(elem,idx){
              return <div key={idx} className='relative h-53 w-40 bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] text-black rounded-2xl  pl-1 pr-5  py-6'>
                <button onClick={() =>{deleteNote(idx)}} className='absolute right-1 bottom-1 active:scale-90' ><Trash size={20} /></button>
                <h1 className='leading-tight text-2xl font-bold'>{elem.title}</h1>
                <p className='mt-3 leading-tight font-medium text-gray-600' >{elem.text}</p>
              </div>
            })}

            {/* <div className='h-53 w-40 bg-white rounded-2xl'></div>
            <div className='h-53 w-40 bg-white rounded-2xl'></div> */}
          </div>
        </div>
      
    </div>
  )
}

export default App

