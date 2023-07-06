"use client";
import { useState, useEffect, useRef } from "react";
import Links from "./Links";
import DarkButton from "./DarkButton";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="dark:bg-black bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <DarkButton />
          </div>
          <div className="relative" ref={menuRef}>
  <button
    type="button"
    className="focus:outline-none w-8 h-8"
    onClick={handleMenuToggle}
  >
    <img
      src="/arrow.png"
      alt="Foto"
      className="h-8 w-8 rounded-full"
    />
  </button>
  {isMenuOpen && (
    <div className="absolute top-12 right-0 bg-white w-48 py-2 rounded-md shadow">
      <Links />
    </div>
  )}
</div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
