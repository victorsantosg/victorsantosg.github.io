import React from 'react';
import SocialNetworks from './SocialNetworks';
import Avatar from '../img/victor.jpg';
import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';


function Sidebar () {
  return <aside id="sidebar">
    <img src={Avatar} alt="Victor Peixoto" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks/>
    <InformationContainer/>
    <a href="https://drive.google.com/file/d/1mIYVXtbMQNG8gFa_J9n6ZCgIq9bOlIoZ/view?usp=sharing" target='_blank' className="btn">
        Download currículo
    </a>
  </aside>
}

export default Sidebar