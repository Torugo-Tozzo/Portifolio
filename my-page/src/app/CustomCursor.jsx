import React, { useState, useEffect } from "react";
import { FiCircle } from "react-icons/fi"; // Importe o ícone de círculo do react-icons

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        position: "fixed",
        left: (cursorPosition.x -15)  + "px",
        top: (cursorPosition.y -15) + "px",
        pointerEvents: "none",
        zIndex: 9,
      }}
    >
      <FiCircle size={24} color="white" />
    </div>
  );
};

export default CustomCursor;
