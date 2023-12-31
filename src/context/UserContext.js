import React, { useState } from "react";

const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({ isAuthenticated: true, token: "", account: {} });

  // Login updates the user data with a name parameter
  const loginContext = (useData) => {
    setUser(useData);
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser((user) => ({
      name: "",
      auth: false,
    }));
  };

  return <UserContext.Provider value={{ user, loginContext, logout }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
