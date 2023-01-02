import React from 'react'
import './About.css'

const technologies = [
    {
        src: "/image/html.png",
        title :"HTML",
    },
    {
        src: "/image/css.png",
        title :"CSS",
    },
    {
        src: "/image/boot.jfif",
        title :"BOOTSTRAP",
    },
    {
        src: "/image/sass.png",
        title :"SASS",
    },
    {
        src: "/image/js.png",
        title :"JAVASCRIPT",
    },
    {
        src: "/image/jquery.png",
        title :"JQUERY",
    },
    {
        src: "/image/react.png",
        title :"REACT",
    },
]

const About = () =>{

    return(
        <div id='AboutSection' className='container aboutContainer d-flex flex-column align-items-center'>
            <h2 className='col-10 text-center text-md-start'><span className='fs-4 me-3'>0.1</span>About</h2>
            <div className='row d-flex justify-content-center'>
                <div className='avatar text-center me-4 position-relative'>
                    <img src="/image/picture.png" alt="avatar" />
                    <div className='avatarBorder'></div>
                </div>
                <div className='about col-10 col-lg-6 col-md-8 '>
                    <p>Hi! I'm Fatima Zahra a web developer based in Morocco.</p>
                    <p>I came across coding through a friend. I realised it would be the perfect fit for me as it combines creativity with logique. Since then, I discovered a passion for building things and bringing ideas to life. </p>
                    <p>Here are the technologies i've been working on :</p>
                    <div className='row'>
                        {technologies.map(technology => {
                            return(
                                <div key={technology.title} className='technology col-md-3 col-6 mt-3 d-flex flex-column'>
                                        <img src={technology.src}/>
                                        <p>{technology.title} </p>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About