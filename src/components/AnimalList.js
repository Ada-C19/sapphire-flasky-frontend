import './AnimalList.css'

import Animal from './Animal';

const AnimalList = () => {
    const firstAnimal = {
        name: "Violet",
        species: "pitbull mix"
    };
    const secondAnimal = {
        name: "Norman",
        species: "puppy"
    };
    const listOfAnimals = [
        firstAnimal,
        secondAnimal,
        {
            name: "Juni",
            species: "Poodle"
        }
    ];

    return (
    <section className="AnimalList">
        <h2>Animal List</h2>
        <ul className="AnimalList__list">
            { 
                listOfAnimals.map(creature => (
                    <li>
                        <Animal
                            name={ creature.name }
                            species={ creature.species }
                        />
                    </li>
                )) 
            }
        </ul>
    </section>
    )
};

export default AnimalList;