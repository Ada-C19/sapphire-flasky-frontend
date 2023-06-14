import './Animal.css';
import PropTypes from 'prop-types';

// The responsibility of this component is to be a reusable UI element that displays an Animal's
// - name
// - species
// - age
// - photo (optional?) -- or a default!
const Animal = (props) => {

    return (
    <section className="Animal">
        <h3>Name: { props.name } (cute!)</h3>
        <p>Species: { props.species }</p>
        { props.photo ? <img src={ props.photo } alt="Photo of Willow"></img> : "[No Photo]" }
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