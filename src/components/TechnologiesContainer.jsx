import React from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';
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
    { id: "python", name: "Python", icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
        <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z" /><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z" />
        </svg>},
    { id: "pandas", name: "Pandas", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="auto">
        <rect fill="#130754" x="40" y="10" width="20" height="180" rx="5" />
        <rect fill="#E70488" x="90" y="10" width="20" height="180" rx="5" />
        <rect fill="#130754" x="140" y="10" width="20" height="180" rx="5" />
        </svg>},
    { id: "plotly", name: "Plotly", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="auto">
        <path fill="#3F4F75" d="M4 4h40v40H4z" />
        <circle cx="15" cy="15" r="4" fill="#08C" /> 
        <circle cx="25" cy="20" r="4" fill="#08C" /> 
        <circle cx="35" cy="10" r="4" fill="#08C" /> 
        <circle cx="15" cy="30" r="4" fill="#08C" /> 
        <circle cx="25" cy="35" r="4" fill="#08C" /> 
        </svg>},
    { id: "scikit-learn", name: "Scikit-learn", icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="100%" height="auto">
        <circle cx="128" cy="128" r="120" fill="#f89939" />
        <text x="50%" y="55%" textanchor="middle" fill="white" fontsize="{72}" fontfamily="Arial" fontweight="bold">sk</text>
        </svg>},
    { id: "pyautogui", name: "PyAutoGui", icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="100%" height="auto">
        <rect width="256" height="256" fill="#0C3C60" />
        <path d="M128 32 L128 224 M32 128 L224 128" stroke="#FFD43B" strokewidth="{16}" />
        <circle cx="128" cy="128" r="24" fill="#FFD43B" />
        </svg>},
    { id: "streamlit", name: "Streamlit", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="100%" height="auto">
        <circle cx="128" cy="128" r="120" fill="#FF4B4B" />
        <path fill="#fff" d="M64 128c0-35 56-35 56 0s-56 35-56 0z" />
        </svg>},
    { id: "tkinter", name: "Tkinter", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="100%" height="auto">
        <rect width="256" height="256" fill="#1E1E1E" />
        <path fill="#FFD43B" d="M64 64h128v128H64z" />
        <path fill="#0C3C60" d="M128 64v128 M64 128h128" stroke="#FFD43B" strokewidth="{8}" />
        </svg>},
    { id: "sqlite", name: "SQLite", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="100%" height="auto">
        <rect width="256" height="256" fill="#07405E" />
        <circle cx="128" cy="128" r="80" fill="#FFF" />
        <text x="50%" y="55%" textAnchor="middle" fill="#07405E" fontSize={48} fontFamily="Arial" fontWeight="bold">SQL</text>
        </svg>},
    { id: "js", name: "JavaScript", icon: <DiJsBadge />},
    { id: "react", name: "React", icon: <DiReact />},
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />},
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 />},
    { id: "analytics", name: "AnalyticsData", icon: <BarChartIcon />},
    { id: "vitejs", name: "Vite.Js", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><linearGradient id="a" x1="6" x2="235" y1="33" y2="344" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#41d1ff" /><stop offset="1" stopColor="#bd34fe" /></linearGradient><linearGradient id="b" x1="194.651" x2="236.076" y1="8.818" y2="292.989" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffea83" /><stop offset=".083" stopColor="#ffdd35" /><stop offset="1" stopColor="#ffa800" /></linearGradient></defs><path fill="url(#a)" d="M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Zm0 0" /><path fill="url(#b)" d="M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43Zm0 0" /></svg>},
    { id: "github", name: "GitHub", icon: <DiGithub />},
    { id: "nextjs", name: "Next.js", icon: <TbBrandNextjs />},
    
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