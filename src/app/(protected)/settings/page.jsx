import Link from "next/link";
import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import SettingsList from "./_components/SettingsList";

export default function SettingsPage() {
  return (
    <div className="md:ml-64">
      <Container>
        <Header title="Configurações" showBack />

        <div className="flex-1 p-6 space-y-6">
          <SettingsList />

          <Link
            href="/home"
            className="block w-full py-3 px-6 bg-amber-700 hover:bg-amber-800 text-white text-center rounded-lg font-semibold transition-colors mt-8"
          >
            Voltar ao Jogo
          </Link>
        </div>
      </Container>
    </div>
  );
}
