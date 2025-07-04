import React from 'react';
import backgroundImage from '../assets/hero.jpg';

const Hero = () => {
  const styles = {
    main: {
      width: '700px',
      height: '700px',
      position: 'absolute',
      right: 0,
      top: '20%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    h1: {
      fontSize: '120px',
      color: 'red',
      marginLeft: '50px',
      padding: '10px 0px',
      cursor: 'pointer',
      transition: 'color 0.3s',
    },
    h2: {
      fontSize: '25px',
      fontFamily: 'Times New Roman, Times, serif',
      marginLeft: '50px',
      color: 'black',
    },
    button: {
      width: '250px',
      height: '50px',
      fontSize: '20px',
      border: '1px solid black',
      fontFamily: 'Arial, Helvetica, sans-serif',
      borderRadius: '12px',
      margin: '30px 0px',
      backgroundColor: 'red',
      color: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
  };

  return (
    <div style={styles.body}>
      <main style={styles.main}>
        <h1
          style={styles.h1}
          onMouseOver={(e) => (e.target.style.color = 'black')}
          onMouseOut={(e) => (e.target.style.color = 'red')}
        >
          Shopping With <span>Soukhra</span>
        </h1>
        <h2 style={styles.h2}>
          Happiness is not in money, but in Shopping.
        </h2>
        <button
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'black';
            e.target.style.color = 'red';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'red';
            e.target.style.color = 'white';
          }}
        >
          Check Out
        </button>
      </main>
    </div>
  );
};

export default Hero;