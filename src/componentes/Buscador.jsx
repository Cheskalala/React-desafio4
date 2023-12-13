import React, { useState } from 'react';
import MiApi from './MiApi';

const Buscador = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Llamar a la función de búsqueda pasando el término de búsqueda como argumento
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default Buscador;
