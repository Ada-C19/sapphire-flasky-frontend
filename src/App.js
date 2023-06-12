import './App.css';

import AnimalList from './components/AnimalList';

function App() {
  // Comments outside of JSX (but still in JavaScript (aka JS that is not "returned")) can still be //'s.
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      <AnimalList></AnimalList>
    </section>
  );
}

export default App;
