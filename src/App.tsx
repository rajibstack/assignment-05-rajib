
import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { ExploreTechnologies } from './components/ExploreTechnologies';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar></Navbar>

      <main>
        <Hero></Hero>
      </main>

      <ExploreTechnologies />

    </div>
  );
}

export default App;