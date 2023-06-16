import './Animal.css';
import PropTypes from 'prop-types';

import { useState } from 'react';

const Animal = (props) => {

    const [isBookmarked, setIsBookmarked] = useState(false);

    const toggleBookmark = () => {
        // We want event handler function to do two things:
            // update component's internal state
            // update that information to SSOT
        setIsBookmarked(!isBookmarked);
        props.updateBookmark();
    }

    const altText = `Photo of ${props.name}`;

    let animalStyle = 'Animal';
    if (isBookmarked) {
        animalStyle = 'Animal bookmarked';
    }

    return (
    <section className={animalStyle}>
        <div className='ribbon'></div>
        { props.photo ? <img src={ props.photo } alt={ altText }></img> : "[No Photo]" }
        <h3>Name: { props.name }</h3>
        <p>Species: { props.species }</p>
        <button onClick={toggleBookmark} className="bookmark-button">🌟 Bookmark</button>
    </section>);
};

Animal.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string.isRequired,
    adopted: PropTypes.bool,
    age: PropTypes.number,
    photo: PropTypes.string,
    updateBookmark: PropTypes.func
}

export default Animal;