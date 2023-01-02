import React from 'react'
import './Projectitem.css'


const Projectitem = (props) =>{
    return(
        <div data-aos="flip-right"  data-aos-duration="1500" className='gy-2 col-8 col-lg-4 col-md-6 d-flex flex-column align-items-center mx-auto'>
            <div className='ProjectContainer container p-0 text-center position-relative'>
                <img src={props.path} alt="project picture"/>
                <div className='ProjectCover d-flex align-items-center justify-content-center'>
                    <a href={props.href} target='_blank'><i class="bi bi-eye"></i></a>
                </div>
            </div>
            <div className='projectDescription text-center mt-1'>
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default Projectitem