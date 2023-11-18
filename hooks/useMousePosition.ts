"use client";

import { useEffect, useState } from "react";

interface IMousePosition {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<IMousePosition>({ x: 0, y: 0, velocityX: 0, velocityY: 0 });
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY, velocityX: ev.movementX, velocityY: ev.movementY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;
