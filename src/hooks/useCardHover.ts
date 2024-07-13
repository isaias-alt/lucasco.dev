import { useRef, useState, useEffect, useCallback } from "react";

const useCardHover = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  useEffect(() => {
    const divElement = divRef.current;
    if (divElement) {
      divElement.addEventListener("mousemove", handleMouseMove);
      divElement.addEventListener("mouseenter", handleMouseEnter);
      divElement.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        divElement.removeEventListener("mousemove", handleMouseMove);
        divElement.removeEventListener("mouseenter", handleMouseEnter);
        divElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [handleMouseMove])

  return {
    divRef,
    position,
    opacity
  }
}

export default useCardHover