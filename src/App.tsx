import "./App.css";
import Chat from "./components/Chat/Chat";
import Home from "./components/Home/Home";
import LearnMore from "./components/LearnMore/LearnMore";
import LoginAndRegister from "./components/LoginAndRegister/LoginAndRegister";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
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
