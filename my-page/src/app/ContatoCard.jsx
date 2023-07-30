import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy, FiCheck } from "react-icons/fi";

const ContatoSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000); // Define o estado de "copied" como false após 3 segundos
  };

  const email = "victorhugo.tozzo@gmail.com"; // Substitua pelo seu endereço de e-mail

  return (
    <div className="bg-white dark:bg-gray-800 w-max p-2 rounded-lg text-center shadow-md transition-transform duration-300 transform hover:scale-150">
      <div className="flex items-center justify-center">
        <p className="text-gray-600 dark:text-white text-lg mb-0 mx-4">{email}</p>
        <CopyToClipboard text={email} onCopy={handleCopyClick}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
            {copied ? (
              <>
                <FiCheck className="mr-1" />
              </>
            ) : (
              <>
                <FiCopy className="mr-1" />
              </>
            )}
            {copied ? "Copiado!" : "Copiar e-mail"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ContatoSection;
