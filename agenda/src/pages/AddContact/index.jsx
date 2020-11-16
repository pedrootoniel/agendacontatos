import React, { useState } from 'react'
import axios from 'axios'
import { AddContactStyled } from './style' 

// import { Container } from './styles';

export const AddContact = ({ history }) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');

  const submitContact = () => {
      axios.post('http://localhost:3001/contacts',
          { name, phone, mail }).then((e) => {
              alert('Contato adicionado!');
              history.goBack();
          })
  }

  return (

    <AddContactStyled>
    
    <div className="contact">
    <h1>ADICIONAR CONTATO</h1>
    <p>Nome</p>
    <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="  SEU NOME COMPLETO"/>
    <p>Telefone</p>
    <input type="text" value={phone} onChange={e => setPhone(e.target.value)} required placeholder="  DIGITE O NUMERO DE TELEFONE" />
    <p>E-mail</p>
    <input type="text" value={mail} onChange={e => setMail(e.target.value)} required placeholder="  DIGITE E-MAIL VÁLIDO" />
    <button onClick={submitContact}>Adicionar</button>




    </div>



    </AddContactStyled>



  )
}

export default AddContact;