// Página de erro
// quando criado uma roda não localizada gera esse erro como página
// importar a página de erro ne página main.tsx
// configurar o (errorElement: <ErrorPage />,) na estrtura router na main.tsx


const ErrorPage = () => {
    return (
        <div>
            <p>Erro 404!</p>
        </div>
    );
};

export default ErrorPage