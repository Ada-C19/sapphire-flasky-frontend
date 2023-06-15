import './Animal.css';
import PropTypes from 'prop-types';

import { useState } from 'react';

// [X] Make the element that the user interacts with
// [X] Make the event handler for that element
// [X] Configure a piece of state:
    // Decide what the state is... what is its name, what is its type, what are the available values for this
        // isBookmarked ... true or false
        // likesCount ... numbers 0+
        // biography ... {birthYear:, works:}
    // import useState
    // Render the piece of state with an initial value
        // setIsBookmarked
        // false
    // Make the event handler update the state
// [X] Test it
// [X] Refactor
// [] Style it/add polish



// Refactor to toggle:
// Rename my functions
// Redo the logic

// The responsibility of this component is to be a reusable UI element that displays an Animal's
const Animal = (props) => {

    const [isBookmarked, setIsBookmarked] = useState(false);

    const altText = `Photo of ${props.name}`;

    // Responsibility:
    // Event Handler
    // Update the state
    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    }

    // If the animal is bookmarked, the CSS class name should be
    //   .bookmarked
    // If the animal is not bookmarked, there should be no CSS class
    let animalStyle = 'Animal';
    if (isBookmarked) {
        animalStyle = 'Animal bookmarked';
    }

    return (
    <section className={animalStyle}>
        <h3>Name: { props.name } (cute!)</h3>
        <p>Species: { props.species }</p>
        { props.photo ? <img src={ props.photo } alt={ altText }></img> : "[No Photo]" }
        <button onClick={toggleBookmark}>Bookmark</button>
        <p>Is bookmarked? {isBookmarked ? "Yes this animal is bookmarked" : "No this animal is not bookmarked"}</p>

    </section>);
};

Animal.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string.isRequired,
    adopted: PropTypes.bool,
    age: PropTypes.number,
    photo: PropTypes.string
}

export default Animal;