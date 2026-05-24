"use client";
import { useState, useEffect } from "react";
import { MyVideo } from "@/app/xxx/[type]/_components/index";
import type { XxxType } from "@/app/xxx/[type]/helpers";
import { FaPauseCircle } from "react-icons/fa";

type Props = {
  images: string[];
  type: XxxType;
};

export const Slideshow = ({ images, type }: Props) => {
  const [selected, setSelected] = useState<string | undefined>();
  const [isPaused, setIsPaused] = useState(false);
  const interval = 10_000;

  const handleNext = () => {
    if (isPaused) return;
    setSelected(images[Math.floor(Math.random() * images.length)]);
  };

  useEffect(() => {
    setSelected(images[Math.floor(Math.random() * images.length)]);
  }, [images]);

  useEffect(() => {
    const toggle = () => setIsPaused((p) => !p);
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case " ":
        case "Spacebar": {
          toggle();
          break;
        }
        case "Enter":
        case "ArrowRight": {
          handleNext();
          break;
        }
        case "Escape": {
          window.location.href = "/";
          break;
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", toggle);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", toggle);
    };
  }, []);

  return selected ? (
    <div className="fixed inset-0 z-0">
      {isPaused && (
        <div
          style={{
            position: "fixed",
            top: "1rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 50,
            pointerEvents: "none",
          }}
        >
          <FaPauseCircle style={{ fontSize: "6rem", color: "white" }} />
        </div>
      )}
      <MyVideo
        id={selected}
        type={type}
        handleNextAction={handleNext}
        minDurationMs={interval}
        isPaused={isPaused}
      />
    </div>
  ) : null;
};
