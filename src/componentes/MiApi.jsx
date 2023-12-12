// MiApi.js
import React, { useState, useEffect } from 'react';
import InfoPaises from './InfoPaises';

const MiApi = () => {
  const [paises, setPaises] = useState([]);
  const [isFetch, setIsFetch] = useState(false);

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
              // Manejar el caso en que no haya idiomas definidos para el país.
              return country;
            }
          })
        );

        setPaises(countriesWithLanguages);
        setIsFetch(true);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
        setIsFetch(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>List of Countries</h2>
      {isFetch ? (
        <ul>
          {paises.map((pais, index) => (
            <li key={index}>
              <InfoPaises country={pais} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default MiApi;
