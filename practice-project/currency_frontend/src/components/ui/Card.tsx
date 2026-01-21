import type { CardProps } from "../../types/Types";

function Card({ children, className, ...props }: Readonly<CardProps>) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
