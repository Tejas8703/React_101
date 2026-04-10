
import RightcardContent from './rightcardContent'
const RightCard = (props) => {

  return (
    <div className="h-full shrink-0 overflow-hidden relative w-80 rounded-4xl "> 
        <img className="h-full w-full object-cover" src={props.img} alt="" />
        <RightcardContent tag = {props.tag} />
    </div>
  )
}

export default RightCard