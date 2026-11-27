"use client";

import { useRouter } from "next/navigation";
import {
  PauseCircleIcon,
  ClipboardCopyIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PlayCircleIcon,
  ImagesIcon,
  ImageIcon,
} from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { useClipboard } from "@/hooks";
import { getUriBase } from "@/lib/utils";

type Props = {
  onHandleNextAction: (delta?: number) => void;
  paused: boolean;
  setPausedAction: (paused: boolean) => void;
  id: string;
};

export const SlideshowControls = ({
  onHandleNextAction,
  paused,
  setPausedAction,
  id,
}: Props) => {
  const [hasClipboard, copyToClipboard] = useClipboard();
  const { push } = useRouter();

  return (
    <ButtonGroup className="">
      <Button size="icon" onClick={() => onHandleNextAction(-1)}>
        <ArrowLeftIcon className="w-4 h-4" />
      </Button>
      <Button size="icon" onClick={() => onHandleNextAction(1)}>
        <ArrowRightIcon className="w-4 h-4" />
      </Button>
      <Button size="icon" onClick={() => push(`/ero/${id}`)}>
        <ImageIcon className="w-4 h-4" />
      </Button>
      <Button size="icon" onClick={() => setPausedAction(!paused)}>
        {paused ? (
          <PlayCircleIcon className="w-4 h-4" />
        ) : (
          <PauseCircleIcon className="w-4 h-4" />
        )}
      </Button>
      <Button onClick={() => push("/ero/gallery")} size="icon">
        <ImagesIcon className="w-4 h-4" />
      </Button>
      {hasClipboard && (
        <Button
          size="icon"
          onClick={() => copyToClipboard(`${getUriBase()}/ero/${id}`)}
        >
          <ClipboardCopyIcon className="w-4 h-4" />
        </Button>
      )}
    </ButtonGroup>
  );
};
