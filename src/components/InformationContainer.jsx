import React from 'react';

import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai';

import '../styles/components/informationcontainer.sass';

function InformationContainer() {
  return <section id="information">
    <div className="info-card">
      <AiFillPhone id="phone-icon"/>
      <div>
        <h3>Telefone</h3>
        <p>(85)99955-6385</p>
      </div>
    </div>

    <div className="info-card">
      <AiOutlineMail id="email-icon"/>
      <div>
        <h3>E-mail</h3>
        <p className="email-vic">victoorsaantos16@gmail.com</p>
      </div>
    </div>

    <div className="info-card">
      <AiFillEnvironment id="pin-icon"/>
      <div>
        <h3>Localização</h3>
        <p>Fortaleza / Ceará</p>
      </div>
    </div>
  </section>
  
}

export default InformationContainer