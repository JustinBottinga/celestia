import React, { useEffect, useRef, useState } from "react";
import "./Chat.css";
import Navigation from "../Navigation/Navigation";
import { getAIResponse } from "@/services/AIService";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

import {
  Cog6ToothIcon,
  PencilIcon,
  XCircleIcon,
  InboxIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/20/solid";

import {
  AddMessage,
  CreateChat,
  DeleteChat,
  GetAllChats,
} from "../../services/FirestoreService";

import { Button } from "../ui/button";

interface Chat {
  chatId: string;
  messages: { message: string; sender: string }[];
  title: string;
}

interface Message {
  message: string;
  sender: string;
}

function Chat(): JSX.Element {
  const uuid = localStorage.getItem("user_id")?.toString();
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  const [currentChat, setCurrentChat] = useState<Chat>({
    chatId: "",
    messages: [],
    title: "New chat!",
  });
  const [chats, setChats] = useState<Chat[]>([]); // State to store chats
  const [chatLength, setChatLength] = useState<number>(0); // Initialize chat length
  const [messages, setMessages] = useState<Message[]>([]);
  const [formData, setFormData] = useState({
    name: "",
  });
  const [wideInbox, setWideInbox] = useState(true);
  // const [loading, setLoading] = useState<boolean>(true); // State to track loading

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  const ToggleCollapse = (): void => {
    setWideInbox((prevWideInbox) => !prevWideInbox);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setChatLength(chats.length);
  }, [chats]);

  useEffect(() => {
    const fetchChats = async () => {
      setLoading(true); // Set loading to true before fetching
      const userChats = await GetAllChats(`${uuid}`); // Fetch chats
      setChats(userChats); // Update state with fetched chats
      setChatLength(userChats.length);
      setLoading(false); // Set loading to false after fetching
    };

    if (`${uuid}`) {
      fetchChats();
    }
  }, [uuid]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (chats.length !== 0) {
      if (currentChat.chatId != "") {
        if (!(formData.name == null || formData.name === "")) {
          try {
            await AddMessage(
              `${uuid}`,
              currentChat.chatId,
              formData.name,
              "Me"
            );

            setMessages((prevMessages) => [
              ...prevMessages,
              { message: formData.name, sender: "Me" },
            ]);

            const aiResponse = await getAIResponse(formData.name);

            await AddMessage(
              `${uuid}`,
              currentChat.chatId,
              aiResponse,
              "Celestia"
            );

            setMessages((prevMessages) => [
              ...prevMessages,
              { message: aiResponse, sender: "Celestia" },
            ]);
          } catch (error) {
            console.error("Error adding message:", error);
          }
        }
      } else {
        alert("no chat selected");
      }
    } else {
      alert("No chats");
    }

    setFormData({
      name: "",
    });
  };

  async function StartChat(): Promise<void> {
    try {
      const newChatId = await CreateChat(`${uuid}`, "New chat!");

      const newChat: Chat = {
        chatId: newChatId!,
        title: "New chat!",
        messages: [],
      };

      // Update the chat list with the new chat
      setChats((prevChats) => [...prevChats, newChat]);

      VisitChat(newChat);
    } catch (error) {
      console.error("Error creating chat:", error);
    }
  }

  function VisitChat(chatObj: Chat) {
    setCurrentChat(chatObj);
    setMessages(chatObj.messages);
  }

  async function deleteChat(chatId: string): Promise<void> {
    try {
      // Delete the chat from Firestore
      await DeleteChat(`${uuid}`, chatId);

      // Remove the deleted chat from local state
      setChats((prevChats) => {
        const updatedChats = prevChats.filter((chat) => chat.chatId !== chatId);

        setChatLength(updatedChats.length);

        // If the deleted chat is the current chat, reset currentChat to the first chat (if any)
        if (currentChat.chatId === chatId) {
          if (updatedChats.length > 0) {
            // Set the first chat as the current chat
            VisitChat(updatedChats[0]);
          } else {
            // If no chats remain, reset currentChat to an empty state
            setCurrentChat({ chatId: "", messages: [], title: "New chat!" });
            setMessages([]);
          }
        }

        return updatedChats;
      });
    } catch (e) {
      console.error("Error deleting chat:", e);
    }
  }

  return (
    <div className="bg-grid">
      <div className="main h-screen">
        <Navigation styling="backdrop-blur-lg border-b border-solid border-gray-100/5" />

        <div className="main w-full z-10 flex justify-center h-5/6 p-4">
          <div className="max-lg:w-full w-5/6 flex justify-start my-6 h-full rounded-xl border border-solid box-border border-gray-100/5">
            {/* inbox */}

            <div
              className={`inbox bg-black rounded-l-xl bg-clip-padding flex flex-col  backdrop-filter backdrop-blur-3xl bg-opacity-60  h-full text-white p-4 ${
                wideInbox ? "lg:max-w-[275px] max-w-[200px]" : "w-fit"
              }`}
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
                {wideInbox && (
                  <div className="flex gap-2 leading-5 self-center select-none">
                    Inbox <InboxIcon className="size-5" />
                  </div>
                )}

                {/* New chat */}
                <div
                  title="New chat"
                  hidden={!wideInbox}
                  onClick={StartChat}
                  className=" text-purple-100 leading-5 p-2 bg-purple-100/10 transition-all hover:bg-purple-100/20 hover:cursor-pointer w-fit h-fit rounded-lg"
                >
                  <PencilIcon className="size-5" />
                </div>
              </div>

              {/* Middle section */}
              <div className="flex flex-col w-full flex-grow py-2 gap-2 ">
                {chatLength > 0 &&
                  chats.map((chat: Chat) => (
                    <div
                      key={chat.chatId}
                      onClick={() => VisitChat(chat)}
                      className=" text-purple-100 leading-5 p-2 bg-purple-100/10 transition-all hover:bg-purple-100/20 hover:cursor-pointer w-full select-none h-fit rounded-lg"
                    >
                      {wideInbox ? (
                        <div className="flex justify-between">
                          <h3 className="self-center select-none">
                            {chat.title}
                          </h3>
                          <button
                            title={`Delete chat`}
                            className="hover:opacity-80 "
                            onClick={() => deleteChat(chat.chatId)}
                          >
                            <XCircleIcon className="size-5 " />
                          </button>
                        </div>
                      ) : (
                        <ChatBubbleLeftRightIcon className="size-5" />
                      )}
                      {/* <p>{chat.messages.length} messages</p> */}
                    </div>
                  ))}
              </div>

              {/* Bottom section */}
              <div className="flex flex-row gap-2 place-self-start justify-between w-full pt-4 border-t-2 border-solid border-gray-100/10">
                <div className=" text-purple-100 leading-5 p-2 bg-purple-100/10 transition-all hover:bg-purple-100/20 hover:cursor-pointer w-fit h-fit rounded-lg">
                  <Cog6ToothIcon className="size-5" />
                </div>
              </div>
            </div>

            {/* chat */}
            <div className="chat flex-grow min-h-full  relative max-h-full flex flex-col">
              {/* No chat? */}
              <div
                hidden={true}
                className={`absolute h-full w-full bg-black justify-center items-center bg-opacity-80 ${
                  chatLength == 0 && "flex"
                } rounded-r-xl z-20 `}
              >
                <div className="bg-[var(--background-secondary)] p-4 flex flex-col h-4/5 w-4/5 text-purple-50 rounded-lg border border-solid border-purple-100/20">
                  <h3 className="text-xl text-center">Start a chat!</h3>
                  <p>Looks like you don't have any ongoing chats,</p>
                  <div className="flex-grow flex items-end justify-end">
                    <Button
                      onClick={StartChat}
                      className="w-fit place-self-end bg-purple-200 hover:bg-purple-300 text-slate-950"
                    >
                      New Chat
                    </Button>
                  </div>
                </div>
              </div>

              <div
                ref={chatRef}
                className="messages rounded-tr-xl bg-black bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-40 flex-1 p-4 flex flex-col place-items-end gap-4 max-h-full overflow-y-scroll"
              >
                {messages.map((messageObj, index) => (
                  <div
                    key={index}
                    className={`p-3 select-none max-w-[80%] ${
                      messageObj.sender === "Me"
                        ? "place-self-end bg-purple-50/90 text-slate-950/100 rounded-l-lg rounded-tr-lg"
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
                    className="h-min w-full bg-opacity-20 bg-purple-200 p-2 px-3 text-purple-50 outline-none focus:caret-purple-50/50 hover:cursor-text"
                  />
                  <button
                    className="bg-purple-100/40 p-2 px-3 rounded-br-xl hover:bg-purple-100/10 cursor-pointer transition-all"
                    role="submit"
                  >
                    <PaperAirplaneIcon className="size-6 text-purple-50" />
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
