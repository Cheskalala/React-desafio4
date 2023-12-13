// InfoPaises.js
import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap';

const InfoPaises = ({ country }) => {
  return (
    <Card className=' text-center bg-warning-subtle'style={{ height: '575px', }}>
         <CardBody  >
            <CardImg className='mb-3'
              src={country.flags.png}
              alt={`${country.name.common} Flag`}
              style={{ width: '100%',height: '200px' }}/>
          <CardTitle className='fw-bolder'> {country.name.common}</CardTitle>

      <CardText className=''>

        <div>
        <div className='d-flex col fw-bold me-2'>Capital: <p className='fw-normal' >{country.capital}</p></div>
<div className='d-flex col '>
  <div className='fw-bold me-1'>Moneda:</div>
  <ul style={{ listStyleType: 'none'}}>
    {Object.entries(country.currencies || {}).map(([code, currency]) => (
      <li  key={code}>
        {code}: ({currency.symbol}) {currency.name}
      </li>
    ))}
  </ul>
</div>
        
        
        
<div className='d-flex col'>
  <div className='fw-bold me-1'>Idiomas:</div>
  <ul className='text-start' style={{ listStyleType: 'none' }}>
  {country.languages && Object.keys(country.languages).map((code, index) => (
    <li key={index}>
      {code}: {country.languages[code]}
    </li>
  ))}
  </ul>
</div>
</div>
      </CardText>
        
        </CardBody>
    </Card>
  );
};

export default InfoPaises;
