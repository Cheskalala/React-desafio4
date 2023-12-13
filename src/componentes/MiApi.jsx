// MiApi.js
import React, { useState, useEffect } from 'react';
import InfoPaises from './InfoPaises';
import Buscador from './Buscador';

const MiApi = () => {
  const [paises, setPaises] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const [filteredPaises, setFilteredPaises] = useState([]); 
  const [showDefault, setShowDefault] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
  
        if (!response.ok) {
          throw new Error('No se pudo obtener la información de la API.');
        }
  
        const data = await response.json();
        const countriesWithLanguages = await Promise.all(
          data.map(async (country) => {
            if (country.languages && country.languages.length > 0) {
              const langResponse = await fetch(`https://restcountries.com/v3.1/lang/${country.languages[0]}`);
              const langData = await langResponse.json();
              return { ...country, languages: langData };
            } else {
              return country;
            }
          })
        );
  
        setPaises(countriesWithLanguages);
        setIsFetch(true);
  
        if (showDefault) {
          const allCountries = countriesWithLanguages.slice(0, 195);
          setFilteredPaises(allCountries);
          setShowDefault(false);
        }
      } catch (error) {
        console.error('Error al cargar los datos:', error);
        setIsFetch(false);
      }
    };
  
    fetchData();
  }, [showDefault]);
  
  // Función para realizar la búsqueda y actualizar los resultados filtrados
  const handleSearch = (searchTerm) => {
    const filteredCountries = paises.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPaises(filteredCountries);
  };

  return (
    <div>
      <Buscador onSearch={handleSearch} />
      <h2>List of Countries</h2>
{isFetch ? (
  <div className="row row-cols-1 row-cols-md-4 g-4">
    {filteredPaises.length > 0 ? (
      filteredPaises.map((pais, index) => (
        <div className="col" key={index}>
          <InfoPaises country={pais} />
        </div>
      ))
    ) : (
      <p>No se encontraron países que coincidan con la búsqueda.</p>
    )}
  </div>
) : (
  <p>Cargando datos...</p>
)}
    </div>
  );
};

export default MiApi;
