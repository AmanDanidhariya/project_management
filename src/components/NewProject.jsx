import Input from "./Input";

const NewProject = () => {
  return (
    <div>
      <menu>
        <li>Cancel</li>
        <li>Save</li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
