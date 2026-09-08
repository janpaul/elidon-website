"use client";
import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { MixType } from "@/app/dj/types";

type Props = { mix: MixType };

export const Mix = ({ mix: { file } }: Props) => {
  const mixUri = `https://rvalfhikxfvgaxsh.public.blob.vercel-storage.com/dj/${file}.m4a`;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateProgress = () => setProgress(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", setAudioDuration);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else {
      await audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Number(e.target.value);
    setProgress(Number(e.target.value));
  };

  return (
    <>
      <audio ref={audioRef} src={mixUri} preload="metadata" />
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 align-middle">
        <div className="grow-0 shrink-0">
          <Button onClick={togglePlay}>
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </Button>
        </div>
        <div className="grow min-w-0">
          <input
            type="range"
            min={0}
            max={duration || 0}
            value={progress}
            onChange={handleSeek}
            className="w-full accent-orange-500"
          />
        </div>
        <div className="text-xs tabular-nums grow-0 shrink-0">
          {Math.floor(progress)}s / {Math.floor(duration)}s
        </div>
      </div>
    </>
  );
};
