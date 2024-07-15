import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import useCustomTitle from './hook/useCustomTitle';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider } from './context/AuthContext';

function App() {
  useCustomTitle('Website Panduan Mitigasi Bencana Banjir');

  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
            <header className="text-center mb-8">
              <h1 className="text-4xl font-bold text-blue-600">SELAMAT DATANG </h1>
              <p className="mt-4 text-2xl">Panduan dan Mitigasi Kebencanaan</p>
              <p className="text-2xl">Fokus Penanggulangan Banjir</p>
            </header>
 {/* Navbar */}
 <nav className="mt-8 bg-white shadow-md w-full">
              <div className="max-w-7xl mx-auto px-4">
                <ul className="flex space-x-4">
                  <li><Link to="/" className="text-blue-500 hover:underline">Home</Link></li>
                  <li><Link to="/about" className="text-blue-500 hover:underline">About</Link></li>
                  <li><Link to="/contact" className="text-blue-500 hover:underline">Contact</Link></li>
                </ul>
              </div>
            </nav>

            {/* Page content */}
            <div className="max-w-7xl mx-auto px-4 flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
         

            <footer className="w-full py-4 bg-gray-800 text-white text-center mt-8">
              <p>&copy; 2024 Website Panduan Dan Mitigasi Bencana. All rights reserved.</p>
              <p>Contact us at <a href="mailto:contact@aplikasimahasiswa.com" className="text-blue-400">contact@aplikasimahasiswa.com</a></p>
            </footer>
          </div>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
