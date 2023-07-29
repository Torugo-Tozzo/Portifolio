"use client";
import { BsChevronCompactDown } from "react-icons/bs";
import Navbar from "./NavBar";
import Maps from "./Maps";
import Points from "./Points";
import CustomCursor from "./CustomCursor";
import Card from "./Card";

export default function Home() {
  
    const projetos = [
      {
        imageSrc: "Conversor.png",
        title: "Conversor",
        abstract: "Uma aplicação web para conversão e download de videos do youtube a partir de suas respectivas urls.",
        link: "https://github.com/Torugo-Tozzo/Conversor_de_Videos",
      },
      {
        imageSrc: "Uaihoo.png",
        title: "Uaihoo",
        abstract: "Um buscador de documentos para matéria de introdução ao Elastic Search Feito em colaboração com @Lucas Justino",
        link:"https://github.com/Torugo-Tozzo/Uaihoo",
      },
      // Adicione mais projetos aqui conforme necessário
    ];

  return (
    <div>
      <main className="dark:bg-black bg-gray-100 min-h-screen p-4">
        <CustomCursor />
        <header className="text-center">
          <Navbar />
          <h1 className="dark:text-white text-4xl font-bold text-gray-800 mb-0">
            Meu Portfólio
          </h1>
          <Points />
          <BsChevronCompactDown className="animate-bounce w-6 h-6 mt-4 mx-auto dark:text-white" />
        </header>

        <section id="about-section" className="mt-8 text-center justify-center">
          <h2 className="dark:text-white text-2xl font-bold text-gray-800 my-12">
            Sobre mim
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 alling-center">
            <figure>
              <img
                className="w-96 h-96 py-2 rounded-full border-dotted border-4 border-black dark:border-white mx-auto object-cover transition-transform duration-300 transform hover:scale-110"
                alt="Minha foto"
                src="/Eu.png"
              />
              <figcaption className="dark:text-white my-2">
                Victor Hugo Tozzo Filho
              </figcaption>
            </figure>

            <div className="card rounded-none"></div>

            <div>
              <Maps className="rounded-full py-2" />
              <p>Agora em Areado faz Sol, eu acho</p>
            </div>
          </div>
        </section>

        <section id="projetos-section" className="mt-10 text-center">
          <h2 className="dark:text-white text-2xl font-bold text-gray-800 mb-4">
            Alguns projetos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projetos.map((projeto, index) => (
              <Card key={index} {...projeto} />
            ))}
          </div>
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
