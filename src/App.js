import { useState } from "react";
import './App.css';
import AnimalList from './components/AnimalList';

const INITIAL_ANIMALS = [
  {
    id: 100,
    name: "Violet",
    species: "pitbull mix",
  },
  {
    id: 101,
    name: "Norman",
    species: "Pyrenees puppy",
  },
  {
    id: 102,
    name: "Juni",
    species: "Poodle",
    photo: "https://images.dog.ceo/breeds/poodle-toy/n02113624_333.jpg",
  },
  {
    id: 103,
    name: "Sabine",
    species: "Dog",
  },
  {
    id: 104,
    name: "Paprika and Braven",
    species: "Kittens",
    photo:
      "https://www.felinefriendsofsammamish.com/app/pet/img/000359-008.jpg",
  },
];

function App() {
  const [animals, setAnimals] = useState(INITIAL_ANIMALS);


  // Comments outside of JSX (but still in JavaScript (aka JS that is not "returned")) can still be //'s.
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      <AnimalList listOfAnimals={animals} ></AnimalList>
    </section>
  );
}

export default App;
