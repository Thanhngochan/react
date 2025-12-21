import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, setSession } from "./auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const nav = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    setErr("");

    const users = getUsers();
    const ok = users.some((u) => u.email === email && u.pw === pw);

    if (!ok) return setErr("Sai email hoặc mật khẩu.");

    setSession({ email });
    nav("/");
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Log in</h2>

      <form onSubmit={handleLogin} style={{ display: "grid", gap: 10, maxWidth: 320 }}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="Password"
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        {err && <p style={{ color: "crimson" }}>{err}</p>}
        <button>Log in</button>
      </form>

      <p>
        No account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
