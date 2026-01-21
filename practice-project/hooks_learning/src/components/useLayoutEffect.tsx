import {
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
  type ReactElement,
} from "react";
import { ThemeContext } from "./ThemeContext";

function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  const widthRef = useRef<HTMLButtonElement>(null);
  const [width, setWidth] = useState<ReactElement | null>(null);
  const { theme, toggled } = useContext(ThemeContext);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  useLayoutEffect(() => {
    if (widthRef.current) {
      const measuredWidth = widthRef.current.getBoundingClientRect().width;
      setWidth(<p>Button Width {measuredWidth}</p>);
    }
  }, []);
  return (
    <div
      className="card"
      style={{
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>count is {count}</p>
      <button ref={widthRef} onClick={increment}>
        Increment
      </button>
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
      {width}
      <div>
        <button type="button" onClick={toggled}>
          Switch Theme
        </button>
      </div>
    </div>
  );
}

export default UseLayoutEffect;
