import type { InputBoxProps } from "../../types/types";

const InputBox = ({
  name,
  id,
  className,
  value,
  ref,
  ...props
}: InputBoxProps) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      className={` ${className} px-1 m-1 w-50 rounded-md bg-red-100`}
      {...props}
      value={value}
      ref={ref}
    />
  );
};

export default InputBox;
