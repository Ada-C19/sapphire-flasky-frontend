import { useState, useEffect } from "react";
import './App.css';
import AnimalList from './components/AnimalList';
import NewAnimalForm from "./components/NewAnimalForm";
import axios from 'axios';

function App() {
  const [animals, setAnimals] = useState([]);

  const loadAnimals = () => {
    axios
      .get("http://127.0.0.1:5000/animals")
      .then((response) => {
        const initialAnimalData = [];
        response.data.forEach((animal) => {
          initialAnimalData.push(animal);
        });
        setAnimals(initialAnimalData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  useEffect( () => {
    loadAnimals();
  }, []);

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

  const updateDelete = (animalId) => {
    axios.delete(`http://127.0.0.1:5000/animals/${animalId}`)
      .then((response) => {
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

  const createNewAnimal = (newAnimalInfo) => {
    // add sanctuary_id as a key so flask doesn't freak out 
    const updateNewAnimalInfo = {
      ...newAnimalInfo,
      "sanctuary_id": null
    }

    axios
      .post("http://127.0.0.1:5000/animals", updateNewAnimalInfo)
      .then(() => {
        // TWO OPTIONS:
        //  make another GET request to refresh the page <-- DO THIS! 
        // loadAnimals();

        // update the animals state to refresh the page
        const newAnimalsArray = [...animals];
        newAnimalsArray.push(newAnimalInfo);
        setAnimals(newAnimalsArray)

      })
      .catch((error) => {
        console.log(error);
      });
  } 

  // Comments outside of JSX (but still in JavaScript (aka JS that is not "returned")) can still be //'s.
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      <NewAnimalForm createNewAnimal={createNewAnimal}/>
      <AnimalList 
        listOfAnimals={animals} 
        updateBookmark={updateBookmark} 
        updateDelete={updateDelete}
      ></AnimalList>
    </section>
  );
}

export default App;
