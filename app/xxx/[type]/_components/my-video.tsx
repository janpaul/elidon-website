"use client";
import { useRef, useEffect } from "react";
import { xxxImageUri, type XxxType } from "@/app/xxx/[type]/helpers";

type Props = {
  id: string;
  type: XxxType;
  handleNextAction: () => void;
  minDurationMs: number;
  isPaused?: boolean;
};

export const MyVideo = ({
  id,
  type,
  handleNextAction,
  minDurationMs,
  isPaused = false,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const minReached = useRef(false);
  const hasTimeout = type === "erotigif";

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
      rewind();
    }
  };

  return (
    <video
      ref={videoRef}
      src={xxxImageUri(type)(id)}
      autoPlay
      muted
      playsInline
      preload="metadata"
      className="w-screen h-screen object-contain"
      onEnded={onEnded}
      onError={handleNextAction}
    />
  );
};
