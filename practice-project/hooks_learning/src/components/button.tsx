import type { ButtonProps } from "../types/types";

function Button({ name, onClick }: Readonly<ButtonProps>) {
  return (
    <button type="button" onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
