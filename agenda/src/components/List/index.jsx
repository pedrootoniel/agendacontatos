import React,{useState,useEffect} from 'react';
import axios from 'axios'
import { ListStyled } from './style'
import {Link} from 'react-router-dom'

// import { Container } from './styles';

export const List = props => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3001/contacts').then(resp => {
          setContacts(resp.data)
      })
  }, []);

  return (

    <ListStyled>
   {
     contacts.map(cont => (

   
       
    <div className="container-list" key={cont.id}>
      <Link to={`/EditContact/${cont.id}`}>
    <strong><i class="far fa-user"></i> {cont.name} </strong>
    <p><i class="fas fa-phone"></i> {cont.phone} </p>
    <p><i class="fas fa-at"></i> {cont.mail} </p>
    </Link>



    </div>
      ))

} 




 
    </ListStyled>


  )
}

export default List;