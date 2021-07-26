import React from 'react';



class Footer extends React.Component{
    render(){
        return(
            <div>
                <section className="rodape">
                    <ul>
                        <li className="autor"><h3>Desenvolvedor: Thadeu dos Santos</h3>
                            <p>Projeto desenvolvido dentro das atividades do Hiring Coders 2021 - VTex</p>
                            <p>Contato: thadeulsantos@gmail.com</p>
                        </li>
                    </ul>
                 </section>
            </div>
        );
    }
}

export default Footer;