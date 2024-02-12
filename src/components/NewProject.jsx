import { useRef } from "react";
import Input from "./Input";
import Model from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const model = useRef();

  // eslint-disable-next-line no-unused-vars
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      //show the error model
      model.current.open();
      return;
    }
    //validation for input fields
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Model ref={model} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-700 mb-4">
          oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-700 mb-4">
          please make sure you provide a valid value for every input field
        </p>
      </Model>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input type="date" ref={dueDateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
