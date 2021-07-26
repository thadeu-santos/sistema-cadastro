import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';




const productForm = (props) => {
  return (
    <div>
    <h1>Cadastro de Produtos</h1>
    <Form className="formulario-produto">
    <FormGroup>
      <Label for="product-name">Nome Produto</Label>
      <Input type="text" name="product-name" id="product-name" placeholder="Digite aqui o nome do produto" />
    </FormGroup>
    <FormGroup>
      <Label for="description">Descrição</Label>
      <Input type="text" name="description" id="Product-descrption" placeholder="Descriçao do produto" />
    </FormGroup>

    <FormGroup>
      <Label for="quantity">Quantidade</Label>
      <Input type="text" name="quantity" id="product-quantity" placeholder="Quantos itens?" />
    </FormGroup>

    <FormGroup>
      <Label for="price">Preço</Label>
      <Input type="text" name="price" id="product-price" placeholder="Quanto custa o produto?" />
    </FormGroup>

       
    <Button>Salvar</Button>
    <Link to="/"><Button>Voltar</Button></Link>
  </Form>
  </div>
);
}
  
export default productForm;