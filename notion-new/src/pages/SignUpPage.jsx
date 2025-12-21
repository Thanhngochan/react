import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, saveUsers, simpleHash } from "../auth/authStorage";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);

    const users = getUsers();
    const normalized = email.trim().toLowerCase();

    if (!normalized.includes("@")) {
      setLoading(false);
      return setErr("Email không hợp lệ.");
    }
    if (pw.length < 6) {
      setLoading(false);
      return setErr("Mật khẩu tối thiểu 6 ký tự.");
    }
    if (users.some((u) => u.email.toLowerCase() === normalized)) {
      setLoading(false);
      return setErr("Email này đã được đăng ký.");
    }

    const passwordHash = await simpleHash(pw);
    saveUsers([...users, { email: normalized, passwordHash }]);

    setLoading(false);
    nav("/login");
  }

  return (
    <div className="auth-page">
      <h1>Sign up</h1>

      <form className="auth-form" onSubmit={handleSignup}>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Password
          <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
        </label>

        {err && <p className="auth-error">{err}</p>}

        <button disabled={loading}>{loading ? "Creating..." : "Create account"}</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}
