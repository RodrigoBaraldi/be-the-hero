import React from 'react';
import { FiLogIn} from 'react-icons/fi'; //feather icons

import './styles.css';

import  heroesImg from '../../assets/heroes.png';
import  logoImg from '../../assets/logo.svg';


export default function Logon(){

return(

  <div className="logon-container">
<section className="form">
    <img src={logoImg} alt="Be The Hero" />

    <form>
        <h1>Faça o seu Logon</h1>
        <input placeholder="Sua ID" />
        <button className="button" type="submit">Entrar</button>
   
   <a href="/register"><FiLogIn size='14' color='#E02041'   />Não tenho cadastro</a>
   
   
    </form>
</section>
    <img src={heroesImg} alt="Heroes" />
  </div>
);

}