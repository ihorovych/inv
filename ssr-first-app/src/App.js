import React from 'react';
import {useCounter} from './hooks/useCounter';

function App() {
  const {count, increment, decrement} = useCounter();

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default App;

