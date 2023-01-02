import React, { useState } from 'react'
import './Education.css'

const years = [2022, 2021, 2020, 2017, 2014, 2011]
const diploma = [{
    title: "Bootcamp Full-Stack Web Developer",
    place: "3W ACADEMY - Rabat",
},
{
    title: "TCF certificate (test de connaissance du Français) - level C2",
    place: "INSTITUT FRANÇAIS - Rabat",
},
{
    title: "TOEIC listening and reading certificate – total score 860/990",
    place: "AMERICA-MIDEAST EDUCATIONAL AND TRAINING SERVICES - Rabat",
},
{
    title: "Master degree in international trade and logistics",
    place: "IBN TOFAIl UNIVERSITY – ENCG kenitra",
},
{
    title: "Bachlor degree in management science",
    place: "MOHAMMED V UNIVERSITY UNIVERSITY – Rabat",
},
{
    title: "Baccalaureat physics major",
    place: "MOULAY ABDELLAH HIGH SCHOOL - Rabat",
}
]

const Education = () =>{
    const [index, setIndex] = useState(0)
    const diplomaGenerator = (index) => {
        setIndex(index)
    }
    return (
        <div id='EductionSection' className='education container d-flex flex-column align-items-center'>
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
                    <p><i class="bi bi-caret-right-fill"></i>{diploma[index].title}</p>
                    <p>{diploma[index].place}</p>
                </div>
            </div>    
        </div>
    )
}

export default Education