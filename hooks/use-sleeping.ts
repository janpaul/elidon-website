import { useEffect, useState } from "react";
import { amISleeping } from "@/lib/utils";
import { revalidate } from "@/app/page";

export const useSleeping = () => {
  const [sleeping, setSleeping] = useState(amISleeping());

  useEffect(() => {
    const interval = setInterval(() => {
      setSleeping(amISleeping());
    }, revalidate * 1_000); // every hour
    return () => clearInterval(interval);
  }, []);

  return sleeping;
};
