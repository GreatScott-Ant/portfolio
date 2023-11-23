import React from 'react'
import PlaySound from './PlaySound'

const Welcome = () => {
    return (
        
        <div className='welcome'>
            <div className="textbox">

            <div className="greeting">Welcome to My Portfolio</div>

            <div className="tagline">"The CODES to My Success!"</div>
            <PlaySound />
            </div>
        </div>
       
    )
}

export default Welcome