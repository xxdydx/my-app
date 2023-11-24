import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };
  const sub = () => {
    setCount(count - 1);
  };

  return (
    <html>
      <h1>hello</h1>
      <p>{count}</p>
      <button onClick={add}>Increment</button>
      <button onClick={sub}>Decrement</button>
    </html>
  );
}

export default App;
