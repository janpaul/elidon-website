"use client";
import { useState, useEffect } from "react";
import { ErotigifImage } from "@/app/erotigif/_components";

type Props = {
  images: string[];
  interval: number;
};

export const Slideshow = ({ images, interval }: Props) => {
  const [selected, setSelected] = useState<string | undefined>();
  const _randomImage = () => images[Math.floor(Math.random() * images.length)];

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let refresher: any;

    const _start = async () => {
      if (images?.length > 0) {
        setSelected(_randomImage());
        refresher = setInterval(() => {
          setSelected(_randomImage());
        }, interval);
      }
    };
    _start().then(() => {});

    return () => clearInterval(refresher);
  }, [images, interval]);

  return selected ? <ErotigifImage id={selected} /> : null;
};
