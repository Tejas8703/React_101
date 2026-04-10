import Page1 from './components/Page1/page1'
import Page2 from './components/page2/page2'

const App = () => {
  const users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'underbanked'
    }
  ]
  return (
    <div> 
      <Page1 users = {users}/>
      <Page2/>
    </div>
  )
}

export default App
