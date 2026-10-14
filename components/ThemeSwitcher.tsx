import React from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function ThemeSwitcher() {
  const { t } = useTranslation("navbar");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-md border px-4 py-2 text-sm">
        {t("theme")}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t("theme")}</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuItem>{t("light")}</DropdownMenuItem>
        <DropdownMenuItem>{t("dark")}</DropdownMenuItem>
        <DropdownMenuItem>{t("system")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
