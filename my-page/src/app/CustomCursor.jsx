import React, { useState, useEffect } from "react";
import { FiStopCircle } from "react-icons/fi"; // Importe o ícone de círculo do react-icons

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        position: "fixed",
        left: cursorPosition.x - 15 + "px",
        top: cursorPosition.y - 15 + "px",
        pointerEvents: "none",
        zIndex: 9,
        transform: isClicked ? "scale(0.5)" : "scale(1)",
        transition: "transform 0.2s",
      }}
    >
      <FiStopCircle
        size={24}
        color={"white"}
        strokeWidth={isClicked ? 2 : 1}
      />
    </div>
  );
};

export default CustomCursor;
