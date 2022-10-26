import React from 'react';
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
    {id: 1, name: "linkedin", icon: <FaLinkedinIn/>, link: "https://www.linkedin.com/in/victor-santos-0a86021b7/"},
    {id: 2, name: "github", icon: <FaGithub/>, link: "https://github.com/victorsantosg?tab=repositories"},
    {id: 3, name: "instagram", icon: <FaInstagram/>, link: "https://careerkarma.com/blog/git-fatal-remote-origin-already-exists/"}
]

function SocialNetworks () {
  return (
    <section id="social-networks">
        {socialNetworks.filter(network => network.id).map(filteredNetwork => (
          <>
            <a href={filteredNetwork.link} className='social-btn' id={filteredNetwork.name} key={filteredNetwork.name}>
            {filteredNetwork.icon}
            </a>
          </>
        ))}

    </section>
  );
};

export default SocialNetworks