import React from 'react';
import MiApi from './componentes/MiApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  return (
    <div className="">
      <header className='banner'> 
      <h1 className='text-dark text-center'>Conociendo el mundo</h1>
      </header>
      <h2 className='text-center m-5 '>Lista de paises</h2>
      <div className='body'>
        <MiApi />
      </div>
      <div className='footer'>
        <p className='textoFooter fw-semibold'>Explora el mundo país por país con datos detallados. Amplía tus conocimientos globales con nuestra información completa.</p>
      </div>
      
    </div>
  );
};

export default App;