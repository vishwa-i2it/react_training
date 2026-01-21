import type { ButtonProps } from "../../types/types";

const Button = ({ name, children }: ButtonProps) => {
  return (
    <button className="rounded-sm outline-2 outline-red-400 cursor-pointer px-1 mx-1">
      {name || children}
    </button>
  );
};

export default Button;
