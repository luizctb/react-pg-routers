// criado a Barar de Navegação para navegação entre as páginas
// Componente { Link } para navegação vem react-router-dom 
// (<Link to="/">Home</Link>) o to é para o onde o usuário vai quando clica


import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/contact">Contactos</Link>
            </div>
        </nav>
    );
};

export default Navbar;