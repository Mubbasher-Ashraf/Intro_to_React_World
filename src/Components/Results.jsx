import React from 'react';
import Pet from './Pet';

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.type || ''}
            key={pet.id || ''}
            name={pet.name || ''}
            breed={pet.breeds.primary || ''}
            media={pet.photo || ''}
            id={pet.id || ''}
            location={
              `${pet.contact.address.city}, ${pet.contact.address.state}` || ''
            }
          />
        ))
      )}
    </div>
  );
};

export default Results;
