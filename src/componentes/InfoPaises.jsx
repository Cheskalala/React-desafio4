// InfoPaises.js
import React from 'react';
import { Card } from 'react-bootstrap';

const InfoPaises = ({ country }) => {
  return (
    <Card>
      <div className='d-flex'>
        <div>
          <h3>{country.name.common}</h3>
          <p>Capital: {country.capital}</p>
          <p>Moneda:</p>
          <ul style={{ listStyleType: 'none'}}> 
            {Object.entries(country.currencies || {}).map(([code, currency]) => (
              <li key={code}>
                {code}: ({currency.symbol}) {currency.name} 
              </li>
            ))}
          </ul>
        </div>
        
        <div>
  <p>Idiomas:</p>
  <ul>
    {country.languages && Object.keys(country.languages).map((key, index) => (
      <li key={index}>{country.languages[key]}</li>
    ))}
  </ul>
</div>
        
        <div>Bandera</div>
      </div>
    </Card>
  );
};

export default InfoPaises;
