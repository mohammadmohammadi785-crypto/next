"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const { t, i18n } = useTranslation("navbar");

  return (
    <div className="w-full px-8 py-4 flex justify-between items-center">
      <div>
        <h1>{t("logo")}</h1>
      </div>
      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-md border px-4 py-2 text-sm">
            {t("language")}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => void i18n.changeLanguage("en")}>
              English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => void i18n.changeLanguage("fa")}>
              فارسی
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline">{t("login")}</Button>
      </div>
    </div>
  );
}
