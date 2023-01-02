import React from 'react'
import './Contact.css'

const Contact = () =>{
    return(
        <div id='ContactSection' className='contact container d-flex flex-column align-items-center'>
            <h2 className='col-10 text-center text-md-start'><span className='fs-4 me-3'>0.4</span>Contact</h2>
            <div className='d-flex justify-content-center row col-11'>
                <div className='mb-3 col-11 col-lg-4 d-flex justify-content-start align-items-center justify-content-lg-center'>
                    <div className='contactIcon d-flex align-items-center justify-content-center'>
                        <i class="bi bi-geo-alt"></i>
                    </div>
                    <div className='contactDetail'>
                        <p>Location:</p>
                        <p>Rabat, Morroco</p>
                    </div>
                </div>
                <div className='mb-3 col-11 col-lg-4 d-flex justify-content-start align-items-center justify-content-lg-center'>
                    <div className='contactIcon d-flex align-items-center justify-content-center'>
                        <i class="bi bi-envelope"></i>
                    </div>
                    <div className='contactDetail'>
                        <p>Email:</p>
                        <p>fz.kadiri04@gmail.com</p>
                    </div>
                </div>
                <div className='mb-3 col-11 col-lg-4 d-flex justify-content-start align-items-center justify-content-lg-center'>
                    <div className='contactIcon d-flex align-items-center justify-content-center'>
                        <i class="bi bi-phone"></i>
                    </div>
                    <div className='contactDetail'>
                        <p>Phone:</p>
                        <p>+212691994365</p>
                    </div>
                </div>
            </div>
            <form className='col-9'>
                <div className='d-md-flex'>
                    <input type="text" className="form-control me-2" placeholder='Your name'/>
                    <input type="email" className="form-control" placeholder='Your email'/>
                </div>                 
                <input type="text" className="form-control" placeholder='Subject'/>
                <textarea className="form-control" rows="3" placeholder='Your message'></textarea>
                <div className='text-center'>
                    <button type="submit" className="btn btn-primary col-4">Submit</button>
                </div>
            </form>
            
        </div>
    )
}
export default Contact