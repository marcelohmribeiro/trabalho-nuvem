export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) {
  const baseClasses =
    "w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-amber-700 hover:bg-amber-800 text-amber-50 shadow-md hover:shadow-lg active:scale-95",
    secondary:
      "bg-amber-200 hover:bg-amber-300 text-amber-900 shadow-md hover:shadow-lg active:scale-95",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
