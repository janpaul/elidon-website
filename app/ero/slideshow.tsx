"use client";

import { useEffect, useState } from "react";
import { PauseIcon } from "lucide-react";
import { VideoPlayer } from "@/app/ero/video-player";

const interval = 10_000; // show a clip for minimum 10 seconds before switching to the next one

type Props = {
  images: string[];
};

export const Slideshow = ({ images }: Props) => {
  const [cursor, setCursor] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const selectedVideoId = images[cursor];
  console.log({ paused });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case " ": // spacebar
          event.preventDefault();
          setPaused((prevPaused) => !prevPaused);
          break;
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
  }, []);

  const onHandleNext = () => {
    setCursor((prevCursor) => (prevCursor + 1) % images.length);
  };

  return (
    <div>
      {paused && <PauseIcon />}
      <VideoPlayer
        id={selectedVideoId}
        minDurationMs={interval}
        isPaused={paused}
        handleNextAction={onHandleNext}
      />
    </div>
  );
};
