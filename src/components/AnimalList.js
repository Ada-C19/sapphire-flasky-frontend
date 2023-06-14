import './AnimalList.css'

import Animal from './Animal';

const AnimalList = () => {
    const listOfAnimals = [
        {
            name: "Violet",
            species: "pitbull mix"
        },
        {
            name: "Norman",
            species: "puppy"
        },
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
                listOfAnimals.map(creature => (<li>
                        <Animal
                            name={ creature.name }
                            species={ creature.species }
                        />
                    </li>)
                ) 
            }
        </ul>
    </section>
    );
};

export default AnimalList;