import { Header } from "@/components/layout/Header";
import { StudentBranchSection } from "@/components/sections/StudentBranchSection";
import { BoardSection } from "@/components/sections/BoardSection";
import { JoinIEEESection } from "@/components/sections/JoinIEEESection";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <Header />

      <main id="inicio">
        <HeroSection />
        <StudentBranchSection />
        <BoardSection />
        <JoinIEEESection />
      </main>
    </>
  );
}