import { Routes, Route, NavLink } from "react-router-dom";
import NotionApp from "./NotionApp.jsx";
import SettingsPage from "./SettingsPage.jsx";
import AboutPage from "./AboutPage.jsx";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav
        style={{
          height: "56px",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          borderBottom: "1px solid #ddd",
          backgroundColor: "#ffffff",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontWeight: 600 }}>Hân Notion</div>

        <div style={{ display: "flex", gap: "16px", fontSize: "14px" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#1976d2" : "#444",
              fontWeight: isActive ? 600 : 400,
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/settings"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#1976d2" : "#444",
              fontWeight: isActive ? 600 : 400,
            })}
          >
            Settings
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#1976d2" : "#444",
              fontWeight: isActive ? 600 : 400,
            })}
          >
            About
          </NavLink>
        </div>
      </nav>

      {/* NỘI DUNG TỪ ROUTER */}
      <Routes>
        <Route path="/" element={<NotionApp />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;

