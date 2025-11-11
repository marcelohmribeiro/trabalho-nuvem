"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import Sidebar from "@/components/layout/Sidebar";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import RankingContent from "./_components/RankingContent";

export default function RankingPage() {
  const router = useRouter();

  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Container withNav>
          <Header title="Ranking" />

          <div className="flex-1 p-6 space-y-6">
            <RankingContent />

            {/* Botão Voltar */}
            <Button onClick={() => router.push("/home")}>
              <span>🎮</span>
              Voltar ao Jogo
            </Button>
          </div>

          <BottomNav />
        </Container>
      </div>
    </>
  );
}
