'use client'

import Navbar from "@/components/Navbar/NavBar";

export default function Home() {
  return (
    <main className="dark:bg-black bg-gray-100 min-h-screen p-4">
      <Navbar />
      <header className="text-center">
        <h1 className="dark:text-white text-4xl font-bold text-gray-800 mb-4">Meu Portfólio</h1>
        <p className="dark:text-slate-400 text-xl text-gray-600">Bem-vindo ao meu portfólio de projetos.</p>
      </header>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Projetos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Aqui você pode adicionar os cards ou componentes dos projetos */}
        </div>
      </section>
    </main>
  );
}