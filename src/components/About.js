import React from 'react'
import LinkedInButton from './LinkedIn'
import GitHubButton from './Github'

const About = () => {

    return (

        <div className="bioflex">
            <div className="biobox">

                <div className="title">Bio</div>

                <div className="parabio">
                    <p> Hello and welcome! I'm Anthony Holt, a passionate Full-stack Developer with a lifelong curiosity for technology. My journey began with a deep fascination for the inner workings of technology, particularly how devices like MIDI communicate with computers. This curiosity drove me to serve in IT roles in the United States Army for a decade, a pivotal experience that equipped me with real-world training and certifications such as COMPTIA Network & Security+. Now, with years of experience under my belt, I'm committed to leveraging my resilience and problem-solving skills to craft innovative solutions as a developer.    
                    </p>

                    <p> My current passion lies in programming and finding ways to combine that with my artistic creativity. I aspire to bridge the worlds of art and technology, whether it's training artists to become future developers and enabling them to showcase their art in inventive ways or helping them find employment that doesn't compromise their craft. The beauty of a career in tech, especially coding, is that the possibilities are boundless!
                    </p>
                    
                    <div className="proflex">
                    <LinkedInButton />
                    <GitHubButton />
                    </div>
                </div>
            </div>

            <div className="imagebio"></div>
        </div>
    )
}

export default About