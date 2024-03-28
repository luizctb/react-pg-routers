import './App.css'
// 2 - reparoveitamento de estrutura
import { Outlet } from 'react-router-dom'

// 4 - navegando entre as páginas
import Navbar from './components/Navbar';

function App() {
   return (
    <>
      <div className='App'>
        <Navbar />
        <h1> React Router</h1>
        <Outlet />
        <p>Footer</p>
      </div>      
    </>
  );
}

export default App;

// primeiro instalar o o react-router-dom
// limpar essa página retirando tudo que está dentro da primeira <div></div> conforme abaixo
// 2 reaproveitamento de estrutura, cada página será inserida nesse Outlet
// O <Outlet/> vai mudar na transição de páginas, importa o (import { Outlet } from 'react-router-dom')
// cada página do Router vai ter que ter o <Outlet/>
// para navegar entre as páginas configura o Navbar, primeiro importa ele
