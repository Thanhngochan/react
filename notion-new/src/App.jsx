import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";

import NotionApp from "./NotionApp.jsx";
import SettingsPage from "./SettingsPage.jsx";
import AboutPage from "./AboutPage.jsx";

import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignUpPage.jsx";

import ProtectedRoute from "./auth/ProtectedRoute.jsx";
import { useAuth } from "./auth/AuthContext.jsx";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      {/* Brand (bên trái) */}
      <NavLink to="/" className="navbar-brand">
        HÂN NOTION
      </NavLink>

      {/* Links (bên phải - bị đẩy xa nhờ CSS margin-right:auto ở brand) */}
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

      {/* Auth area (ngoài cùng bên phải) */}
      <div className="navbar-auth">
        {user ? (
          <>
            <span className="navbar-user">{user.email}</span>
            <button className="navbar-btn" onClick={logout}>
              Logout
            </button>
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

            {/* Public */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

