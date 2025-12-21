import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { clearSession, getSession, setSession } from "./authStorage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { email } | null
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    setUser(getSession());
    setIsAuthLoading(false);

    // Đồng bộ nếu em mở nhiều tab
    const onStorage = () => setUser(getSession());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function login(email) {
    const session = { email };
    setSession(session);
    setUser(session);
  }

  function logout() {
    clearSession();
    setUser(null);
  }

  const value = useMemo(
    () => ({ user, isAuthLoading, login, logout }),
    [user, isAuthLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
