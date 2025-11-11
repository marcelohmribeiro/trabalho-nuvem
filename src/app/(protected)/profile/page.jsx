import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import Sidebar from "@/components/layout/Sidebar";
import Container from "@/components/layout/Container";
import ProfileHeader from "./_components/ProfileHeader";
import StatsGrid from "./_components/StatsGrid";
import ProfileActions from "./_components/ProfileActions";

export default function ProfilePage() {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Container withNav>
          <Header title="Perfil" showSettings />

          <div className="flex-1 p-6 space-y-6">
            <ProfileHeader />
            <StatsGrid />
            <ProfileActions />
          </div>

          <BottomNav />
        </Container>
      </div>
    </>
  );
}
