import React from 'react'
import './Herosection.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Herosection = () => {
    const [text] = useTypewriter({
        words: ["I'm a web developer"],
        loop: 0
    })
    return (
        <div className='heroContainer'>
            <div className='hero'>
                <p>Hi! my name is</p>
                <h1>FZ EL KADIRI</h1>
                <h2>{text} <Cursor cursorColor='#8892B0' /></h2>
            </div>
        </div>
    )
}

export default Herosection