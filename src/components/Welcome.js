// import React from 'react'
// import PlaySound from './PlaySound'

// const Welcome = () => {
//     return (
        
//         <div className='welcome'>
//             <div className="textbox">

//             <div className="greeting">Welcome to My Portfolio</div>

//             <div className="tagline">"The CODES to My Success!"</div>
//             <PlaySound />
//             <div className="callvibes">🎶Hover over to set the vibe..🎶</div>
//             </div>
//         </div>
       
//     )
// }

// export default Welcome

import React from 'react';
import './Welcome.css';
import PlaySound from './PlaySound';

const Welcome = () => {
  return (
    <div className='welcome'>
      <div className="textbox">
        <div className="greeting">Welcome to My Portfolio</div>
        <div className="tagline">"The CODES to My Success!"</div>
        <PlaySound />
        <div className="callvibes">🎶Hover over to set the vibe..🎶</div>
      </div>
    </div>
  );
}

export default Welcome