import "./App.css";
import TextField from "./components/TextField/TextField";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Review from "./components/Review/Review";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Review />
      <TextField />
    </>
  );
}

export default App;
