import "../App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HelloWorld from "./HelloWorld/HelloWorld";
import Home from "./HomeScreen/Home/Home";
import UserClicks from "./UserClicks/OneButton/UserClicks";
import MultipleButtons from "./UserClicks/MultipleButtons/MultipleButtons";
import HomeScreen from "./HomeScreen/HomeScreen";
import CountingButton from "./UserClicks/CountingButton/CountingButton";
import MappingArray from "./MappingArray/MappingArray";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/hei-verden" element={<HelloWorld />} />
        <Route path="/click-me" element={<UserClicks />} />
        <Route path="click-multiple-buttons" element={<MultipleButtons />} />
        <Route path='/button-counter' element={<CountingButton />} />
        <Route path="/mapping-array" element={<MappingArray />} />
        <Route
          path="*"
          element={
            <>
              <Home />
              <h1>404 Page not found</h1>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
