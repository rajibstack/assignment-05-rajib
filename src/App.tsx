import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { ExploreTechnologies } from './components/ExploreTechnologies';
import { Footer } from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main>
        <Hero />
      </main>

      <ExploreTechnologies />
      <Footer />

      {/* Toast Notification Container */}
      <ToastContainer 
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;