

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './routes/Home.tsx';
import Contact from './routes/Contact.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
import ContactDetails from './routes/ContactDetails.tsx';

// BASE INICIAL
// const router = createBrowserRouter([
//   {
//     path: "/", // página home
//     element: <Home /> // elemento principal da página Home
//   },
//   {
//     path: "contact", // página home
//     element: <Contact /> // elemento principal da página Contatct
//   },
// ]);


const router = createBrowserRouter([
  {
    path: "/", // página App
    element: <App />, // elemento principal da página App
    errorElement: <ErrorPage />, // 3 - página de erro
    children: [
      {
        path: "/", // página home
        element: <Home />, // elemento principal da página Home
      },
      {
        path: "contact", // página home
        element: <Contact />, // elemento principal da página Contatct
      },
      // 5 - nested routes - rodas em banco com identificador único - dynamic routes
      {
        path: "/contact/:id", // dado dinâmido id
        element: <ContactDetails />,
      },
      // 7 - navigate para páginas não existentes
      {
        path: "oldcontact", // não perder dados 
        element: <Navigate to="/contact" />,
      },
    ],
  },  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// Página principal do projeto
// nessa página configurar o router fazendo importações / import { createBrowserRouter, RouterProvider }
// criar constante router / const router = createBrowserRouter([]) que passa uma array que são as páginas
// criar pasta chamada routes no src / que terão as páginas do projeto
// Após criar a pasta routes e as páginas importar as duas páginas
// import Home from './routes/Home.tsx'; e import Contact from './routes/Contact.tsx';
// configurar o array que são objetos que rodam a página
// define o caminho da página: pat, element "componente principal da pg"
// no lugar do App do ReactDom colocar ( <RouterProvider router={router} /> )
// A rota vai estar dentro do children array com elementos dentro [filhos]
// importar a página de erro nessa página main.tsx
// configurar o (errorElement: <ErrorPage />,) na estrtura router conforme abaixo
// Depois de pronto cria-se as rotas aninhadas, 5 - nested routes - rodas em banco com identificador
// Para que o nest routes - identificador único funcione tem que criar (arquivo na pasta routes nesse caso foi ContactDetails.tsx)
// importado o ContactDetails
// path: "/contact/:id" (dado dinâmido id) e define o element: <ContactDetails />,



// 7 - REDIRECIONAMENTO POR COMPONENTE
// utilizado quando uma página deixa de existir no site - tpo: Navigate para páginas não existentes
// // importar Navigate
// {
//   path: "oldcontact", // não perder dados 
//   element: <Navigate to="/contact" />,
// },



