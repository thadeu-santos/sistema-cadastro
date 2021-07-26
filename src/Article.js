import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Button } from 'reactstrap';
import './styles.css';
import { Link } from 'react-router-dom';



const Article = (props) => {
  return (
    <div>
      <Jumbotron fluid className="botao-cadastro">
        <Container fluid>
          <h1 className="display-3">O que você deseja cadastrar?</h1>
          <p className="lead">Bem-vind@! Escolha abaixo qual categoria deseja cadastrar.</p>
            <Link to="/cadastro-cliente"><Button color="primary" size="lg" >Novo cliente</Button>{' '}</Link>
            <Link to="/cadastro-produtos"><Button color="primary" size="lg"to="/cadastro-produtos">Novo Produto</Button></Link>

        </Container>
      </Jumbotron>
    </div>
  );
};


export default Article;