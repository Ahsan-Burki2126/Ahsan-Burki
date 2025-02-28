import { useEffect, useState } from "react";

const CursorRing = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none w-10 h-10 border-2 border-[#af2676] rounded-full transition-transform duration-1000 ease-out z-10"
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
      }}
    ></div>
  );
};

export default CursorRing;
