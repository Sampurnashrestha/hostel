import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const ADMIN_USERNAME = "admin@gmail.com";
  const ADMIN_PASSWORD = "admin123";

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      navigate("/dashboard");
    } else {
      setError("Invalid admin username or password");
    }
  };

  return (
    <div className="my-30 flex justify-center md:mx-70 md:my-30">
      <form
        onSubmit={handleLogin}
        className="bg-white w-90 p-8 rounded-xl shadow-2xl"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Admin Login
        </h2>

        <input
          type="text"
          placeholder="Admin Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {error && (
          <p className="text-red-600 text-sm text-center mb-3">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
