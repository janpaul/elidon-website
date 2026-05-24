"use client";
import { useState, useEffect } from "react";
import { MyVideo } from "@/app/xxx/[type]/_components/index";
import type { XxxType } from "@/app/xxx/[type]/helpers";

type Props = {
  images: string[];
  type: XxxType;
};

export const Slideshow = ({ images, type }: Props) => {
  const [selected, setSelected] = useState<string | undefined>();
  const _randomImage = () => images[Math.floor(Math.random() * images.length)];
  const interval = 10_000;

  const handleNext = () => {
    setSelected(_randomImage());
  };

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
  }, [images]);

  return selected ? (
    <MyVideo
      id={selected}
      type={type}
      handleNextAction={handleNext}
      minDurationMs={interval}
    />
  ) : null;
};
