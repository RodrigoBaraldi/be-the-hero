import React from  'react';
import { FiArrowLeft} from 'react-icons/fi'; //feather icons
import { Link } from 'react-router-dom';

import './styles.css';

import  logoImg from '../../assets/logo.svg';

export default function Register(){

return (

<div className="register-container">
    <div className="content">
        <section>
            <img src={logoImg} alt="Be the Hero" />
            <h1>Cadastro</h1>
            <p>Faça agora o seu cadastro! Entre na nossa plataforma e ajude as pessoas a encontrarem casos das ONGS.</p>
        
            <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
            </Link>
        
        </section>
    
    <form>

    <input placeholder="Nome da Ong"/> 
    <input type="email" placeholder="E-mail"/>
    <input placeholder="WhatsApp" />

    <div className="input-group">
        <input placeholder="Cidade"/>
        <input placeholder="UF"  style={{ width:80}}   />
    </div>

<button className="button" type="submit">Cadastrar</button>

    </form>
    
    
    </div>
</div>

);

}