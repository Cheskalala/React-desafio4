import React, { useState } from 'react';
import MiApi from './MiApi';

const Buscador = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Llamar a la función de búsqueda pasando el término de búsqueda como argumento
    onSearch(searchTerm);
  };

  return (
    <div className="input-group m-3 p-2 w-50 position-absolute top-50 start-50 translate-middle">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar por nombre..."
        aria-label="Buscar por nombre..."
        aria-describedby="button-addon2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="btn btn-danger"
        type="button"
        id="button-addon2"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
};

export default Buscador;
