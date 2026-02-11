export const Button = ({ children, size = "md", className = "", ...props }) => {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-medium hover:brightness-110 transition-all duration-300 ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
