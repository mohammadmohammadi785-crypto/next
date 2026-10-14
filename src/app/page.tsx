"use client";
import React from "react";
import { useTranslation } from "react-i18next";
export default function page() {
  const { t } = useTranslation("navbar");
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="text-5xl font-bold max-w-4xl text-pink-500">
        {t("title")}
      </h1>
    </div>
  );
}
