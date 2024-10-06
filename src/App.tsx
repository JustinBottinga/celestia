import "./App.css";
import Chat from "./components/Chat/Chat";
import Home from "./components/Home/Home";
import LearnMore from "./components/LearnMore/LearnMore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="learn" Component={LearnMore}></Route>
        <Route path="chat" Component={Chat}></Route>
        <Route path="/" Component={Home}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
