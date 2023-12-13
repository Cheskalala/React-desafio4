import React from 'react';
import MiApi from './componentes/MiApi';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="m-5">
      <h1>Welcome to the Country Explorer</h1>
      <div className='grid-auto'>
        <MiApi />
      </div>
      
    </div>
  );
};

export default App;