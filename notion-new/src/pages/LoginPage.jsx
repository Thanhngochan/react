import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, simpleHash } from "../auth/authStorage";
import { useAuth } from "../auth/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();
  const { login } = useAuth();

  async function handleLogin(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);

    const users = getUsers();
    const normalized = email.trim().toLowerCase();
    const found = users.find((u) => u.email.toLowerCase() === normalized);

    if (!found) {
      setLoading(false);
      return setErr("Email không tồn tại.");
    }

    const passwordHash = await simpleHash(pw);
    if (passwordHash !== found.passwordHash) {
      setLoading(false);
      return setErr("Mật khẩu không đúng.");
    }

    login(found.email);
    setLoading(false);
    nav("/");
  }

  return (
    <div className="auth-page">
      <h1>Log in</h1>

      <form className="auth-form" onSubmit={handleLogin}>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Password
          <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
        </label>

        {err && <p className="auth-error">{err}</p>}

        <button disabled={loading}>{loading ? "Signing in..." : "Log in"}</button>
      </form>

      <p>
        No account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
