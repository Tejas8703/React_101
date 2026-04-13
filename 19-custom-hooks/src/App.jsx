import React, { useEffect, useState } from 'react'
import { usePost } from './hooks/usePost';
import Counter from './components/Counter';
import { useFetch } from './hooks/useFetch';
import { usePrev } from './hooks/usePrev';


const App = () => {

  //div 1
  const[currentPost,setcurrentPost] = useState(1);
  const postTitle = usePost();
  const data = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);


//div 2 //
  const[state,setState] = useState(0)
  const prev = usePrev(state)

  

  return (
<>
    <div>
      {postTitle} 
      <Counter/>
      <br/>
      <button onClick={()=> setcurrentPost(1)}>1</button>
      <button onClick={()=> setcurrentPost(2)}>2</button>
      <button onClick={()=> setcurrentPost(3)}>3</button>
      <br/> <br/>
      {JSON.stringify(data)}
    </div>

    <div>
      <p>new state is {state}</p>
      <button onClick={()=>{setState((curr)=> curr + 1 ) }}>Click Here</button>
      <p>The previous state was {prev} </p>
    </div>
  </>
 
  )
}

export default App
