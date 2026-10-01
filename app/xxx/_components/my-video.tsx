"use client";
import { useRef, useEffect, useState } from "react";
import { xxxImageUri } from "../helpers";

type Props = {
  id: string;
  handleNextAction: () => void;
  minDurationMs: number;
  isPaused?: boolean;
};

export const MyVideo = ({
  id,
  handleNextAction,
  minDurationMs,
  isPaused = false,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const minReached = useRef(false);
  const hasTimeout = true;
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    if (!hasTimeout) return;
    minReached.current = false;
    const t = setTimeout(() => {
      minReached.current = true;
    }, minDurationMs);
    return () => clearTimeout(t);
  }, [id, minDurationMs, hasTimeout]);

  const rewind = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const onEnded = () => {
    if (isPaused) {
      rewind();
      return;
    }
    if (!hasTimeout) {
      handleNextAction();
      return;
    }
    if (minReached.current) {
      handleNextAction();
    } else {
      if (duration && duration < minDurationMs / 1000) {
        rewind();
      }
    }
  };

  return (
    <>
      {duration && (
        <div
          style={{
            position: "fixed",
            bottom: "1rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 50,
            pointerEvents: "none",
            fontSize: "0.5rem",
          }}
        >
          {duration.toFixed(1)}s
        </div>
      )}
      <video
        ref={videoRef}
        src={xxxImageUri(id)}
        autoPlay
        muted
        playsInline
        preload="metadata"
        className="w-screen h-screen object-contain"
        onEnded={onEnded}
        onError={handleNextAction}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />
    </>
  );
};
