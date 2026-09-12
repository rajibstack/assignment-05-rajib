
import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar></Navbar>

      <main>
        <Hero></Hero>
      </main>

    </div>
  );
}

export default App;