import { useEffect, useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Count is updated with value: ", count);
  }, [count]);
  return (
    <div className="card">
      <p>count is {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button
        onClick={() => {
          if (count !== 0) {
            setCount((count) => count - 1);
          }
        }}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default UseState;
