import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { EditContactStyled } from './style'

// import { Container } from './styles';

export const EditContact = ({ match, history }) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:3001/contacts/${match.params.id}`).then(resp => {
            setName(resp.data.name)
            setPhone(resp.data.phone)
            setMail(resp.data.mail)
        })
    }, [])

    const submitSave = () => {
        axios.put(`http://localhost:3001/contacts/${match.params.id}`,
            { name, phone, mail }).then((e) => {
                alert('Contato atualizado!');
                history.goBack()
            })
    }

    const removeContact = () => {
        axios.delete(`http://localhost:3001/contacts/${match.params.id}`).then((e) => {
            alert('Contato excluído!')
            history.goBack()
        })
    }

    return (
        <EditContactStyled>

            <div className="editcontact">
                <h1>Editar Contato</h1>
                <p>Nome</p>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <p>Número</p>
                <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
                <p>E-mail</p>
                <input type="text" value={mail} onChange={e => setMail(e.target.value)} />

                <div className="btn-group">
                    <button className="delete" onClick={removeContact}>Apagar</button>
                    <button className="save" onClick={submitSave}>Salva</button>
                </div>


            </div>



        </EditContactStyled>




    )
}

export default EditContact;