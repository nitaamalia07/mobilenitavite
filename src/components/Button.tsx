type ButtonProps = {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    onClick: () => void;
    variant?: "primary" | "secondary" | "danger";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
  };
  
  const Button = ({
    label,
    onClick,
    variant = "primary",
    size = "medium",
    disabled = false,
    icon,
    style,
    
  }: ButtonProps) => {
    const base = "rounded px-4 py-2 font-medium flex items-center justify-center gap-2";
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-300 text-black hover:bg-gray-400",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };
    const sizes = {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    };
  
    return (
      <button
        className={`${base} ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={onClick}
        disabled={disabled}
        style={style}
         

      >
        {icon && icon}
        
        {label}
      </button>
    );
  };
  
  export default Button;
  