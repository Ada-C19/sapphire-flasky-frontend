import './Animal.css';
import PropTypes from 'prop-types';

import { useState } from 'react';

const Animal = (props) => {

    const [isBookmarked, setIsBookmarked] = useState(false);

    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
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
    photo: PropTypes.string
}

export default Animal;