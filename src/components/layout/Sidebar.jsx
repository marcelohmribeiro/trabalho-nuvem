"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { path: "/home", icon: "🏠", label: "Início" },
    { path: "/shop", icon: "🏪", label: "Loja" },
    { path: "/profile", icon: "👤", label: "Perfil" },
    { path: "/ranking", icon: "🏆", label: "Ranking" },
  ];

  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-linear-to-b from-amber-900 to-amber-800 text-amber-50 shadow-lg fixed left-0 top-0 h-screen z-50">
      <div className="p-6 border-b border-amber-700">
        <div className="flex items-center gap-2">
          <span className="text-3xl">☕</span>
          <h1 className="text-xl font-bold">Café Clicker</h1>
        </div>
      </div>

      <nav className="flex-1 p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-amber-700 text-amber-50"
                  : "text-amber-100 hover:bg-amber-800"
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-amber-700">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-amber-100 hover:bg-amber-800 transition-all duration-200"
        >
          <span className="text-2xl">⚙️</span>
          <span className="font-medium">Configurações</span>
        </Link>
      </div>
    </aside>
  );
}
