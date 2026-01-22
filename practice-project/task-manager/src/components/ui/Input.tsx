import type { InputProps } from "../../types/types";

export const Input = ({
  name,
  id,
  className,
  value,
  setValue,
  ...props
}: InputProps) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      className={`${className} px-1 m-1 w-50 rounded-md bg-blue-200`}
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
