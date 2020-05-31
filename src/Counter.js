import React, { useState, useEffect } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  if (storage) return JSON.parse(storage);
  return { count: 0 };
};

const storeStateInLocalStorage = state => {
  localStorage.setItem('counterState', JSON.stringify(state));
  console.log(localStorage);
};

const Counter = ({ max, step }) => {
  const [count, setCount] = useState(0);
  // useEffect - here is the side effect
  // anything that is not a return value has a side effect

  const increment = () => {
    // If we are calling the function, three times
    // the state is changed three times
    setCount(c => {
      if (c >= max) return;
      return c + step;
    });
  };

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    // using an array at the end only runs the very first time (componentDidMount)
    // if we add count in the array we only run it whenever count changes
    setTimeout(() => {
      // This amkes a unique call to every function
      // copy of the state and the props every single time
      // class-based components reference the class property on an object
      console.log(`Count: ${count}`);
    }, 3000);
  }, [count]);

  return (
    <main className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </main>
  );
};

export default Counter;
