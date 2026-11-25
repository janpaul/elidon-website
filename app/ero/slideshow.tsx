"use client";

import { useEffect, useState } from "react";
import { PauseCircleIcon } from "lucide-react";
import { VideoPlayer } from "@/app/ero/video-player";

const interval = 10_000; // show a clip for minimum 10 seconds before switching to the next one

type Props = {
  images: string[];
};

export const Slideshow = ({ images }: Props) => {
  const [cursor, setCursor] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const selectedVideoId = images[cursor];

  const onHandleNext = (delta: number = 1) => {
    setCursor(
      (prevCursor) => (prevCursor + delta + images.length) % images.length,
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "p":
        case "P":
        case " ": {
          event.preventDefault();
          setPaused((prevPaused) => !prevPaused);
          break;
        }
        case "d":
        case "D":
        // vim mode ;-)
        case "l":
        case "L":
        case "ArrowRight": {
          event.preventDefault();
          onHandleNext();
          break;
        }
        case "a":
        case "A":
        // vim mode ;-)
        case "h":
        case "H":
        case "ArrowLeft": {
          event.preventDefault();
          onHandleNext(-1);
          break;
        }
      }
    };
    const handlePointerDown = (_: PointerEvent) => {
      setPaused((prevPaused) => !prevPaused);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [images.length]);

  return (
    <div>
      {paused && (
        <div className="fixed inset-0 z-50 flex items-start p-4 justify-center">
          <PauseCircleIcon className="w-12 h-12 text-white" />
        </div>
      )}
      <VideoPlayer
        id={selectedVideoId}
        minDurationMs={interval}
        isPaused={paused}
        handleNextAction={onHandleNext}
      />
    </div>
  );
};
