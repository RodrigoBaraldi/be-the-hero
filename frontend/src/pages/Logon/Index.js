import React, {useState} from  'react';
import { FiLogIn} from 'react-icons/fi'; //feather icons
import { Link , useHistory} from 'react-router-dom';

import './styles.css';

import  heroesImg from '../../assets/heroes.png';
import  logoImg from '../../assets/logo.svg';
import api from '../../services/api';


export default function Logon(){

const [id,setId] = useState('');

const history = useHistory();

async function handleLogin(e){

  
  e.preventDefault();

  try {
    const response = await api.post('sessions',{id});
    localStorage.setItem('ongId',id);
    localStorage.setItem('ongName',response.data.name);
    history.push('/profile');
  } catch(err){
  alert('Ops, tente novamente.');
  }
}


return(

  <div className="logon-container">
<section className="form">
    <img src={logoImg} alt="Be The Hero" />

    <form onSubmit={handleLogin}>
        <h1>Faça o seu Logon</h1>
        <input placeholder="Sua ID"
        value={id}
        onChange={e=>setId(e.target.value)}
        />



        <button className="button" type="submit">Entrar</button>
   
   <Link className="back-link" to="/register"><FiLogIn size='14' color='#E02041'   />Não tenho cadastro</Link>

   
    </form>
</section>
    <img src={heroesImg} alt="Heroes" />
  </div>
);

}