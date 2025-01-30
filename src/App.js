// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './compo/navbar';
import Footer from './compo/footer';
import Home from './compo/home';
import About from './compo/about';
import Contact from './compo/contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Applying styles to a button */}
                <button style={styles.button}>Global Button</button>
        <Routes>
          {/* Use 'element' instead of 'component' */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: '#FF4500',
    color: 'blue',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    position: 'fixed', // This makes it fixed at the bottom-right corner of the page
    bottom: '20px',
    right: '20px',
  },
};
styles.button[':hover'] = {
  backgroundColor: '#FF6347', // Tomato color when hovering
  transform: 'scale(1.1)', // Slight scale effect on hover
};

export default App;


