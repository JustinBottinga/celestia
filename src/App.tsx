import "./App.css";
import TextField from "./components/TextField/TextField";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="chat" Component={TextField}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
