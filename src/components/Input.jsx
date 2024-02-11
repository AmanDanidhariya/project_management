const Input = ({ label, textarea, ...props }) => {
  const inputClass =
    "w-full p-1 border-b-2 rounded-md bg-stone-200 text-stone-600  focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={inputClass} {...props} />
      ) : (
        <input className={inputClass} {...props} />
      )}
    </p>
  );
};

export default Input;
