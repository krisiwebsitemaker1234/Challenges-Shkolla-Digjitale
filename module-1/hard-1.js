import React, { useState } from 'react';

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>Counter: {count}</h1>
      <div style={styles.buttonContainer}>
        <button onClick={handleIncrement} style={styles.button}>Increment</button>
        <button onClick={handleDecrement} style={styles.button}>Decrement</button>
        <button onClick={handleReset} style={styles.button}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default CounterScreen;
