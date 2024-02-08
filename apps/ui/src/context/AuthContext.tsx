// AuthContext.tsx
"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  token: string | null;
  email: string | null;
  authLogin: (newToken: string, accessToken: string, email: string) => void;
  authSignup: (newToken: string) => void;
  isAuthenticated: () => void;
  authLogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(
    typeof window !== 'undefined' ?localStorage.getItem('userToken') || null : null
  );

  const [email, setEmail] = useState<string | null>(
    typeof window !== 'undefined' ?localStorage.getItem('email') || null : null
  );

  const authLogin = (newToken: string, accessToken: string, email: string) => {
    setToken(newToken);
    localStorage.setItem('userToken', newToken);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('email', email);
  };

  const authLogout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('userToken');
    localStorage.removeItem('email');
  };

  const authSignup = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('userToken', newToken);
  }

  const isAuthenticated = () => {
    if(token !== null || token !== "") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <AuthContext.Provider value={{ token, email, authLogin, authSignup, authLogout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};