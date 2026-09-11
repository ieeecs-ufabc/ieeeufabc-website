import { Header } from "@/components/layout/Header";
import { StudentBranchSection } from "@/components/sections/StudentBranchSection";
import { BoardSection } from "@/components/sections/BoardSection";
import { JoinIEEESection } from "@/components/sections/JoinIEEESection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChaptersSection } from "@/components/sections/ChaptersSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main id="inicio">
        <HeroSection />
        <StudentBranchSection />
        <ChaptersSection />
        <ImpactSection />
        <BoardSection />
        <JoinIEEESection />
      </main>

      <Footer />
    </>
  );
}