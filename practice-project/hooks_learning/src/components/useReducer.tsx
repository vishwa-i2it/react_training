import { useEffect, useReducer, useRef } from "react";
import type { State, Action } from "../types/types";

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  useEffect(() => {
    console.log("Count is updated with value: ", state.count);
  }, [state.count]);
  const render = useRef(0);
  render.current += 1;
  console.log("Render count: ", render.current);

  return (
    <div className="card">
      <p>count is {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => state.count != 0 && dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default UseReducer;
