
const Card = (props) => {
  console.log(props)
  return (
    <>
      <div className="card">
        <img src='https://images.unsplash.com/photo-1774249904451-ba46beafcb5b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ' alt=''/>
        <h1>{props.user}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <button>View Item</button>
      </div>
      
    </>
  )
}

export default Card
