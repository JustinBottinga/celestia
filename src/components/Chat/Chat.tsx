import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import Navigation from "../Navigation/Navigation";
import {
  ChatBubbleOvalLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

function Chat(): JSX.Element {
  // START -- FORM DATA
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // END -- FORM DATA

  // START -- MESSAGES
  const [messages, setMessages] = useState([
    { message: "Hello, how are you?", sender: "Celestia" },
  ]);

  useEffect(() => {
    scrollToBottom(); // Scroll when messages change
  }, [messages]);
  // END -- MESSAGES

  //START -- HANDLE SUBMIT
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
  //END -- HANDLE SUBMIT

  // START -- SCROLL
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };
  // END -- SCROLL

  //START -- INBOX TOGGLE
  const [wideInbox, setWideInbox] = useState(true);

  const ToggleCollapse = (): void => {
    setWideInbox((prevWideInbox) => !prevWideInbox);
  };

  //END -- INBOX TOGGLE

  return (
    <div className="bg-grid">
      <div className="main h-screen">
        <Navigation styling="backdrop-blur-lg border-b border-solid border-gray-100/5" />

        <div className="main w-full z-10 flex justify-center h-5/6 p-4">
          <div className="max-lg:w-full w-5/6 flex justify-start my-6 h-full rounded-xl border border-solid box-border border-gray-100/5">
            {/* inbox */}
            <div
              className={`inbox bg-black rounded-l-xl bg-clip-padding flex flex-col transition-all duration-300 ease-in-out  backdrop-filter backdrop-blur-3xl bg-opacity-60  h-full
              text-white p-4 ${wideInbox ? "w-1/5" : "w-fit"}  `}
            >
              {/* Top section */}
              <div className="flex flex-row gap-2 place-self-start justify-between w-full border-b-2 border-solid border-gray-100/10 pb-4">
                {/* Collapse button */}
                <div
                  title={wideInbox ? "Collapse" : "Show"}
                  onClick={ToggleCollapse}
                  className=" text-purple-100 leading-5 p-2 bg-purple-100/10 transition-all hover:bg-purple-100/20 hover:cursor-pointer w-fit h-fit rounded-lg"
                >
                  {wideInbox ? (
                    <ChevronDoubleLeftIcon className="size-5" />
                  ) : (
                    <ChevronDoubleRightIcon className="size-5" />
                  )}
                </div>

                {/* New chat */}
                <div
                  title="New chat"
                  hidden={!wideInbox}
                  className=" text-purple-100 leading-5 p-2 bg-purple-100/10 transition-all hover:bg-purple-100/20 hover:cursor-pointer w-fit h-fit rounded-lg"
                >
                  <PencilIcon className="size-5" />
                </div>
              </div>
              {/* Middle section */}
              <div className="flex flex-col w-full  flex-grow"></div>

              {/* Bottom section */}
              <div className="flex flex-row gap-2 place-self-start justify-between w-full pt-4 border-t-2 border-solid border-gray-100/10">
                <div className=" text-purple-100 leading-5 p-2 bg-purple-100/10 transition-all hover:bg-purple-100/20 hover:cursor-pointer w-fit h-fit rounded-lg">
                  <Cog6ToothIcon className="size-5" />
                </div>
              </div>
            </div>

            {/* chat */}
            <div className="chat flex-grow min-h-full max-h-full flex flex-col">
              <div
                ref={chatRef}
                className="messages rounded-tr-xl  bg-black  
                bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-40 flex-1
                p-4 flex flex-col place-items-end gap-4 max-h-full  overflow-y-scroll"
              >
                {messages.map((messageObj, index) => (
                  <div
                    key={index}
                    className={`p-3 select-none ${
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

              <form onSubmit={handleSubmit} method="post" autoComplete="off">
                <div className="flex">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="Say 'Hello'"
                    onChange={handleChange}
                    className=" h-min w-full bg-opacity-20 bg-purple-200 p-2 px-3 text-purple-50 outline-none focus:caret-purple-50/50 hover:cursor-text"
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
        </div>
      </div>
    </div>
  );
}

export default Chat;
