// src/compo/Home.js
import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
     <h1 style={styles.heading}>Welcome to Our Notion Club</h1>
      <p style={{color:'black'}}>This is the home page of your awesome site.</p>
    </div>
  );
}

const styles = {
  container: {
  background: 'linear-gradient(45deg, #FF6347, #FFD700)',
    backgroundImage: 'url(https://www.example.com/your-image.jpg)', // Example image URL
       backgroundSize: 'cover',

       padding: '50px 20px',
       textAlign: 'center',
       color: 'white',
       height: '100vh',
       display: 'flex', // Use flexbox for centering
           flexDirection: 'column',
           justifyContent: 'flex-start',
           alignItems: 'center',
           boxSizing: 'border-box',

  },
  heading: {
 color: '#333333',
      fontSize: '3rem',
      fontFamily: 'Roboto, sans-serif',
      marginBottom: '20px',
      textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', // Subtle text shadow for better readability

      },
        text: {
        color:'#333333',
          fontSize: '1.5rem',
        },
      };

export default Home;
