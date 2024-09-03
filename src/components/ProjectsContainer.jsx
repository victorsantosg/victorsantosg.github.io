import React from "react";
import '../styles/components/projectscontainer.sass';
import ProjectsNoAr from "./ProjectsNoAr";

const projectsall = [
  {id: 1, img: "public\contfinan2.png", link: "https://github.com/victorsantosg"},
  //{id: 2, img: "public\contfinan2.png", link: "https://financascontrole.netlify.app"},
]

function ProjectsContainer () {
  return ( 
    <section>
 {projectsall.filter(projects => projects.id).map(Filteredprojectsall => (
    <>
    <h2>Projetos</h2>
    {/* <p>Aqui você encontrará alguns dos meus projetos feitos no decorrer dessa jornada</p> */}
      {/* <a href={Filteredprojectsall.link} target='_blank' className='btn' id={Filteredprojectsall.id} key={Filteredprojectsall.id}>
      Projetos
      </a> */}
      <ProjectsNoAr className="project-externo"/>
    </> 
  ))}

</section>

)}
export default ProjectsContainer





    // <div className="projects-container">
    //   <ul>
    //     {projectsall.map(
    //      (item) => 
    //         item.id === '1' ? (
    //         <>
    //           <li key={id}>
    //             <a className='btn' href={item.link}>Ver</a>
    //           </li>  
    //             <li key={id}>
    //               {item.img}
    //             </li> 
    //        </>          
    //      ) : (
    //       []
    //      )
    //     )}
    //   </ul>
    // </div>