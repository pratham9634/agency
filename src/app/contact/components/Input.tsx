
const Input = ({
  label,
  name,
  type = "text",
  focused,
  setFocused,
}: {
  label: string;
  name: string;
  type?: string;
  focused: string | null;
  setFocused: (val: string | null) => void;
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused(null)}
        className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-transparent"
      />

      <label
        className={`absolute left-4 transition-all text-sm ${
          focused === name
            ? "top-2 text-xs text-orange-500"
            : "top-4 text-neutral-400"
        }`}
      >
        {label}
      </label>
    </div>
  );
};
export default Input