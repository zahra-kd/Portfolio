import React, { useEffect, useState } from 'react'
import './Education.css'
import { firestore } from "../../config/firebase";
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';


const years = [2022, 2021, 2020, 2017, 2014, 2011]

const Education = () =>{
    const [index, setIndex] = useState(0)
    const [diploma, setDiploma] = useState([])

    const diplomaGenerator = (index) => {
        setIndex(index)
    }
    
    useEffect(() => {
        const q = query(collection(firestore, "education"), orderBy("number", "asc"))
        onSnapshot(q, querySnapshot=>{
            const firebaseEducation = []
            querySnapshot.forEach(element => {
                firebaseEducation.push(element.data())
            });
            setDiploma(firebaseEducation);
        })
    }, [])

    return (
        <div data-aos="fade-right" data-aos-duration="1500" id='EductionSection' className='education container d-flex flex-column align-items-center'>
            <h2 className='col-10 text-center text-md-start'><span className='fs-4 me-3'>0.2</span>Education</h2>
            <div className='row col-11 col-md-8'>
                <ul className='educationYear col-3 col-md-2 text-center'>
                    {years.map((year, index) => {
                        return(
                            <li onClick={() => diplomaGenerator(index)}>{year}</li>
                        )
                    })}
                </ul>
                <div className='educationDisc col-9'>
                    <p><i class="bi bi-caret-right-fill"></i>{diploma[index]?.title}</p>
                    <p>{diploma[index]?.place}</p>
                </div>
            </div>    
        </div>
    )
}

export default Education