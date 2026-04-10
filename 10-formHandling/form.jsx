//form tag has default state when it reloads page when submit button is clicked 

//to prevent reload we use preventDefault() function

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted');
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default App