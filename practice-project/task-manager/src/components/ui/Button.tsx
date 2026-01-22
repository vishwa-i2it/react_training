import type { ButtonProps } from "../../types/types";

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="rounded-sm outline-2 outline-blue-400 cursor-pointer bg-green-100 px-1 mx-1"
      {...props}
    >
      {children}
    </button>
  );
};
