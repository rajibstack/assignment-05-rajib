
import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { ExploreTechnologies } from './components/ExploreTechnologies';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar></Navbar>

      <main>
        <Hero></Hero>
      </main>

      <ExploreTechnologies />
      <Footer></Footer>

    </div>
  );
}

export default App;