import React from 'react'
import './Footer.css'

const Footer = () =>{
    return(
        <div className='footer text-center'>
            <p>© Copyright <b>PhotoFolio</b>. All rights Reserved</p>
            <p>Designed by <span>FZ EL KADIRI</span></p>
            <a className='me-2' href='https://github.com/zahra-kd' target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
            <a href='https://www.linkedin.com/in/fatima-zahra-el-kadiri-526349155/' target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
        </div>
    )
}


export default Footer