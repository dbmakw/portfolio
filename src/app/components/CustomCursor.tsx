import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const posRef = useRef({ x: -100, y: -100 });
  const dotPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      dotPosRef.current.x += (posRef.current.x - dotPosRef.current.x) * 0.12;
      dotPosRef.current.y += (posRef.current.y - dotPosRef.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x - 4}px, ${posRef.current.y - 4}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPosRef.current.x - 20}px, ${dotPosRef.current.y - 20}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-2 h-2 rounded-full"
        style={{ background: "#00d4ff", boxShadow: "0 0 8px #00d4ff, 0 0 20px #00d4ff" }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-10 h-10 rounded-full border transition-all duration-150"
        style={{
          borderColor: isHovering ? "#00ff9d" : "#00d4ff",
          borderWidth: isHovering ? "2px" : "1px",
          opacity: isHovering ? 0.9 : 0.5,
          transform: isHovering ? "scale(1.5)" : "scale(1)",
          boxShadow: isHovering ? "0 0 15px #00ff9d40" : "none",
        }}
      />
    </>
  );
}
