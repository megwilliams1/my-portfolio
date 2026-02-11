export const AnimatedBorderButton = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium text-foreground animated-border transition-all duration-300 ${className}`}
      {...props}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className="animated-border-path"
          x="1"
          y="1"
          rx="9999"
          ry="9999"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          fill="none"
          stroke="#ff69b4"
          strokeWidth="2"
          strokeDasharray="100 300"
          strokeDashoffset="400"
        />
      </svg>
      {children}
    </button>
  );
};