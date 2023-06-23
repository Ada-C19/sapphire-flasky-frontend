import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewAnimalForm.css";

const INITIAL_FORM_DATA = {
  name: "",
  age: 0,
  species: ""
};

function NewAnimalForm(props) {
  const [animalFormData, setAnimalFormData] = useState(INITIAL_FORM_DATA);

  const anInputChanged = (evt) => {
    // console.log(evt);

    if (evt.target.name === "age" && evt.target.value < 0) {
      return
    }

    const newAnimalFormData = {
      ...animalFormData,
      [evt.target.name]: evt.target.value
    };

    setAnimalFormData(newAnimalFormData);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Congrats! You pressed submit!!")
    props.createNewAnimal();
  }

  return (
    <section className="AnimalList">
      <h2>Create New Animal</h2>
      <form className="stack" onSubmit={handleFormSubmit}>
        <label htmlFor="animalName">Name:</label>
        <input
          id="animalName"
          name="name"
          type="text"
          value={ animalFormData.name }
          onChange={ anInputChanged }
        />
        <label htmlFor="animalAge">Age:</label>
        <input
          id="animalAge"
          name="age"
          type="number"
          value={ animalFormData.age }
          onChange={ anInputChanged }
        />
        <label htmlFor="animalSpecies">Species:</label>
        <input
          id="animalSpecies"
          name="species"
          type="text"
          value={ animalFormData.species }
          onChange={ anInputChanged }
        />
        <input type="submit" value="Add new animal"></input>
      </form>
    </section>
  )
}

NewAnimalForm.propTypes = {
  createNewAnimal: PropTypes.func.isRequired
}

export default NewAnimalForm;
