"use client";
import { BsChevronCompactDown } from "react-icons/bs"; 
import Navbar from "./NavBar";
import Maps from "./Maps";
import Points from "./Points";

export default function Home() {
  return (
    <div>
      <main className="dark:bg-black bg-gray-100 min-h-screen p-4">
        <header className="text-center">
          <Navbar />
          <h1 className="dark:text-white text-4xl font-bold text-gray-800 mb-0">
            Meu Portfólio
          </h1>
          <Points />
          <BsChevronCompactDown className="animate-bounce w-6 h-6 mt-4 mx-auto" />
        </header>

        <section id="about-section" className="mt-8 text-center justify-center">
          <h2 className="dark:text-white text-2xl font-bold text-gray-800 my-12">
            Sobre mim
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 alling-center">
            <img
              className="w-96 h-96 py-2 rounded-full border-dotted border-4 border-black dark:border-white mx-auto"
              alt="Minha foto"
              src="/Eu.png"
            />

            <div class="card rounded-none"></div>

            <div>
              <Maps className="rounded-full py-2" />
              <p>Agora em areado faz Sol, eu acho</p>
            </div>
          </div>
        </section>

        <section id="projetos-section" className="mt-8 text-center">
          <h2 className="dark:text-white text-2xl font-bold text-gray-800 mb-4">
            Projetos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"></div>
        </section>

        <section id="contato-section">
          <div className="text-center mt-8">
            <h1 className="text-white">contato</h1>
          </div>
        </section>
      </main>
    </div>
  );
}
