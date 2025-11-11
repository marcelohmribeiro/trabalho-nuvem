"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

/**
 * Protected Layout
 *
 * Layout para rotas protegidas (home, shop, profile, etc)
 * Responsabilidade: Prover estrutura comum e verificação de autenticação
 *
 * Princípio SRP: Responsável apenas por layout e verificação de auth client-side
 */

export default function ProtectedLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Verificação client-side adicional
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // Mostra loading enquanto verifica autenticação
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">☕</div>
          <p className="text-amber-900 font-semibold">Carregando...</p>
        </div>
      </div>
    );
  }

  // Se não está autenticado, não renderiza nada (vai redirecionar)
  if (!user) {
    return null;
  }

  // Renderiza conteúdo protegido
  return children;
}
