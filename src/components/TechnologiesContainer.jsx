import React from 'react';
import { TbBrandNextjs } from "react-icons/tb";
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiGithub,
    DiReact
} from 'react-icons/di';

import '../styles/components/technologiescontainer.sass';

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 />},
    { id: "js", name: "JavaScript", icon: <DiJsBadge />},
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />},
    { id: "react", name: "React", icon: <DiReact />},
    { id: "github", name: "GitHub", icon: <DiGithub />},
    { id: "nextjs", name: "Next.js", icon: <TbBrandNextjs />},
    { id: "analise", name: "AnalisedeDados", icon: <TbBrandDados />},
];

function TechnologiesContainer () {
    return <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                    </div>
                </div>
            ))}
        </div>

    </section>
}

export default TechnologiesContainer