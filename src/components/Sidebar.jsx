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
    <a href="https://www.canva.com/design/DAFnq41X49M/NT-tQN_IKDPK7Nqt1g3mbA/view?utm_content=DAFnq41X49M&utm_campaign=designshare&utm_medium=link&utm_source=editor" target='_blank' className="btn">
        Download currículo
    </a>
  </aside>
}

export default Sidebar