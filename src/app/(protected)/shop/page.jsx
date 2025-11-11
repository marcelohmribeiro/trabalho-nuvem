import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import Sidebar from "@/components/layout/Sidebar";
import Container from "@/components/layout/Container";
import BalanceCard from "./_components/BalanceCard";
import ProductGrid from "./_components/ProductGrid";

export default function ShopPage() {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Container withNav>
          <Header title="Loja" />

          <div className="flex-1 p-6 space-y-6">
            <BalanceCard />
            <ProductGrid />
          </div>

          <BottomNav />
        </Container>
      </div>
    </>
  );
}
