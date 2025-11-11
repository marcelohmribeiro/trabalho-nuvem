import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { GameProvider } from "@/contexts/GameContext";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <GameProvider>
          <AuthProvider>{children}</AuthProvider>
        </GameProvider>
      </body>
    </html>
  );
}
