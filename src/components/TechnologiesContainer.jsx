import React from 'react';
import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact
} from 'react-icons/di';

import '../styles/components/technologiescontainer.sass';

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, text: "Alguma coisa 1" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, text: "Alguma coisa 2"  },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Alguma coisa 3"  },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, text: "Alguma coisa 4"  },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, text: "Alguma coisa 5" },
    { id: "react", name: "React", icon: <DiReact />, text: "Alguma coisa 6" },
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
                        <p>
                            {tech.text}
                        </p>

                    </div>
                </div>
            ))}
        </div>

    </section>
}

export default TechnologiesContainer