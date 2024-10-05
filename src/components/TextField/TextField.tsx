import { useState } from "react";
import "./TextField.css";

function TextField(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!(formData.name == null || formData.name == "")) {
      console.log(formData);

      setFormData({
        name: "",
      });
    }
  };

  return (
    <div className="w- p-4 flex justify-center items-end flex-row h-screen box-border">
      <form onSubmit={handleSubmit} method="post" autoComplete="off">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-full h-min bg-opacity-20 bg-purple-200 p-2 px-3 text-purple-100 outline-none focus:caret-transparent hover:cursor-pointer"
          />
          <button
            className="absolute right-0 rounded-s-sm bg-opacity-40 bg-purple-100 p-2 px-3 rounded-full hover:bg-opacity-10 cursor-pointer transition-all"
            role="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-purple-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default TextField;
