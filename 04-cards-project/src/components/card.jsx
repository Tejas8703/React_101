import React from 'react'
import { Bookmark } from 'lucide-react';
const card = (props) => {
  return (
    <div>
      <div className="card">
        
     <div>
         <div className="top">
          <img src={props.logo} alt=""/>
          <button>Save <Bookmark size={12}/> </button>
        </div>

        <div className="center">
          <h3>{props.company} <span>{props.date}</span></h3>
          <h2>{props.position}</h2>
          <div className='tag'>
            <h4>{props.tag}</h4>
            {/* <h4>Senior Level</h4> */}
          </div>
        </div>
     </div>

        <div className="bottom">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>
        </div>

      </div>
    </div>
  )
}

export default card
