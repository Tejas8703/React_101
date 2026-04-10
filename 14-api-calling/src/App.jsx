import { useState } from "react"

const App = () =>{
  const [data, setData] = useState([])

  const getData = async () =>{

  const response = await fetch('https://picsum.photos/v2/list')
  
  const result = await response.json()

  setData(result)
  
}

  return(
    <div>
      <button onClick={getData}> GET DATA</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>{elem.author} , {idx}</h3>
        })}
      </div>
    </div>
  )
}
export default App