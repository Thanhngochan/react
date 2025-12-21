import { BrowserRouter, Routes, Route, NavLink, useNavigate, Navigate } from "react-router-dom";

import NotionApp from "./NotionApp.jsx";
import SettingsPage from "./SettingsPage.jsx";
import AboutPage from "./AboutPage.jsx";

import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignUpPage.jsx";

import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import { useAuth } from "./auth/AuthContext.jsx";

function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  function handleLogout() {
    logout();
    nav("/login");
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">HÂN NOTION</div>

      <div className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
          Home
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
          Settings
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
          About
        </NavLink>
      </div>

      <div style={{ marginLeft: "auto", display: "flex", gap: 10, alignItems: "center" }}>
        {user ? (
          <>
            <span style={{ opacity: 0.8, fontSize: 14 }}>{user.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Login
            </NavLink>
            <NavLink to="/signup" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
              Sign up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />

        <div className="app-layout">
          <Routes>
            {/* Protected routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <NotionApp />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <SettingsPage />
                </ProtectedRoute>
              }
            />

            {/* Public routes */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
