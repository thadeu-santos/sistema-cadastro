import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';


const  Headers = (props) => {
    
  return (
    <div>
      <Navbar color="primary" light expand="md">
        <NavbarBrand href="/" className="nome-sistema">SISTEMA DE CADASTRO</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Headers;