import './App.css';
import Hero from './components/hero/hero';
import { Nav } from './components/nav/nav';

function App() {
  return (
    <div className="App">
      <section className="App_content">
        <Nav/>
        <Hero/>
        <Hero/>
        <Hero/>
        <Hero/>
        <Hero/>
      </section>
    </div>
  );
}

export default App;
