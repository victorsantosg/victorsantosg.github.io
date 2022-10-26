import React from 'react';
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
    {id: 1, name: "linkedin", icon: <FaLinkedinIn/>},
    {id: 2, name: "github", icon: <FaGithub/>},
    {id: 3, name: "instagram", icon: <FaInstagram/>},
]

function SocialNetworks () {
  return (
    <section id="social-networks">
        {socialNetworks.map((network)=> (
            <a href="#" className='social-btn' id={network.name} key={network.name}>
            {network.icon}
            </a>
        ))}

    </section>
  );
};

export default SocialNetworks