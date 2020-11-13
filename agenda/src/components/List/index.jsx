import React from 'react';
import { ListStyled } from './style'

// import { Container } from './styles';

function List() {
  return(


    <ListStyled>
      
    <div className="container-list">
    
    <strong><i class="far fa-user"></i> Nome</strong>
    <p><i class="fas fa-phone"></i> Telefone</p>
    <p><i class="fas fa-at"></i> E-mail</p>



    </div>

    <div className="container-list">
    
    <strong><i class="far fa-user"></i> Nome</strong>
    <p><i class="fas fa-phone"></i> Telefone</p>
    <p><i class="fas fa-at"></i> E-mail</p>



    </div>




    </ListStyled>


  )
}

export default List;