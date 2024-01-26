import "../App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HelloWorld from "./HelloWorld/HelloWorld";
import Home from "./Home/Home";
import UserClicks from "./UserClicks/UserClicks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hei-verden" element={<HelloWorld />} />
        <Route path="/click-me" element={<UserClicks />} />
      </Routes>
    </Router>
  );
}

export default App;
