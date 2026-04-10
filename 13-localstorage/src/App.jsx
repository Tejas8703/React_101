import React from 'react'

const App = () => {

  localStorage.setItem("user" , 'tejas')
  const name = localStorage.getItem('user')
  console.log(name)

  localStorage.removeItem('user')
  
  const user2 = {
    username: "Tejas",
    age: 15,
    city:"nk" 
  }

  localStorage.setItem('user2', JSON.stringify(user2))

 const lala = JSON.parse(localStorage.getItem('user2'))
  console.log(lala);
  
  localStorage.clear() // clear local storage
  
  return (
    <div>
      App
    </div>
  )
}

export default App
