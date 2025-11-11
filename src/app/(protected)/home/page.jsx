import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import Sidebar from "@/components/layout/Sidebar";
import Container from "@/components/layout/Container";
import GameArea from "./_components/GameArea";

export default function HomePage() {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Container withNav>
          <Header title="Café Clicker" showSettings />
          <GameArea />
          <BottomNav />
        </Container>
      </div>
    </>
  );
}
