import React, { useState } from "react";
import "./TextField.css";

function TextField(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
  });

  const [messages, setMessages] = useState<
    { message: string; sender: string }[]
  >([]);

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

    if (!(formData.name == null || formData.name === "")) {
      // Update messages array with new message from the user
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: formData.name, sender: "You" },
      ]);

      // Clear input field
      setFormData({
        name: "",
      });

      // Simulated response from the AI after a delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            message:
              "Hi, I am your personal AI friend designed to accompany you on your journey through life. With an inviting personality and a warm, friendly demeanor, I am here to provide support, companionship, and a touch of magic to your daily routine.",
            sender: "Celestia",
          },
        ]);
      }, 1000); // 1-second delay for the AI response
    }
  };

  return (
    <>
      <div className="w-full flex justify-center h-screen p-4">
        <div
          className="w-4/5 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5
                      flex justify-between items-center flex-col h-full box-border p-4"
        >
          <div className="messages w-full flex flex-col place-items-end gap-4 ">
            {messages.map((messageObj, index) => (
              <div
                key={index}
                className={`p-3 ${
                  messageObj.sender === "You"
                    ? "place-self-end  bg-purple-50/90 text-slate-950/100 rounded-l-lg rounded-tr-lg"
                    : "place-self-start bg-purple-300 bg-blend-darken text-slate-900 rounded-r-lg rounded-tl-lg"
                }`}
              >
                <strong>{messageObj.sender}:</strong> {messageObj.message}
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            method="post"
            autoComplete="off"
            className="w-full"
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-full h-min w-full bg-opacity-20 bg-purple-200 p-2 px-3 text-purple-50 outline-none focus:caret-purple-50/50 hover:cursor-pointer"
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
      </div>
    </>
  );
}

export default TextField;
