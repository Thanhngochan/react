import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, saveUsers } from "./auth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const nav = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    setErr("");

    const users = getUsers();
    const exists = users.some((u) => u.email === email);

    if (exists) return setErr("Email đã tồn tại.");
    if (pw.length < 4) return setErr("Mật khẩu tối thiểu 4 ký tự.");

    users.push({ email, pw });
    saveUsers(users);

    nav("/login");
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Sign up</h2>

      <form onSubmit={handleSignup} style={{ display: "grid", gap: 10, maxWidth: 320 }}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="Password"
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        {err && <p style={{ color: "crimson" }}>{err}</p>}
        <button>Create</button>
      </form>

      <p>
        Have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}
