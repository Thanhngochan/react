// src/App.jsx
import { BrowserRouter, Routes, Route, NavLink, Navigate, useNavigate } from "react-router-dom";

import NotionApp from "./NotionApp.jsx";
import SettingsPage from "./SettingsPage.jsx";
import AboutPage from "./AboutPage.jsx";

import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

import { getSession, logout } from "./auth";

// Navbar tách riêng cho gọn
function Navbar() {
  const nav = useNavigate();
  const session = getSession(); // { email } | null

  function handleLogout() {
    logout();
    nav("/login");
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">HÂN NOTION</div>

      <div className="navbar-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
        >
          Settings
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
        >
          About
        </NavLink>
      </div>

      <div style={{ marginLeft: "auto", display: "flex", gap: 10, alignItems: "center" }}>
        {session ? (
          <>
            <span style={{ opacity: 0.8, fontSize: 14 }}>{session.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              Sign up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

// Route wrapper cực đơn giản (không tách file)
function RequireAuth({ children }) {
  const session = getSession();
  if (!session) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />

        <div className="app-layout">
          <Routes>
            {/* Protected */}
            <Route
              path="/"
              element={
                <RequireAuth>
                  <NotionApp />
                </RequireAuth>
              }
            />
            <Route
              path="/settings"
              element={
                <RequireAuth>
                  <SettingsPage />
                </RequireAuth>
              }
            />

            {/* Public */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

