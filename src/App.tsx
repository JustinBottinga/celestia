import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Home from "./components/Home/Home";
import LearnMore from "./components/LearnMore/LearnMore";
import LoginAndRegister from "./components/LoginAndRegister/LoginAndRegister";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


function App() {
  // const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Check if a UUID is already stored in localStorage
    let storedUserId = localStorage.getItem("user_id");

    if (!storedUserId) {
      // If no UUID is found, generate a new one and store it
      const newUserId = uuidv4();
      localStorage.setItem("user_id", newUserId);
      storedUserId = newUserId;
    }

    // // Set the userId state
    // setUserId(storedUserId);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="learn" Component={LearnMore}></Route>
        <Route path="chat" Component={Chat}></Route>
        <Route path="LoginAndRegister" Component={LoginAndRegister}></Route>
        <Route path="*" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
