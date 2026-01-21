import { useRef, useState } from "react";

function UseRef() {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const renderCount = useRef<number>(0);

  const focusInput = () => {
    if (inputRef.current) {
      setValue("");
      inputRef.current.focus();
    }
  };

  renderCount.current += 1;
  console.log(renderCount.current);

  return (
    <div className="card">
      <input
        ref={inputRef}
        type="text"
        name="inputBox"
        id="input"
        placeholder="Enter a Value here!"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          focusInput();
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default UseRef;
