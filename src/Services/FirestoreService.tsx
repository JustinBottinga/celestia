import {
  setDoc,
  doc,
  getDoc,
  arrayUnion,
  updateDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
const uuid = localStorage.getItem("user_id");
import { v4 as uuidv4 } from "uuid";

export const GetAllChats = async (userId: string) => {
  try {
    // Reference to the 'Chats' subcollection inside the user's document
    const chatsRef = collection(db, "Users", userId, "Chats");

    // Get all documents (chats) from the subcollection
    const chatDocs = await getDocs(chatsRef);

    // Map the documents to a list of chat objects
    const chats = chatDocs.docs.map((doc) => ({
      ...doc.data(), // Spread the rest of the document data (title, chatId, messages)
    }));

    return chats; // Return the array of chat objects
  } catch (e) {
    console.error("Error fetching chats: ", e);
    return [];
  }
};

// Function to create a new chat with a title
export const CreateChat = async (userId: string, title: string) => {
  const chatId = uuidv4(); // Generate a unique ID for the chat

  try {
    // Reference to the new chat document inside the user's Chats subcollection
    const chatRef = doc(db, "Users", userId, "Chats", chatId);

    // Create the new chat with a title and an empty messages array
    await setDoc(chatRef, {
      title,
      chatId,
      messages: [],
    });

    return chatId; // Return the chatId so you can use it to add messages later
  } catch (e) {
    console.error("Error creating chat:", e);
    alert(e);
  }
};

export const DeleteChat = async (userId: string, ChatId: string) => {
  try {
    const chatRef = doc(db, "Users", userId, "Chats", ChatId);

    await deleteDoc(chatRef);
  } catch (e) {
    console.error("Error deleting chat:", e);
    alert(e);
  }
};

export const GetMessages = async (userId: string, chatId: string) => {
  try {
    // Reference to the specific chat document in the 'Chats' subcollection
    const chatRef = doc(db, "Users", userId, "Chats", chatId);

    // Get the chat document snapshot
    const chatDoc = await getDoc(chatRef);

    // Check if the chat document exists
    if (chatDoc.exists()) {
      const chatData = chatDoc.data();

      // Return the messages array if it exists
      return chatData?.messages || [];
    } else {
      throw new Error("Chat does not exist.");
    }
  } catch (e) {
    console.error("Error fetching messages:", e);
    return []; // Return an empty array in case of error
  }
};

// Function to add a message to a specific chat
export const AddMessage = async (
  userId: string,
  chatId: string,
  message: string,
  sender: string
) => {
  const timeStamp = new Date();
  try {
    // Reference to the specific chat document inside the user's Chats subcollection
    const chatRef = doc(db, "Users", userId, "Chats", chatId);

    // Check if the chat document exists
    const docSnapshot = await getDoc(chatRef);

    if (!docSnapshot.exists()) {
      throw new Error("Chat does not exist");
    }

    // Append the new message to the messages array in the chat
    await updateDoc(chatRef, {
      messages: arrayUnion({ sender, message, timeStamp }),
    });
  } catch (e) {
    console.error("Error adding message:", e);
    alert(e);
  }
};
