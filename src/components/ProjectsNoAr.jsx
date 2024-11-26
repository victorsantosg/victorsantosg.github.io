import React from 'react'
import "../styles/components/projectsnoar.sass";

function ProjectsNoAr() {

    const projectsNoAr = [
        {id: 1, name: "Controle de Finanças", img: "https://img.freepik.com/vetores-premium/conhecimento-em-financas-e-investimentos_327176-1095.jpg?w=740", link: "https://financascontrole.netlify.app/"},
        {id: 2, name: "Uniflix", img: "https://cdn.arstechnica.net/wp-content/uploads/2022/07/netflix-800x450.jpg", link: "https://uniflix.netlify.app/"},
        {id: 3, name: "Clima", img: "https://www.fmmetropole.com.br/arquivos/cache/noticia/antigas/Previsao-do-Tempo/PREVISAO-DO-TEMPO-METROPOLE-FM-605x.jpg", link: "https://climavictor.netlify.app"},
        {id: 3, name: "Portfólio_estudo", img: "https://www.investopedia.com/thmb/bJ_bKFNuXw2BXn-23gldyoyLHZk=/2121x1414/filters:fill(auto,1)/GettyImages-508126658-e57932d9c64246e5b2946582a3586881.jpg", link:"https://main--portfoliovictorr.netlify.app/"}
    ]

    

    return (
        <section id="social-networks-2">
            {projectsNoAr.filter(prowork => prowork.id).map(filteredProwork => (
              <>
              <div className='social-btn-2'>
                <a href={filteredProwork.link} id={filteredProwork.name} key={filteredProwork.id} target='_blank'>
                  <br/>
                  <br/>
                  <img src={filteredProwork.img} key={filteredProwork.id}/>
                  </a>
                  <p id='p-project'>{filteredProwork.name}</p>
              </div>
              </>
            ))}
    
        </section>
      );
}

export default ProjectsNoAr