"use client";
import { useRouter } from "next/navigation";
import { ShuffleIcon } from "lucide-react";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

export const Controls = () => {
  const { push } = useRouter();
  return (
    <ButtonGroup>
      <Button onClick={() => push("/ero")} size="icon">
        <ShuffleIcon className="w-4 h-4" />
      </Button>
    </ButtonGroup>
  );
};
