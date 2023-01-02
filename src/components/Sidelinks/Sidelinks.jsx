import React from 'react'
import './Sidelinks.css'

const Sidelinks = () =>{
    return (
        <div className='sideLinks'>
            <a href='mailto:elkadiri.fatimazahra@gmail.com'><i className="bi bi-envelope-at-fill"></i></a>
            <a href='https://github.com/zahra-kd' target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
            <a href='https://www.linkedin.com/in/fatima-zahra-el-kadiri-526349155/' target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
            <div className='linkLine'></div>
        </div>
    )
}

export default Sidelinks
