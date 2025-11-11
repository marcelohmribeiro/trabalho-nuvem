"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { path: "/home", icon: "🏠", label: "Início" },
    { path: "/shop", icon: "🏪", label: "Loja" },
    { path: "/profile", icon: "👤", label: "Perfil" },
    { path: "/ranking", icon: "🏆", label: "Ranking" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-linear-to-t from-amber-900 to-amber-800 shadow-lg md:hidden z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 ${
                isActive
                  ? "text-amber-200 bg-amber-800/50"
                  : "text-amber-50/70 hover:text-amber-50"
              }`}
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
