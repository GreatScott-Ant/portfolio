import React from 'react'
import MiniLinked from './MiniLinked'
import MiniGit from './MiniGit'

const Footer = () => {

    return (

        <>
            <div>
                <p>&copy; My Code to Success - Anthony Holt 2023</p>
            </div>

            <div className="footerbutton">
            <MiniLinked />
            <MiniGit />
            </div>
        </>
    )
}

export default Footer