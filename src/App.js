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
        // Method 1: Copy then modify.
        // let animal2 = {...animal};
        // animal2.isBookmarked = !animal.isBookmarked;
        // return animal2;

        // Method 2: Use spread syntax w/ override to create modified copy.
        return {
          ...animal,
          isBookmarked: !animal.isBookmarked
        }
      }

      return animal;
    });

    setAnimals(updatedAnimals);
  }

  // This function will try to delete an animal by sending a DELETE request to our backend (we'll need to confirm details about this request with our backend (what is the verb? path? any expected params? how do we pass in animalId?))
  // THEN if the delete is successful (status code 200), we'll update the state of animals (using our original logic)
  const updateDelete = (animalId) => {

    // make a delete request to our correct "delete endpoint" in our backend...
    axios.delete(`http://127.0.0.1:5000/animals/${animalId}`)
      .then((response) => {
        // then, if it's successful, console.log the data, then update animals state
        console.log('response', response.data);
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
      })
      .catch((error) => {
        // if it's not successful, print out error details for now
        console.log('could not delete animal', error, error.response);
      });
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
