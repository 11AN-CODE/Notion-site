// src/compo/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 My Notion Club</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    width: '100%',
    bottom: 0,
  },
};

export default Footer;
