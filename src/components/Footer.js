import React from 'react'
import MiniLinked from './MiniLinked'
import MiniGit from './MiniGit'
import MiniMail from './MiniMail'

const Footer = () => {

    return (

        <>
            <div>
                <p>&copy; My Code to Success - Anthony Holt 2023</p>
            </div>

            <div className="footerbutton">
            <MiniMail />
            <MiniLinked />
            <MiniGit />
            </div>
        </>
    )
}

export default Footer