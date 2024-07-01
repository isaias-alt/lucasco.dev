import { useRef, useState, useEffect, useCallback } from "react";

const useProjectCardHover = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!divRef.current || focused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  }, [focused]);

  const handleFocus = () => {
    setFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setFocused(false);
    setOpacity(0);
  };

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
      divElement.addEventListener("focus", handleFocus);
      divElement.addEventListener("blur", handleBlur);
      divElement.addEventListener("mouseenter", handleMouseEnter);
      divElement.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        divElement.removeEventListener("mousemove", handleMouseMove);
        divElement.removeEventListener("focus", handleFocus);
        divElement.removeEventListener("blur", handleBlur);
        divElement.removeEventListener("mouseenter", handleMouseEnter);
        divElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [focused, handleMouseMove])

  return {
    divRef,
    position,
    opacity
  }
}

export default useProjectCardHover