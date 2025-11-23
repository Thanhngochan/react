import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function HomePage() {
  return <h1>Trang Home – Notion mini của bé Hân</h1>;
}

function SettingsPage() {
  return <h1>Trang Settings</h1>;
}

function AboutPage() {
  return <h1>Trang About</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/settings">Settings</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
