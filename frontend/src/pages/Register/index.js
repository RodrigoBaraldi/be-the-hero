import React, {useState} from  'react';

import { FiArrowLeft} from 'react-icons/fi'; //feather icons
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import  logoImg from '../../assets/logo.svg';

export default function Register(){

const[name, setName]=useState('');
const[email, setEmail]=useState('');
const[whatsapp, setWhatsaapp]=useState('');
const[city, setCity]=useState('');
const[uf, setUf]=useState('');

const history=useHistory();



async function handleRegister(e){

  
    e.preventDefault();

    const data={
    name,
    email,
    whatsapp,
    city,
    uf
    }

    try {
    const response = await api.post('/ongs', data);

    alert(`O Id de sua ONG é ${response.data.id}`);

    history.push('/'); 
    
    } catch(err){
        alert(err);
    }
}





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
    
    <form onSubmit={handleRegister}>

    <input 
    placeholder="Nome da Ong"
    value={name}
    onChange={e=>setName(e.target.value)}
    />


    <input
    type="email" 
    placeholder="E-mail"
    value={email}
    onChange={e=>setEmail(e.target.value)}
    />


    <input 
    placeholder="WhatsApp" 
    value={whatsapp}
    onChange={e=>setWhatsaapp(e.target.value)}
    />

    <div className="input-group">
        <input placeholder="Cidade"
        value={city}
        onChange={e=>setCity(e.target.value)}
        />
        <input placeholder="UF"  style={{ width:80}}
        value={uf}
        onChange={e=>setUf(e.target.value)}
        />
    </div>

<button className="button" type="submit">Cadastrar</button>

    </form>
    
    
    </div>
</div>

);

}