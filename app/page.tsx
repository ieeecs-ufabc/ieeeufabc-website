import { Header } from "@/components/layout/Header";
import { StudentBranchSection } from "@/components/sections/StudentBranchSection";
import { BoardSection } from "@/components/sections/BoardSection";
import { JoinIEEESection } from "@/components/sections/JoinIEEESection";
import { VolunteersSection } from "@/components/sections/VolunteersSection";

export default function Home() {
  return (
    <>
      <Header />

      <main id="inicio">
        <section className="flex min-h-screen items-center justify-center px-6">
          <h1 className="text-center text-4xl font-bold text-ieee-blue">
            IEEE UFABC
          </h1>
        </section>

        <StudentBranchSection />
        <BoardSection />
        <VolunteersSection />
        <JoinIEEESection />
      </main>
    </>
  );
}