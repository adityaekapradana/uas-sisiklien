// komponen/UserProfile.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const UserProfile = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return null;
  }

  return (
    <div className="mb-4 max-w-md w-full px-4 py-3 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-2">User Profile</h2>
      <p className="mb-2">Username: {user.username}</p>
      <button onClick={logout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
