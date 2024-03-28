

import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () => {
    const { id } = useParams();

    // 6 - redirect navgate
    const navigate = useNavigate()

    const handleContact = () => {
        console.log("Contato Enviado!");
        return navigate("/");
    };

    return (
        <div>
            <h1>Exibindo mais informações de contato: {id}</h1>
            <button onClick={handleContact}>Enviar mensagem</button>
        </div>
    );
};

export default ContactDetails;


// Criado esse arquivo ( ContactDetails ) Para que o nest routes - identificador único funcione 
// interface para o usuário
// Import o hook (import { useParams } from "react-router-dom";) para deixar as rotas dinâmicas 
// o useParams para extrair as informações da url
// criado ( const { id } = useParams();)

// 6 - REDIRECIONAMENTO POR LÓGICA
// 6 - Hook useNavigate - permite navegação entre páginas na parte da lógica. exemplo,
// só importar junto ao eseParams o useNavigate
// coloca o button no return <button onClick={handleContact}>Enviar mensagem</button>
// const navigate = useNavigate() e cria essa párte conforme código
// const handleContact = () => {
//     console.log("Contato Enviado!");
//     return navigate("/");
// };


// 7 - REDIRECIONAMENTO POR COMPONENTE
// utilizado quando uma página deixa de existir no site - tpo: Navigate para páginas não existentes
// importar Navigate