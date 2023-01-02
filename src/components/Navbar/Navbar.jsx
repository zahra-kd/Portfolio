import React, { useRef } from 'react'
import './Navbar.css'

const Navbar = () => {
    const linkRefs = useRef([]);
    const addActive = (index) => {
        linkRefs.current.forEach(elt => {
            elt.classList.remove("active");
        })
        linkRefs.current[index].classList.add('active');
    }
    return(
        <nav className="navbar position-fixed w-100 z-3 navbar-expand-md navbar-dark bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-light"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto fs-6">
                        <a ref={elt => linkRefs.current[0] = elt} onClick={() => addActive(0)} className="nav-link me-4" href="#AboutSection"><span className='nbr me-2'>01.</span>About</a>
                        <a ref={elt => linkRefs.current[1] = elt} onClick={() => addActive(1)} className="nav-link me-4" href="#EductionSection"><span className='nbr me-2'>02.</span>Education</a>
                        <a ref={elt => linkRefs.current[2] = elt} onClick={() => addActive(2)} className="nav-link me-4" href="#ProjectSection"><span className='nbr me-2'>03.</span>Projects</a>
                        <a ref={elt => linkRefs.current[3] = elt} onClick={() => addActive(3)} className="nav-link me-4" href="#ContactSection"><span className='nbr me-2'>04.</span>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar