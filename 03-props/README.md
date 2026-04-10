IN this file i used props drilling 
using props to pass data from parent file to child file by passing values as props 

my 2 cards pass value "user" in app.jsx
<Card user = "Batata"/>
<Card user = "Tejas"/>

in card.jsx the Card fuctions receive props from the app.jsx 

const Card = (props) => {
    
}

then the props values are read in my h1 tag 

<h1>{props.user}</h1>