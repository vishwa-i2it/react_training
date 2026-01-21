import { forwardRef } from "react";
import type { LabelProps } from "../../types/types";

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <label ref={ref} className={className} {...props}>
        {children}
      </label>
    );
  },
);

export default Label;
