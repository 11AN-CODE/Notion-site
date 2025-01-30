// src/compo/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/" style={styles.link}>Home</Link></li>
        <li style={styles.navItem}><Link to="/about" style={styles.link}>About</Link></li>
        <li style={styles.navItem}><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
}
const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',  // Add a value for padding
     fontFamily: 'Roboto, sans-serif',
  },
  navList: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    margin: 0,
    padding: 0,  // Make sure padding is properly set here too if necessary
  },
  navItem: {
       padding: '10px',
    },
    link: {
      color: 'white',  // White color for the links
      textDecoration: 'none',  // Remove underline
        fontWeight: 'bold',
          transition: 'color 0.3s',  // Optional: Set the font size
    },
     linkHover: {
        color: '#ff6347',  // Color change on hover
        transform: 'scale(1.1)', // Slight zoom effect on hover
      }

  };
  export default Navbar;

