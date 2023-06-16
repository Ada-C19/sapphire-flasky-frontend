import './AnimalList.css'
import PropTypes from 'prop-types';

import Animal from './Animal';

const AnimalList = (props) => {
    // If the parameter is props instead, you can do these!
    const listOfAnimals = props.listOfAnimals;
    // const { listOfAnimals } = props;

    console.log(props);

    return (
    <section className="AnimalList">
        <h2>Animal List</h2>
        <ul className="AnimalList__list">
            {
                // This embedded JSX snippet is responsible for
                // 1. Reading the prop named listOfAnimals
                // 2. Generating an <li> element for each creature in listOfAnimals
                listOfAnimals.map((creature) => (
                    <li key={creature.id}>
                        <Animal
                            id = { creature.id }
                            name={ creature.name }
                            species={ creature.species }
                            photo={ creature.photo }
                            isBookmarked = { creature.isBookmarked }
                            updateBookmark = { props.updateBookmark }
                            updateDelete = { props.updateDelete }
                        />
                    </li>)
                ) 
            }
        </ul>
    </section>
    );
};

AnimalList.propTypes = {
    listOfAnimals: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.number.isRequired,
            species: PropTypes.string.isRequired,
            adopted: PropTypes.bool,
            age: PropTypes.number,
            photo: PropTypes.string,
            isBookmarked: PropTypes.bool
        })
    ), 
    updateBookmark: PropTypes.func,
    updateDelete: PropTypes.func
}

export default AnimalList;