"use client";

import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { getImageUrl } from "@/app/ero/helpers";

type Props = {
  id: string;
  minDurationMs: number;
  isPaused: boolean;
  handleNextAction: () => void;
};

export const VideoPlayer = ({
  id,
  minDurationMs,
  isPaused,
  handleNextAction,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const minReached = useRef<boolean>(false);
  const [durationMs, setDurationMs] = useState<number | null>(null);
  const [currentMs, setCurrentMs] = useState<number>(0);

  const progressPercent = durationMs
    ? Math.round((currentMs / durationMs) * 100)
    : 0;

  useEffect(() => {
    minReached.current = false;
    const t = setTimeout(() => {
      minReached.current = true;
    }, minDurationMs);
    return () => clearTimeout(t);
  }, [id, minDurationMs]);

  // Effect to handle video metadata
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleMetadataAvailable = (video: HTMLVideoElement) => {
      setDurationMs(video.duration * 1_000);
    };
    document.title = `Image - ${id}`;

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      handleMetadataAvailable(video);
    } else {
      video.addEventListener(
        "loadedmetadata",
        () => handleMetadataAvailable(video),
        {
          once: true,
        },
      );
    }
  }, [videoRef, id]);

  const rewind = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.play().catch((err) => {
      console.error({ err });
    });
  };

  const handleOnEnded = async () => {
    if (isPaused) {
      await rewind();
      return;
    } else {
      if (minReached.current) {
        handleNextAction();
      } else {
        if (durationMs && durationMs < minDurationMs) {
          await rewind();
        }
      }
    }
  };

  return (
    <div className="w-screen h-screen">
      {durationMs && (
        <Progress value={progressPercent} max={100} className="mb-1" />
      )}
      <video
        ref={videoRef}
        src={getImageUrl(id)}
        autoPlay
        muted
        playsInline
        preload="metadata"
        className="w-screen h-screen object-contain grayscale-100"
        onEnded={handleOnEnded}
        onTimeUpdate={(event) => {
          setCurrentMs(Math.round(event.currentTarget.currentTime * 1_000));
        }}
      />
    </div>
  );
};
