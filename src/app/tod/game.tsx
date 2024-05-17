"use client";
import { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

import useSWR from "swr";
import type { Set, TruthOrDrinkCard } from "@/data/tod";
import { fetcher } from "@/lib";

type CardSetData = {
  color: string;
  label: string;
};
const cardSets: Record<Set, CardSetData> = {
  happyhour: { color: "green", label: "Happy Hour" },
  lastcall: { color: "blue", label: "Last Call" },
  ontherocks: { color: "orange", label: "On The Rocks" },
  extradirty: { color: "red", label: "Extra Dirty" },
};

export const TruthOrDrinkGame = () => {
  const [set, setSet] = useState<Set | null>(null);
  const [cards, setCards] = useState<number>(0);
  const { data: card, mutate } = useSWR<TruthOrDrinkCard>(
    set ? `/api/tod/${set}` : null,
    fetcher,
    {},
  );
  useEffect(() => {
    setCards(cards + 1);
  }, [set]);

  const CardButton = ({ set: _set }: { set: Set }) => {
    const { label, color } = cardSets[_set];
    return (
      <Button
        // color={color as any}
        style={{ backgroundColor: color }}
        onClick={async () => {
          setSet(_set);
          await mutate();
        }}
      >
        {label}
      </Button>
    );
  };
  return (
    <>
      <ButtonGroup>
        <CardButton set="happyhour" />
        <CardButton set="lastcall" />
        <CardButton set="ontherocks" />
        <CardButton set="extradirty" />
      </ButtonGroup>
      {card && (
        <Card className="max-w-[400px] mt-4 mb-16" shadow="lg">
          <CardHeader className="p-4">{cardSets[card.set].label}</CardHeader>
          <Divider />
          <CardBody className="p-4">
            <p>{card.text}</p>
          </CardBody>
        </Card>
      )}
    </>
  );
};
