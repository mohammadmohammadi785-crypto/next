"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mount, setMount] = useState(false);
  const { t } = useTranslation("navbar");
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-md border px-4 py-2 text-sm">
        {theme === "dark" ? (
          <Moon size={18} />
        ) : theme === "light" ? (
          <Sun size={18} />
        ) : (
          <SunMoon size={18} />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>theme</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {t("dark")}
          <Moon />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {t("light")}
          <Sun />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {t("system")} <SunMoon />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
