import React from "react";
import { FiGithub } from "react-icons/fi";

const Card = ({ imageSrc, title, abstract, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-110">
      <div className="flex items-center mb-4">
        <FiGithub size={24} className="mr-2 dark:text-white" />
        <h3 className="text-lg font-bold dark:text-white">{title}</h3>
      </div>
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded" />
      <p className="text-gray-600 dark:text-gray-400 mt-4">{abstract}</p>
      <a className="underline text-blue-500" href={link}>{link}</a>
    </div>
  );
};

export default Card;
