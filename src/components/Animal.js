import './Animal.css';

// The responsibility of this component is to be a reusable UI element that displays an Animal's
// - name
// - species
// - age
// - photo (optional?) -- or a default!
const Animal = (props) => {

    return (
    <section className="Animal">
        <h3>Animal name: {props.name} (cute!)</h3>
        <p>Species: {props.species}</p>
        <img src="http://placekitten.com/g/200/200" alt="Photo of Willow"></img>
    </section>);
};

export default Animal;