"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const STEP = 100;

export const ScrollRail = ({ total }: { total: number }) => {
  const rail = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0); // 0..1, huidige scrollpositie
  const [drag, setDrag] = useState<number | null>(null); // index tijdens slepen

  // Handvat volgt het scrollen
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setPos(max > 0 ? scrollY / max : 0);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  const indexAt = (clientY: number) => {
    const r = rail.current!.getBoundingClientRect();
    const f = Math.min(1, Math.max(0, (clientY - r.top) / r.height));
    return Math.min(total - 1, Math.round((f * total) / STEP) * STEP);
  };

  const jump = (index: number) =>
    document
      .querySelector(`[data-index="${index}"]`)
      ?.scrollIntoView({ block: "start" });

  const handleTop = drag !== null ? drag / total : pos;

  const endDrag = () => {
    document.documentElement.style.userSelect = "";
    setDrag(null);
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div
      ref={rail}
      className="fixed top-20 right-1 bottom-20 z-40 w-6 touch-none select-none"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        document.documentElement.style.userSelect = "none";
        getSelection()?.removeAllRanges();
        setDrag(indexAt(e.clientY));
      }}
      onPointerMove={(e) => drag !== null && setDrag(indexAt(e.clientY))}
      onPointerUp={() => {
        if (drag !== null) jump(drag);
        endDrag();
      }}
      onPointerCancel={endDrag}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="absolute inset-y-0 right-2 w-px bg-white/15" />
      {Array.from(
        { length: Math.floor((total - 1) / STEP) + 1 },
        (_, k) => k * STEP,
      ).map((i) => (
        <div
          key={i}
          className="absolute right-1.5 flex items-center gap-1"
          style={{ top: `${(i / total) * 100}%` }}
        >
          {i % 500 === 0 && (
            <span className="text-[9px] text-white/70">{i}</span>
          )}
          <div
            className={`h-px bg-white/30 ${i % 500 === 0 ? "w-2.5" : "w-1.5"}`}
          />
        </div>
      ))}

      <div
        className="absolute right-0 h-6 w-4 -translate-y-1/2 rounded-full bg-white/70 shadow-lg"
        style={{ top: `${handleTop * 100}%` }}
      />

      {drag !== null && (
        <div
          className="absolute right-8 -translate-y-1/2 rounded-lg bg-black/80 px-2.5 py-1 text-sm whitespace-nowrap text-white tabular-nums"
          style={{ top: `${handleTop * 100}%` }}
        >
          {drag} / {total}
        </div>
      )}
    </div>,
    document.body,
  );
};
