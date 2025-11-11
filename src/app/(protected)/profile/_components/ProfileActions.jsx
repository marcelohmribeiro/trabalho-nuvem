"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Button from "@/components/ui/Button";

export default function ProfileActions() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <div className="space-y-3">
      <Button variant="primary">
        <span>✏️</span>
        Editar Perfil
      </Button>
      <Button variant="secondary" onClick={handleLogout}>
        <span>🚪</span>
        Sair
      </Button>
    </div>
  );
}
