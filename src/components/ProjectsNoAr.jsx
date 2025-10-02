import React from 'react'
import "../styles/components/projectsnoar.sass";

function ProjectsNoAr() {
    const projectsNoAr = [
        {id: 1, name: "Drum Machine 🎵🥁", img: "https://github.com/victorsantosg/app_drum/raw/main/img/img3.png", link:"https://github.com/victorsantosg/app_drum"},
        {id: 2, name: "Drum Machine 2.0 🎵🥁", img: "https://github.com/victorsantosg/app_drum_2.0/raw/main/img/img4.png", link:"https://github.com/victorsantosg/app_drum_2.0"},
        {id: 3, name: "Drum Machine 3.0 🎵🥁", img: "https://i.ibb.co/cKHSvNL5/Drum-Machine-Victor-S.jpg", link:"https://github.com/victorsantosg/app_drum_3.0"},
        {id: 4, name: "Analisando Dados com Python", img: "https://i.ibb.co/5W1BPZF6/Analisando-dados-empresa-Apostila-Jornada-Python-Aula-2-pdf-at-main-victorsantosg-Analisando-dados-e.jpg", link:"https://github.com/victorsantosg/Analisando_dados_empresa"},
        {id: 5, name: "Automação de Cadastro de Produtos com Python", img: "https://img-c.udemycdn.com/course/750x422/2364684_6b56_8.jpg", link:"https://github.com/victorsantosg/Automatizando_preenchimento_tabela"},
        {id: 6, name: "Projeto IA: Previsão de Score de Crédito", img: "https://media.licdn.com/dms/image/v2/D4D12AQE0V7D6BeOEIg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1732218680808?e=2147483647&v=beta&t=9m5htXuwixDTwtigui04ZDQU_4pN8fN9Byw9qeI_PVM", link:"https://github.com/victorsantosg/Projeto_Python_IA_Intelig-ncia_Artificial_e_Previs-es"},
        {id: 7, name: "ChatBot com IA", img: "https://www.codingal.com/resources/wp-content/uploads/2024/12/145.png", link:"https://github.com/victorsantosg/CHAT_BOT_COM_IA"},
        {id: 8, name: "Automação PyAutoGUI + OpenCV", img: "https://programadorviking.com.br/wp-content/uploads/2021/05/pyautogui-teclado.jpg", link: "https://github.com/victorsantosg/Automatizado_no_meu_trabalho"},
        {id: 9, name: "Controle de Finanças", img: "https://img.freepik.com/vetores-premium/conhecimento-em-financas-e-investimentos_327176-1095.jpg?w=740", link: "https://financascontrole.netlify.app/"},
        {id: 10, name: "Uniflix", img: "https://cdn.arstechnica.net/wp-content/uploads/2022/07/netflix-800x450.jpg", link: "https://uniflix.netlify.app/"},
        {id: 11, name: "Clima", img: "https://www.fmmetropole.com.br/arquivos/cache/noticia/antigas/Previsao-do-Tempo/PREVISAO-DO-TEMPO-METROPOLE-FM-605x.jpg", link: "https://climavictor.netlify.app"},
        {id: 12, name: "Portfólio Estudo", img: "https://www.investopedia.com/thmb/bJ_bKFNuXw2BXn-23gldyoyLHZk=/2121x1414/filters:fill(auto,1)/GettyImages-508126658-e57932d9c64246e5b2946582a3586881.jpg", link:"https://main--portfoliovictorr.netlify.app/"},
    ];

    

    return (
        <section id="social-networks-2">
            {projectsNoAr.filter(prowork => prowork.id).map (filteredProwork => (
              <>
              <div className='social-btn-2'>
                <a href={filteredProwork.link} id={filteredProwork.name} key={filteredProwork.id} target='_blank' rel="noopener noreferrer">
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

