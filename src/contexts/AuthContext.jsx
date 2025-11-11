"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { authService } from "@/services/auth";
import { GameContext } from "./GameContext";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const gameContext = useContext(GameContext);

  useEffect(() => {
    // Verificar se há usuário logado ao carregar
    async function loadUser() {
      const currentUser = authService.checkAuth();
      if (currentUser) {
        const userData = await authService.getCurrentUserData();
        setUser(userData);
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const login = async (email, password) => {
    const result = await authService.login(email, password);
    if (result.success) {
      const userData = await authService.getCurrentUserData();
      setUser(userData);
    }
    return result;
  };

  const register = async (username, email, password) => {
    const result = await authService.register(username, email, password);
    if (result.success) {
      const userData = await authService.getCurrentUserData();
      setUser(userData);
    }
    return result;
  };

  const logout = async () => {
    const result = await authService.logout();
    if (result.success) {
      setUser(null);
      // Clear game state when user logs out to prevent data leaking between accounts
      if (gameContext?.clearGameState) {
        gameContext.clearGameState();
      }
    }
    return result;
  };

  const updateUser = (data) => {
    setUser((prev) => ({ ...prev, ...data }));
  };

  const refreshUser = async () => {
    const userData = await authService.getCurrentUserData();
    if (userData) {
      setUser(userData);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        updateUser,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
