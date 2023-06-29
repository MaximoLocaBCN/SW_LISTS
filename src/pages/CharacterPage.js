import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { planetSources, peopleSources } from '../components/images/imageSources';
import getInfo from '../services/getInfo';
import './CharacterPage.css'

function CharacterPage() {
  const [location] = useLocation();
  const params = location.split('/').filter(Boolean);
  const attribute = params[0]; // The attribute is at position 0
  const characterId = params[1]; // The character ID is at position 1
  
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false)

  useEffect(() => { //si el valor resultante de la condición es "sí", se mirara "planets" y si el valor es "no", se mirara "people"
    setLoading(true) //antes de que cargue todos los datos de la pagina, le diremos que tiene que poner un estado de "Loading"
      getInfo(attribute, characterId) //si le decimos que busque unicamente por "attribute" y por "id", en vez de "characterImage.attribute/id", le direos que busque en la base de datos, y no solo entre las imagenes que hemos puesto.
        .then((data) => {
          setInfo(data);
          setLoading(false) //una vez se haya cargado todo, se acabara el estado de "Loading"
        })
        .catch((error) => {
          console.log('Error:', error);
        });
  }, [attribute, characterId]);

  const isPlanet = attribute === 'planets';

  if (loading) return <div className='loader'></div>

  return (
    <div className='page'>
    <h1>{info?.name}</h1>
      {info && (
        <div  className='info-page'>
          {isPlanet ? (
            <>
              <p><strong>Planet Diameter:</strong> {info.diameter}</p>
              <p><strong>Climate:</strong> {info.climate}</p>
              <p><strong>Terrain:</strong> {info.terrain}</p>
              <p><strong>Population:</strong> {info.population}</p>
              {/* Add more planet details here */}
            </>
          ) : (
            <>
              <p><strong>Height:</strong> {info.height}</p>
              <p><strong>Mass: </strong>{info.mass}</p>
              <p><strong>Birth Year: </strong>{info.birth_year}</p>
              <p><strong>Gender: </strong>{info.gender}</p>
              {/* Add more character details here */}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default CharacterPage;