"use client";

import NextImage from "next/image";
import { Image } from "@heroui/react";

import me from "@media/jp.jpg";

export const MyImage = () => (
  <Image
    as={NextImage}
    src={me.src}
    alt="Jan Paul"
    isZoomed
    width={me.width / 7}
    height={me.height / 3}
    loading="lazy"
  />
);
