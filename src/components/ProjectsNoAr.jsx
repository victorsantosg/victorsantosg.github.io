import React from 'react'
import "../styles/components/projectsnoar.sass";

function ProjectsNoAr() {

    const projectsNoAr = [
        {id: 1, name: "Controle de Finanças", img: "https://gruponovus.com.br/wp-content/uploads/2020/06/Capa-finan%C3%A7as-768x432.jpg", link: "https://financascontrole.netlify.app/"},
        {id: 2, name: "Uniflix", img: "https://cdn.arstechnica.net/wp-content/uploads/2022/07/netflix-800x450.jpg", link: "https://uniflix.netlify.app/"},
        {id: 3, name: "Clima", img: "https://www.fmmetropole.com.br/arquivos/cache/noticia/antigas/Previsao-do-Tempo/PREVISAO-DO-TEMPO-METROPOLE-FM-605x.jpg", link: "https://climavictor.netlify.app"},
    ]

    

    return (
        <section id="social-networks-2">
            {projectsNoAr.filter(prowork => prowork.id).map(filteredProwork => (
              <>
              <div className='social-btn-2'>
                <a href={filteredProwork.link} id={filteredProwork.name} key={filteredProwork.id}>
                  <br/>
                  <br/>
                  <img src={filteredProwork.img} key={filteredProwork.id}/>
                  </a>
                  <p>{filteredProwork.name}</p>
              </div>
              </>
            ))}
    
        </section>
      );
}

export default ProjectsNoAr