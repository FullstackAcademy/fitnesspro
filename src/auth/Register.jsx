import { useState } from "react";
import { useAuth } from "./AuthContext";
import { usePage } from "../layout/PageContext";
import { Link } from "react-router-dom";

/** A form that allows users to register for a new account */
export default function Register() {
  const { register } = useAuth();
  const { setPage } = usePage();

  const [error, setError] = useState(null);

  const tryRegister = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await register({ username, password });
      setPage("activities");
    } catch (e) {
      setError(e.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tryRegister(new FormData(e.target));
    Link("/login");
  };

  return (
    <>
      <h1>Register for an account</h1>
      <form action={tryRegister}>
        <label>
          Username
          <input type="text" name="username" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button>Register</button>
        {error && <output>{error}</output>}
      </form>
      <a onClick={() => setPage("login")}>
        Already have an account? Log in here.
      </a>
    </>
  );
}
