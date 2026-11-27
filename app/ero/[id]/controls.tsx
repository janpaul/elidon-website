"use client";

import { useRouter } from "next/navigation";
import { ClipboardCopyIcon, ImagesIcon, ShuffleIcon } from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { getUriBase } from "@/lib/utils";
import { useClipboard } from "@/hooks";

type Props = {
  id: string;
};

export const Controls = ({ id }: Props) => {
  const { push } = useRouter();
  const [hasClipboard, copyToClipboard] = useClipboard();

  return (
    <ButtonGroup>
      <Button onClick={() => push("/ero/gallery")} size="icon">
        <ImagesIcon className="w-4 h-4" />
      </Button>
      <Button onClick={() => push("/ero")} size="icon">
        <ShuffleIcon className="w-4 h-4" />
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
