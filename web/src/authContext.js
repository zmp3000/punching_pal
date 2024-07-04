import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [adminAuth, setAdminAuth] = useState(false);

  const login = () => {
    setAdminAuth(true);
  };

  const logout = () => {
    setAdminAuth(false);
  };

  return (
    <AuthContext.Provider value={{ adminAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
