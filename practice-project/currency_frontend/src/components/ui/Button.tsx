import type { ButtonProps } from "../../types/Types";

function Button({
  children,
  variant = "primary",
  className,
  ...props
}: Readonly<ButtonProps>) {
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
  };

  return (
    <div>
      <button
        type="button"
        className={`px-4 py-2 rounded font-medium transition-colors cursor-pointer border-0 ${
          className || ""
        }${variantClasses[variant]}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
