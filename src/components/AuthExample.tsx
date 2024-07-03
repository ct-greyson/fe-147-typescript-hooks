import React, { useState } from "react";

// interface with name and email (both strings) called AuthUser

interface AuthUser {
  name: string;
  email: string;
}

const AuthExample = () => {
  // user can either be AuthUser or null if we don't have one
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    const newUser = { name: "Cloud", email: "cloudstrife@ff7.com" };
    setUser(newUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <h1>User Login</h1>
      {/* Optional Chaining - if the property does NOT exist, evaluate to undefined, but don't throw an error 
      -there's a chance that we might have null data so we need to account for it
      */}
      <p>Name: {user?.name ? user.name : 'Please Login'} </p>
      <p>Email: {user?.email} </p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AuthExample;
