import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";

function Chat(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
  });

  const [messages, setMessages] = useState([
    { message: "Hello, how are you?", sender: "Celestia" },
  ]);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const chatEndRef = useRef<HTMLDivElement>(null);

  // This will scroll the chat container to the bottom whenever new messages are added
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "instant" });
  };

  useEffect(() => {
    scrollToBottom(); // Scroll when messages change
  }, [messages]);

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
    <div className="chat h-screen">
      <Navigation />
      <div className="w-full flex justify-center h-5/6 p-4">
        <div
          className="w-4/6 
                      flex justify-between items-center flex-col box-border "
        >
          <div className="messages rounded-t-xl border border-solid box-border border-gray-100/5 bg-black  bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 w-full flex-1 overflow-y-scroll p-4 flex flex-col place-items-end gap-4">
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
            {/* Empty div that serves as the scroll anchor */}
            <div ref={chatEndRef} />
          </div>

          {/* Form section */}
          <form
            onSubmit={handleSubmit}
            method="post"
            autoComplete="off"
            className="w-full"
          >
            <div className=" flex">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Say 'Hello'"
                onChange={handleChange}
                className="rounded-bl-xl h-min w-full bg-opacity-20 bg-purple-200 p-2 px-3 text-purple-50 outline-none focus:caret-purple-50/50 hover:cursor-text"
              />
              <button
                className=" bg-purple-100/40 p-2 px-3 rounded-br-xl  hover:bg-purple-100/10 cursor-pointer transition-all"
                role="submit"
              >
                <ChatBubbleOvalLeftIcon className="size-6 text-purple-50" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Chat;
