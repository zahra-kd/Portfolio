import React, { useEffect, useState } from 'react'
import './Projects.css'
import Projectitem from '../Projectitem/Projectitem'
import { firestore } from "../../config/firebase";
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

// const ProjectElement = [
// {
//     url:"image/calculator.png",
//     title: "HTML - CSS - JAVASCRIPT",
//     projectRef:"https://zahra-kd.github.io/calculator/",
// },
// {
//     url:"image/devinette.png",
//     title: "HTML - CSS - JAVASCRIPT",
//     projectRef:"https://zahra-kd.github.io/devinette/",
// },
// {
//     url:"image/forkify.png",
//     title: "HTML - CSS - BOOTSTRAP - JQUERY",
//     projectRef:"https://zahra-kd.github.io/forkify/",
// },
// {
//     url:"image/e-com.png",
//     title: "Responsive design: HTML - BOOTSTRAP - SASS",
//     projectRef:"https://zahra-kd.github.io/surfside/",
// },
// {
//     url:"image/photoFolio.png",
//     title:"Responsive design: HTML - BOOTSTRAP",
//     projectRef:"https://zahra-kd.github.io/PhotoFolio/",
// },
// {
//     url:"image/trello.png",
//     title:"HTML - SASS",
//     projectRef:"https://zahra-kd.github.io/trello/"
// }]


const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const q = query(collection(firestore, 'projects'), orderBy("number", "asc"))
        onSnapshot(q, querySnapshot => {
            const firebaseProjects = [];
            querySnapshot.forEach(project => {
                firebaseProjects.push(project.data())
            })
            setProjects(firebaseProjects);
        })
    }, [])
    return (
        <div id='ProjectSection' className='projects container d-flex flex-column align-items-center'>
            <h2 className='col-10 text-center text-md-start'><span className='fs-4 me-3'>0.3</span>Projects</h2>
            <div className='row col-10 align-self-center'>
                {projects.map((element) =>{
                    return(
                        <Projectitem  key={element.title} path={element.url} title={element.title}  href={element.projectRef} />
                    )
                })}
            </div>
        </div>
    )
}


export default Projects