import { useState, useEffect } from "react";
import './App.css';
import AnimalList from './components/AnimalList';
import axios from 'axios';

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect( () => {
    axios.get('http://127.0.0.1:5000/animals')
      .then( (response) => {
        const initialAnimalData = [];
        response.data.forEach(animal => {
          initialAnimalData.push(animal);
        });
        setAnimals(initialAnimalData);
      })
      .catch( (error) => {
        console.log('error', error);
      });
  }, [])

  const updateBookmark = (animalId) => {

    // create a new list of animals with updated bookmark value
    const updatedAnimals = animals.map(animal => {
      if (animal.id === animalId) {
        animal.isBookmarked = !animal.isBookmarked;
      };
      return {...animal}
    });

    setAnimals(updatedAnimals);
  }

  const updateDelete = (animalId) => {
    const updatedAnimals = animals.map((animal) => {
      if (animal.id !== animalId) {
        return { ...animal };
      }
    });

    // taken from https://stackoverflow.com/questions/28607451/removing-undefined-values-from-array
    const filteredUpdatedData = updatedAnimals.filter(function (element) {
      return element !== undefined;
    });

    setAnimals(filteredUpdatedData);
  }


  // Comments outside of JSX (but still in JavaScript (aka JS that is not "returned")) can still be //'s.
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      <AnimalList 
        listOfAnimals={animals} 
        updateBookmark={updateBookmark} 
        updateDelete={updateDelete}
      ></AnimalList>
    </section>
  );
}

export default App;
