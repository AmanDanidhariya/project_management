import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const inputClass =
    "w-full p-1 border-b-2 rounded-md bg-stone-200 text-stone-600  focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={inputClass} {...props} />
      ) : (
        <input ref={ref} className={inputClass} {...props} />
      )}
    </p>
  );
});

export default Input;
