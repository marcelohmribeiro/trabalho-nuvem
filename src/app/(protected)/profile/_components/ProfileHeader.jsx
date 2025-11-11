"use client";

import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

export default function ProfileHeader() {
  const { user, refreshUser, loading } = useAuth();

  useEffect(() => {
    // Atualizar dados do usuário ao carregar perfil
    if (refreshUser) {
      refreshUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="bg-linear-to-br from-amber-100 to-amber-200 rounded-xl p-8 text-center shadow-md">
        <div className="text-7xl mb-4">⏳</div>
        <p className="text-amber-700">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="bg-linear-to-br from-amber-100 to-amber-200 rounded-xl p-8 text-center shadow-md">
      <div className="text-7xl mb-4">👤</div>
      <h2 className="text-2xl font-bold text-amber-900 mb-1">
        {user?.username || "Usuário"}
      </h2>
      <p className="text-amber-700 text-sm mb-1">{user?.email || ""}</p>
      <p className="text-amber-700">
        Nível {user?.level || 1} - Mestre do Café
      </p>
    </div>
  );
}
