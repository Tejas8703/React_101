import RightCard from "./rightCard"

const RightContent = (props) => {
  console.log(props)
  return (
    <div className='h-full w-3/4 flex flex-nowrap gap-6 p-6  '>
      {props.users.map(function(elem){
        return <RightCard img = {elem.img} tag = {elem.tag} />
      })}
    </div>
  )
}

export default RightContent
