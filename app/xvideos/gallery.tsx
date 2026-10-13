"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { xvideoUri, xvideoThumbUri } from "@/lib/xvideos";

const BATCH = 30;

type Props = {
  videos: string[];
};

export const Gallery = ({ videos }: Props) => {
  const [count, setCount] = useState(BATCH);
  const sentinel = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState<string | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = sentinel.current;
    if (!el || count >= videos.length) return;
    const io = new IntersectionObserver(
      ([e]) =>
        e.isIntersecting && setCount((c) => Math.min(c + BATCH, videos.length)),
      { rootMargin: "300% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [count, videos.length]);

  useEffect(() => {
    if (current) dialog.current?.showModal();
  }, [current]);

  useEffect(() => {
    if (!current) return;
    const onKey = (e: KeyboardEvent) => {
      const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      const i = videos.indexOf(current) + dir;
      if (i >= 0 && i < videos.length) setCurrent(videos[i]);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, videos]);

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5 xl:grid-cols-6">
      {videos.slice(0, count).map((video) => (
        <div
          key={video}
          className="group relative aspect-video overflow-hidden rounded-xl bg-neutral-900 shadow-lg ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-white/30"
          onClick={() => setCurrent(video)}
        >
          <img
            src={xvideoThumbUri(video)}
            alt={video}
            width={640}
            height={360}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105 cursor-pointer"
            onError={(e) =>
              (e.currentTarget.parentElement!.style.display = "none")
            }
          />
          {/*<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />*/}
        </div>
      ))}
      <div ref={sentinel} className="h-px" />
      <dialog
        ref={dialog}
        onClose={() => setCurrent(null)}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="m-auto bg-transparent p-0 backdrop:backdrop-blur-sm"
      >
        {current && (
          <video
            key={current}
            src={xvideoUri(current)}
            controls
            autoPlay
            playsInline
            className="max-h-[90vh] max-w-[90vw] rounded-xl"
            muted
          />
        )}
      </dialog>
    </div>
  );
};
