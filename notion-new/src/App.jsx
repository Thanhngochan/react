import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import NotionApp from "./NotionApp.jsx";
import SettingsPage from "./SettingsPage.jsx";
import AboutPage from "./AboutPage.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <BrowserRouter>
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="navbar-brand">HÂN NOTION</div>

          <div className="navbar-links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              Settings
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              About
            </NavLink>
          </div>
        </nav>

        {/* MAIN LAYOUT */}
        <div className="app-layout">
          <Routes>
            <Route path="/" element={<NotionApp />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
