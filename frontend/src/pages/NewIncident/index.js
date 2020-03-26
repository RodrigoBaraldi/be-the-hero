import React from 'react';
import { FiArrowLeft} from 'react-icons/fi'; //feather icons
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident(){

return(
<div className="new-incident-container">
    <div className="content">
        <section>
            <img src={logoImg} alt="Be the Hero" />
            <h1>Cadastrar novo caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um herói que resolva isso!</p>
        
            <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
            </Link>
        
        </section>
    
    <form>

    <input placeholder="Título do Caso"/> 
    <textarea  placeholder="Descrição"/>
    <input placeholder="Valor em reais" />

    

<button className="button" type="submit">Cadastrar</button>

    </form>
    
    
    </div>
</div>

);

}