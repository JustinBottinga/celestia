import "./App.css";
import TextField from "./components/TextField/TextField";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Review from "./components/Review/Review";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return;
  {
    /* <Navigation /> */
  }
  {
    /* <Review /> */
  }
  <BrowserRouter>
    <Routes>
      <Route path="chat" Component={TextField}></Route>
      <Route path="/" Component={Home}></Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
