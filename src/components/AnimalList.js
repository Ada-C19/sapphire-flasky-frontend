import './AnimalList.css'

import Animal from './Animal';

const AnimalList = () => {
    return (<section className="AnimalList">
        <h2>Animal List</h2>
        <Animal></Animal>
        <Animal></Animal>
        <Animal></Animal>
        <Animal></Animal>
        <Animal></Animal>
    </section>)
};

export default AnimalList;