import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Waxaanu u isticmaaleynaa 'user' si aan u ogaano in qofku soo galay iyo in kale
  const [user, setUser] = useState(null); 

  const login = (username, password) => {
    // kan hoose waa login been-abuur ah. Waxaan hubineynaa in username iyo password ay jiraan
    if (username && password) {
      setUser({ id: 1, username });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user; // Haddi user-ku jiro, waa authenticated

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};