// komponen/Login.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 max-w-md w-full px-4 py-3 bg-white shadow-md rounded-lg">
      <label className="block mb-2">NAMA:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
        required
      />
      <br />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        MASUK
      </button>
    </form>
  );
};

export default Login;
