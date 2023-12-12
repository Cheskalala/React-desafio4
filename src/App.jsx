import React from 'react';
import MiApi from './componentes/MiApi';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="m-5">
      <h1>Welcome to the Country Explorer</h1>
      
      <MiApi />
    </div>
  );
};

export default App;