import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main
        id="main-content"
        className="flex flex-1 items-center justify-center px-5 py-16"
      >
        <div className="text-center">
          <p className="text-7xl font-bold text-ieee-blue sm:text-8xl">
            404
          </p>

          <h1 className="mt-4 text-3xl font-semibold text-content-primary">
            Página não encontrada
          </h1>

          <p className="mt-3 text-base text-content-secondary">
            A página que você está procurando não existe ou foi removida.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}