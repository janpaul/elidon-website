"use client";
import { useState, useEffect } from "react";

type Bubble = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  rotate: number;
  dr: number;
};
const WordBubble = ({ word }: { word: string }) => {
  const [bubble, setBubble] = useState<Bubble | undefined>();
  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setBubble({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 - 1,
      rotate: 45 - Math.random() * 90,
      dr: Math.random() - 0.5,
    });
    setInterval(() => {
      setBubble((b) => {
        if (!b) return;
        let nx = b.x + b.dx;
        if (nx < 0 || nx > innerWidth) {
          nx = Math.min(Math.max(nx, 0), innerWidth);
          b.x = nx;
          b.dx = -b.dx;
        }

        let ny = b.y + b.dy;
        if (ny < 0 || ny > innerHeight) {
          ny = Math.min(Math.max(nx, 0), innerHeight);
          b.dy = -b.dy;
        }

        const nr = b.rotate + b.dr;
        return { ...b, x: nx, y: ny, rotate: nr };
      });
    }, 1000 / 60);
  }, []);
  return (
    <span
      className="absolute top-80 left-80 ring-2 ring-offset-2 rounded-md p-2 z-50 opacity-20"
      style={{
        top: bubble?.y ?? -1000,
        left: bubble?.x ?? -1000,
        transform: `rotate(${bubble?.rotate ?? 0}deg)`,
      }}
    >
      {word}
    </span>
  );
};

type Props = {
  enabled?: boolean;
  words: string[];
};
export const FlyingWords = ({ enabled = false, words }: Props) => {
  return enabled ? (
    <div className="hidden lg:flex">
      {words.map((word) => (
        <WordBubble key={word} word={word} />
      ))}
    </div>
  ) : null;
};
