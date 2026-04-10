import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted by', title);

    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input 
        type="text" 
        placeholder='Enter your name' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

//we type in input box, then use onChange call settitle(e.target.value) that causes the value of title to change which is then outputed in out input box
//we do all this to include react and not access dom directl  y