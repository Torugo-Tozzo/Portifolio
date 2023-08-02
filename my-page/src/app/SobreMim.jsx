import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Maps from "./Maps";
import WeatherCard from "./WeatherCard";
import { SiUdemy, SiCoursera, SiFreecodecamp } from "react-icons/si";
import {
  BiLogoJquery,
  BiLogoTux,
  BiLogoTailwindCss,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoPython,
  BiLogoFigma,
  BiLogoReact,
  BiLogoCPlusPlus,
} from "react-icons/bi";

const AboutSection = () => {
  const [carouselSettings, setCarouselSettings] = useState({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 798, // Tela pequena (tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 570, // Celular
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  return (
    <Slider className="mx-6 grid grid-col-3 dark:text-white" {...carouselSettings}>
      <div className="my-4 mr-1 mx-2 bg-white dark:bg-gray-800 w-full sm:w-80 h-80 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110">
        <figure>
          <img
            className="w-60 h-60 mt-8 border-solid border-4 border-gray-100 rounded-full mx-auto object-cover transition-transform duration-300 transform hover:scale-110"
            alt="Minha foto"
            src="/Eu.png"
          />
          <figcaption className="dark:text-white my-2">👆 EU.</figcaption>
        </figure>
      </div>

      <div className="dark:text-white mx-3 my-4 bg-white dark:bg-gray-800 w-full sm:w-80 h-80 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110 flex items-center justify-center">
        <h3 className="dark:text-white text-2xl font-bold text-gray-800 my-3">
          Áreas que domino:
        </h3>
        <div className="flex my-4 items-center justify-center">
          <BiLogoHtml5 className="text-6xl mr-4" />
          <BiLogoCss3 className="text-6xl" />
          <BiLogoJavascript className="text-6xl mr-4" />
          <BiLogoReact className="text-6xl" />
        </div>
        <div className="flex my-4 items-center justify-center">
          <BiLogoNodejs className="text-6xl" />
          <BiLogoMongodb className="text-6xl mr-4" />
          <BiLogoFigma className="text-6xl mr-4" />
          <BiLogoTailwindCss className="text-6xl" />
        </div>
        <div className="flex my-4 items-center justify-center">
          <BiLogoCPlusPlus className="text-6xl" />
          <BiLogoPython className="text-6xl" />
          <BiLogoTux className="text-6xl mr-4" />
          <BiLogoJquery className="text-6xl" />
        </div>
      </div>

      <div className="my-4 mx-4  bg-white dark:bg-gray-800 w-full sm:w-80 h-80 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110">
        <p className="m-6 dark:text-white text-1xl font-bold text-gray-800">
          Victor Hugo Tozzo Filho,
          <br /> estudante no curso de Ciência da Computação na Universidade
          Federal de Alfenas (UNIFAL), com previsão de formatura no final de
          2024.
          <br />
          <br />
          Atualmente procurando uma oportunidade de estágio na área de
          desenvolvimento web para concluir a graduação.
        </p>
      </div>

      <div className="my-4 mx-5 bg-white dark:bg-gray-800 w-full sm:w-80 h-80 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110">
        <Maps />
        <p className="mt-2 dark:text-white">👆 Onde estudo</p>
      </div>

      <div className="my-4 bg-white dark:bg-gray-800 w-full sm:w-80 h-80 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110 flex items-center justify-center">
        <WeatherCard />
      </div>

      <div className="my-4 mx-1 bg-white dark:bg-gray-800 w-full sm:w-80 h-80 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110 flex flex-col items-center justify-center text-center">
  <div className="my-3">
    <SiCoursera size={30} className="mx-auto mb-2 text-size-8 text-blue-700" />
    <h3 className="dark:text-white text-1xl font-bold text-gray-800">
      Certificado Profissional Google Data Analytics (PT)
    </h3>
    <a href="https://coursera.org/verify/QQVEGVSEX3MZ"><p className="text-blue-500">link do cerficado Coursera</p></a>
  </div>

  <div className="mb-3">
    <SiUdemy size={30} className="mx-auto mb-2 text-purple-700" />
    <h3 className="dark:text-white text-1xl font-bold text-gray-800">
      The Complete 2023 Web Development Bootcamp
    </h3>
    <a href="https://www.udemy.com/certificate/UC-cbc23c3d-01f5-4526-96ad-ce10b24a6440/"><p className="text-blue-500">link do cerficado Udemy</p></a>
  </div>

  <div className="mb-3">
    <SiFreecodecamp size={30} className="mx-auto mb-2 dark:text-white" />
    <h3 className="dark:text-white text-1xl font-bold text-gray-800">
      JavaScript Algorithms Data Structures
    </h3>
    <a href="https://freecodecamp.org/certification/Torugo-Tozzo/javascript-algorithms-and-data-structures"><p className="text-blue-500">link do cerficado FreeCodeCamp</p></a>
  </div>
</div>

    </Slider>
  );
};

export default AboutSection;
