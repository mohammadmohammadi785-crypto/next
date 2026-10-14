import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LanguagesIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/client";

export default function LanguageSwitcher() {
  const { t } = useTranslation("navbar");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-md border px-4 py-2 text-sm">
        <LanguagesIcon size={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuItem onClick={() => void i18n.changeLanguage("en")}>
          {t("english")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => void i18n.changeLanguage("fa")}>
          {t("persian")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
