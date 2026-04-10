const App = () => {

  const scroll = (val) =>{
    if(val == 0){
      console.log("left kona")
    }else if(val == 1000){
      console.log("right kona")
    }

  }
  return (
    
    <div onMouseMove={(elem)=>{scroll(elem.clientX)}}>
      <button onClick={()=>{ console.log("ruk ja ree") }}>Dont Click</button>
      <div className="page1"></div>
      <div className="page2"></div>

    </div>
  )
}

export default App
