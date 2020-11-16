import React from 'react';
import {HeaderStyled} from './style'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

// import { Container } from './styles';

function Header() {
  return(

    
    <HeaderStyled>

  <div className="container-header">

    <a href="#"><img src={Logo}></img></a>
    <div className="nav">

   
        
        <a href="/"> Home </a>
        <a href="/AddContact"> ADICIONAR CONTATOS </a>
        <a href="/EditContact"> ADQUIRIR MAIS CONTATOS </a>

    <div className="fixedcallicon">
	  <i class="fa fa-phone"></i><span className="hide">4002-8922</span>
    </div>

    </div>



  </div>



    </HeaderStyled>



  )
}

export default Header;