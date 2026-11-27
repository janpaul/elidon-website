"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import { PauseCircleIcon } from "lucide-react";
import { VideoPlayer } from "@/app/ero/video-player";
import { useSwipe } from "@/app/ero/hooks/useSwipe";
import { shuffle } from "@/lib/utils";
import { SlideshowControls } from "@/app/ero/slideshow-controls";

const interval = 10_000; // show a clip for minimum 10 seconds before switching to the next one

type Props = {
  images: string[];
};

export const Slideshow = ({ images }: Props) => {
  const [cursor, setCursor] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useState<readonly string[]>([]);
  const selectedVideoId = order[cursor];

  useSwipe(stageRef, {
    onLeft: () => onHandleNext(),
    onRight: () => onHandleNext(-1),
  });

  useEffect(() => {
    const shuffleImages = () => setOrder(shuffle(images));
    shuffleImages();
  }, [images]);

  const onHandleNext = useCallback(
    (delta: number = 1) => {
      setCursor(
        (prevCursor) => (prevCursor + delta + order.length) % order.length,
      );
    },
    [order.length],
  );

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

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, onHandleNext]);

  return (
    <>
      <SlideshowControls
        onHandleNextAction={onHandleNext}
        paused={paused}
        setPausedAction={setPaused}
        id={selectedVideoId}
      />
      <div
        ref={stageRef}
        className="relative  bg-black touch-pan-y select-none w-full h-full"
      >
        {paused && (
          <div className="fixed top-3/6 left-3/6 z-10">
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
    </>
  );
};
