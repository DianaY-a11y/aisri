import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Action from "./pages/Action";
import About from "./pages/aboutUs";
import Work from "./pages/work";
import Donation from "./pages/Donation.js";
import NavBar from "./components/navbar";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            Coming soon
          </div>

          {/* <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Work" element={<Work />} />
            <Route path="/Action" element={<Action />} />
            <Route path="/Donation" element={<Donation />} />
          </Routes> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
