"use client";
import { BsChevronCompactDown } from "react-icons/bs";
import Navbar from "./NavBar";
import Maps from "./Maps";
import Points from "./Points";
import CustomCursor from "./CustomCursor";
import Card from "./Card";
import WeatherCard from "./WeatherCard";

export default function Home() {
  const projetos = [
    {
      imageSrc: "Conversor.png",
      title: "Conversor",
      abstract:
        "Uma aplicação web para conversão e download de videos do youtube a partir de suas respectivas urls.",
      link: "https://github.com/Torugo-Tozzo/Conversor_de_Videos",
    },
    {
      imageSrc: "Uaihoo.png",
      title: "Uaihoo",
      abstract:
        "Um buscador de documentos para matéria de introdução ao Elastic Search Feito em colaboração com @Lucas Justino",
      link: "https://github.com/Torugo-Tozzo/Uaihoo",
    },
    {
      imageSrc: "ASCII.png",
      title: "Imagem para Texto",
      abstract:
        "Trabalho da matéria de processamento de imagem que consistia em transformar imagens em formato .pgm para ASCII",
      link: "https://github.com/Torugo-Tozzo/Trabalho1_PDI",
    },
    // Adicione mais projetos aqui conforme necessário
  ];

  return (
    <div className="">
      <main className="dark:bg-black bg-gray-100 min-h-screen p-4">
        <CustomCursor />
        <header className="text-center">
          <Navbar />
          <h1 className="dark:text-white text-4xl font-bold text-gray-800 mb-0">
            Meu Portfólio
          </h1>
          <Points />
          <BsChevronCompactDown className="animate-bounce w-6 h-6 mb-4 mx-auto dark:text-white" />
        </header>

        <section id="about-section" className="mt-2 text-center">
          <h2 className="dark:text-white text-2xl font-bold text-gray-800 my-3">
            Sobre mim
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 flex justify-center alling-center">
            <div className="bg-white dark:bg-gray-800 w-full w-80 h-80 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110">
              <figure>
                <img
                  className="w-60 h-60 mt-8 border-solid border-4 border-gray-100 rounded-full mx-auto object-cover transition-transform duration-300 transform hover:scale-110"
                  alt="Minha foto"
                  src="/Eu.png"
                />
                <figcaption className="dark:text-white my-2">👆 EU.</figcaption>
              </figure>
            </div>

            <div className="bg-white dark:bg-gray-800 w-full sm:w-80 h-80 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110">
              <p className="m-6 dark:text-white">
                Victor Hugo Tozzo Filho,
                <br /> estudante no curso de Ciência da Computação na
                Universidade Federal de Alfenas (UNIFAL), com previsão de formatura
                no final de 2024.
                <br />
                <br /> Atualmente procurando uma oportunidade de estágio na área
                de desenvolvimento web para concluir a graduação.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 w-full sm:w-80 h-80 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110" >
              <Maps />
            </div>

            <div className="bg-white dark:bg-gray-800 w-full sm:w-80 h-80 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110">
              <WeatherCard />
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
            <h1 className="dark:text-white">contato</h1>
          </div>
        </section>
      </main>
    </div>
  );
}
