import React from 'react';
import { FiPower, FiTrash2} from 'react-icons/fi'; //feather icons
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile(){

return(

<div className="profile-container">
<header>
<img src={logoImg} alt="Be the hero"/>
<span>Seja bem vinda XXX</span>

<Link className="button" to="/incidents/new">Cadastrar novo caso</Link>

<button>
    <FiPower size={18} color="#E02041"/>
</button>


</header>




<h1>Casos cadastrados</h1>
<ul>

    <li>
        <strong>CASO:</strong>
        <p>caso teste</p>

        <strong>DESCRIÇÃP:</strong>
        <p>DESC teste</p>

        <strong>VALOR:</strong>
        <p>VAL teste</p>

        <button type="button">
        <FiTrash2 size={20} color="#a8a8b3" />
        </button>
    </li>

    <li>
        <strong>CASO:</strong>
        <p>caso teste</p>

        <strong>DESCRIÇÃP:</strong>
        <p>DESC teste</p>

        <strong>VALOR:</strong>
        <p>VAL teste</p>

        <button type="button">
        <FiTrash2 size={20} color="#a8a8b3" />
        </button>
    </li>

    <li>
        <strong>CASO:</strong>
        <p>caso teste</p>

        <strong>DESCRIÇÃP:</strong>
        <p>DESC teste</p>

        <strong>VALOR:</strong>
        <p>VAL teste</p>

        <button type="button">
        <FiTrash2 size={20} color="#a8a8b3" />
        </button>
    </li>

    <li>
        <strong>CASO:</strong>
        <p>caso teste</p>

        <strong>DESCRIÇÃP:</strong>
        <p>DESC teste</p>

        <strong>VALOR:</strong>
        <p>VAL teste</p>

        <button type="button">
        <FiTrash2 size={20} color="#a8a8b3" />
        </button>
    </li>

</ul>















</div>

);

}