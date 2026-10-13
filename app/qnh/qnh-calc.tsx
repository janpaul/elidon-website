"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { STD, mbarToInHg, minMbar, maxMbar } from "./helpers";

export const QnhCalc = () => {
  const [qnh, setQnh] = useState(String(STD));
  const value = parseFloat(qnh);
  const inchesOfHg = Number.isFinite(value) ? mbarToInHg(value).toFixed(2) : "";

  return (
    <div className="flex flex-col lg:flex-row gap-1 md:gap-2 lg:gap-4 items-start">
      <div className="flex flex-row gap-1">
        <Input
          aria-label="QNH in mbar"
          type="number"
          inputMode="decimal"
          value={qnh}
          onChange={(e) => setQnh(e.target.value)}
          step={0.25}
          min={minMbar}
          max={maxMbar}
        />
        <Button
          onClick={() => setQnh(String(STD))}
          size="icon"
          variant="secondary"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
      <Input aria-label="inHg" value={inchesOfHg} readOnly tabIndex={-1} />
    </div>
  );
};
