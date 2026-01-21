import { useRef, useEffect } from "react";
import type { InputProps } from "../../types/Types";

function Input({ name, id, label, className, ...props }: Readonly<InputProps>) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex flex-col gap-1 mb-3">
      {label && <label className="text-sm font-semibold text-gray-700">{label}</label>}
      <input
        className={`px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className || ''}`}
        type="text"
        name={name}
        id={id}
        ref={inputRef}
        {...props}
      />
    </div>
  );
}

Input.displayName = "Input";

export default Input;
