import React from 'react';
import { AddContactStyled } from './style' 

// import { Container } from './styles';

function AddContact() {
  return(

    <AddContactStyled>
    
    <div className="contact">
    <h1>ADICIONAR CONTATO</h1>
    <p>Nome</p>
    <input type="text" required placeholder="  SEU NOME COMPLETO"/>
    <p>Telefone</p>
    <input type="text" required placeholder="  DIGITE O NUMERO DE TELEFONE" />
    <p>E-mail</p>
    <input type="text" required placeholder="  DIGITE E-MAIL VÁLIDO" />
    <button type="submit">Adicionar</button>




    </div>



    </AddContactStyled>



  )
}

export default AddContact;