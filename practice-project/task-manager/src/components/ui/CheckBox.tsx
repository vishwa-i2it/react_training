import type { CheckBoxProps } from "../../types/types";

export const CheckBox = ({ ...props }: CheckBoxProps) => {
  return (
    <input
      type="checkbox"
      name={props.name}
      id={props.id}
      {...props}
      className=""
    />
  );
};
