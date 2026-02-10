import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";
import ChatBot from "./pages/ChatBot";
import Submissions from "./pages/Submissions";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              HealthBridge
            </Link>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/chat" className="nav-link">
                  Chat
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/submissions" className="nav-link">
                  Submissions
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/chat" element={<ChatBot />} />
          <Route path="/submissions" element={<Submissions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
