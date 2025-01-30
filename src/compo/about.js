// src/compo/About.js
import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h1>About Notion Club</h1>
      <p>We are a community focused on enhancing productivity using Notion.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
};

export default About;
