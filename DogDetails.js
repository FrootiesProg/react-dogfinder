import React from "react";
import { useParams } from "react-router-dom";

function DogDetails(props) {
  const { dogs } = props;
  const { name } = useParams();


  const currentDog = dogs.find((dog) => dog.name === name);

  if (!currentDog) {
    return <h2>Dog not found</h2>;
  }

  return (
    <div>
      <h2>{currentDog.name}</h2>
      <img src={currentDog.image} alt={currentDog.name} />
      <p>Age: {currentDog.age} years</p>
      <p>Breed: {currentDog.breed}</p>
      <h3>Facts:</h3>
      <ul>
        {currentDog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
