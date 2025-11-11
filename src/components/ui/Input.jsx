export default function Input({
  label,
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  id,
  required = false,
}) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-amber-900 font-medium mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
            {icon}
          </span>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full h-14 border-2 border-amber-300 rounded-lg bg-amber-50/50 focus:bg-white focus:border-amber-500 focus:outline-none transition-all duration-200 ${
            icon ? "pl-12 pr-4" : "px-4"
          } text-amber-900 placeholder:text-amber-700/50`}
        />
      </div>
    </div>
  );
}
