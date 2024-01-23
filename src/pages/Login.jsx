import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="max-w-md bg-white p-8 rounded shadow-blue page" onSubmit={handleLogin}>
        <label className="block mb-4 ">
          Email:
          <input
            type="email"
            className="form-input mt-1 block w-full"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="block mb-4">
          Password:
          <input
            type="password"
            className="form-input mt-1 block w-full"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Log In
        </button>
        <p className="mt-4">
          Don't have an account? <Link to="/sign" className="text-blue-500 hover:underline">Sign up here</Link>.
        </p>
        <h5>

        </h5>
      </form>
    </div>
  );
}

export { Login };
