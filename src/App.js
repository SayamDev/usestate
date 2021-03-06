import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); //CORRECT
  };

  const decrement = () => {
    setCount(count - 1); //CORRECT
  };

  return (
    <div>
      <h1>Welcome to my counter app</h1>
      <p>the count is: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
