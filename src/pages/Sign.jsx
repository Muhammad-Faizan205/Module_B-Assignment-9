
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sign() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    console.log('Signing up with:', { email, password, confirmPassword });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="max-w-md bg-white p-8 rounded shadow-md page" onSubmit={handleSignUp}>
        <label className="block mb-4">
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
        <label className="block mb-4">
          Confirm Password:
          <input
            type="password"
            className="form-input mt-1 block w-full"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Sign Up
        </button>
        <p className="mt-4">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log in here</Link>.
        </p>
      </form>
    </div>
  );
}

export { Sign };
