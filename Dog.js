import React from 'react';
import { useParams } from 'react-router-dom';

function Dog({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find((d) => d.name === name);

  if (!dog) {
    return <h2>Dog not found</h2>;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <h2>Breed: {dog.breed}</h2>
    </div>
  );
}

export default Dog;
