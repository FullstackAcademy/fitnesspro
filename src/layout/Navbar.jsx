import { useAuth } from "../auth/AuthContext";
import { usePage } from "./PageContext";
import { BrowserRouter, Link } from "react-router-dom";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  const { setPage } = usePage();
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <Link to="/">Activities</Link>
        <Link to="/routines">Routines</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
