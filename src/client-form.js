import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';




const clientForm = (props) => {
  return (
    <div>
    <h1>Cadastro de Clientes</h1>
    <Form className="formulario-Cliente" id="form">
    <FormGroup>
      <Label for="client-name">Nome do Cliente</Label>
      <Input type="text" name="client-name" id="client-name" placeholder="Digite aqui nome do cliente" />
    </FormGroup>
    <FormGroup>
      <Label for="contact">Telefone</Label>
      <Input type="text" name="contact" id="telefone" placeholder="Telefone para contato" />
    </FormGroup>

    <FormGroup>
      <Label for="address">Endereço</Label>
      <Input type="text" name="address" id="address" placeholder="Rua, Bairro, Cidade e Estado" />
    </FormGroup>

       
    <Button>Salvar</Button>
    <Link to="/"><Button>Voltar</Button></Link>
  </Form>
  </div>
);
}
  
export default clientForm;