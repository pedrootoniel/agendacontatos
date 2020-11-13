import React from 'react';
import { EditContactStyled } from './style'

// import { Container } from './styles';

function EditContact() {
    return (
        <EditContactStyled>

            <div className="editcontact">
                <h1>Editar Contato</h1>
                <p>Nome</p>
                <input type="text" required placeholder="  SEU NOME COMPLETO" />
                <p>Telefone</p>
                <input type="text" required placeholder="  DIGITE O NUMERO DE TELEFONE" />
                <p>E-mail</p>
                <input type="text" required placeholder="  DIGITE E-MAIL VÁLIDO" />
                <div className="btn-group">

                    <button type="submit" className="delete">Deletar</button>

                    <button type="submit" className="save">Salvar</button>


                </div>




            </div>



        </EditContactStyled>




    )
}

export default EditContact;