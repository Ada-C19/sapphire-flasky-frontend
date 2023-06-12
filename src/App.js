import './App.css';

import Animal from './components/Animal';

function App() {
  // Comments outside of JSX (but still in JavaScript (aka JS that is not "returned")) can still be //'s.
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      <h2>Animal Listings</h2>
      {/* // When React renders this JSX, it simply cannot/does not see these slashes as a comment. It will render this as if it wasn't commented */}
      <Animal></Animal>
      <Animal></Animal>
      <Animal></Animal>
      <Animal></Animal>
      <Animal></Animal>
      <Animal></Animal>
      <Animal></Animal>
    </section>
  );
}

export default App;
