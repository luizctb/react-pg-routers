// Página de Contato do projeto
// tImportar { Link } algumas páginas
// configura abaixo os Links <Link to="/contact/123">Forma de contato 123</Link>
// irá aparecer o link na tela.

import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <h1>Página de Contato</h1> 
            <p>
                <Link to="/contact/1">Forma de contato 1</Link>
            </p>
            <p>
                <Link to="/contact/2">Forma de contato 2</Link>
            </p>
            <p>
                <Link to="/contact/3">Forma de contato 3</Link>
            </p>
        </div>
    );
};

export default Contact;