import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom'
import List from './components/List'
import EditContact from './pages/EditContact'
import AddContact from './pages/AddContact'

function Routes(){

    return(

        <BrowserRouter>
            <Route path="/" exact component={List} />
            <Route path="/newcontact" component={AddContact} />
            <Route path="/contacts/:id" component={EditContact} />
        </BrowserRouter>


    )


}

export default Routes;