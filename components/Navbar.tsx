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
import { Languages, LanguagesIcon } from "lucide-react";
import LanguageSwitcher from "./language-switcher";
import Link from "next/link";

export default function Navbar() {
  const { t } = useTranslation("navbar");

  return (
    <div className="w-full fixed top-0 left-0 border-b px-8 py-4 flex justify-between items-center">
      <div>
        <h1>{t("logo")}</h1>
      </div>
      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        <LanguageSwitcher />
        <Link href="/login" className="border rounded-md py-1 px-3">
          {t("login")}
        </Link>
      </div>
    </div>
  );
}
