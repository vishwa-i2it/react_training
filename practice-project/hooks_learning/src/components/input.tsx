import type { InputProps } from "../types/types";

function InputBox({ name, value, setValue }: Readonly<InputProps>) {
  return (
    <div>
      <label>{name}</label>
      <input
        type="text"
        value={value}
        id={name}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default InputBox;
