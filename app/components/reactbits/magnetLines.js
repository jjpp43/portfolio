import { useRef, useEffect } from "react";

export default function MagnetLines({
rows = 1,
columns = 16,
containerSize = "24vw",
lineColor = "#efefef",
lineWidth = "0.2vmin",
lineHeight = "6vw",
baseAngle = -20,
className = "",
style = {}
}) {
const containerRef = useRef(null);

useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  const items = container.querySelectorAll("span");

  const onTouchMove = (e) => {
    const touch = e.touches[0];
    onPointerMove({ x: touch.clientX, y: touch.clientY });
  };

  const onPointerMove = (pointer) => {
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const centerX = rect.x + rect.width / 2;
      const centerY = rect.y + rect.height / 2;

      const b = pointer.x - centerX;
      const a = pointer.y - centerY;
      const c = Math.sqrt(a * a + b * b) || 1;
      const r =
        ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

      item.style.setProperty("--rotate", `${r}deg`);
    });
  };

  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("touchmove", onTouchMove);

  if (items.length) {
    const middleIndex = Math.floor(items.length / 2);
    const rect = items[middleIndex].getBoundingClientRect();
    onPointerMove({ x: rect.x, y: rect.y });
  }

  return () => {
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("touchmove", onTouchMove);
  };
}, []);

// Create a grid’s worth of spans
const total = rows * columns;
const spans = Array.from({ length: total }, (_, i) => (
  <span
    key={i}
    className="block origin-center"
    style={{
      backgroundColor: lineColor,
      width: lineWidth,
      height: lineHeight,
      "--rotate": `${baseAngle}deg`,
      transform: "rotate(var(--rotate))",
      willChange: "transform"
    }}
  />
));

return (
  <div
    ref={containerRef}
    className={`grid place-items-center ${className}`}
    style={{
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
      width: containerSize,
      height: "auto",
      gap:"1vmin",
      ...style
    }}
  >
    {spans}
  </div>
);
}