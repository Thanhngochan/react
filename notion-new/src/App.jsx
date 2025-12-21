import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import NotionApp from "./NotionApp.jsx";
import SettingsPage from "./SettingsPage.jsx";
import AboutPage from "./AboutPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink to="/" className="navbar-brand">
          HÂN NOTION
        </NavLink>

        <div className="navbar-links">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/settings" className="nav-link">
            Settings
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<NotionApp />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

