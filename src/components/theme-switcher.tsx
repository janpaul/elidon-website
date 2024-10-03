"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { IconSun, IconMoon } from "@tabler/icons-react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? (
    <div>
      <Button
        color="primary"
        variant="flat"
        isIconOnly
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <IconMoon /> : <IconSun />}
      </Button>
    </div>
  ) : null;
};
