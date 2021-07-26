import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import CadastroCliente from './pages/Cadastro-cliente';
import CadastroProduto from './pages/Cadastro-produto';


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/cadastro-cliente" component={CadastroCliente} />
                <Route path="/cadastro-produtos" component={CadastroProduto} />                
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;