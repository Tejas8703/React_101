import {MoveRight} from 'lucide-react'

const RightcardContent = (props) => {
  return (
    
      <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
            <h2 className='bg-white h-12 w-12 rounded-full flex justify-center items-center font-bold text-2xl'>1</h2>
            <div>
                <p className='text-lg leading-relaxed text-white mb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero debitis reiciendis sunt ducimus officia praesentium?</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-semibold rounded-full px-7 py-3'>{props.tag}</button>
                    <button className='align-middle bg-blue-600 text-white font-semibold rounded-full px-4 py-3' > <MoveRight className='size-5' /> </button>
                </div>
            </div>
            
        </div>
    
  )
}

export default RightcardContent
