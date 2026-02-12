"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState("da");

  const handleLanguageChange = (lang: string) => {
    setActiveLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-2 py-1 shadow-sm">
      <button
        onClick={() => handleLanguageChange("da")}
        className={`rounded-full px-10 py-1 text-sm transition-all ${
          activeLanguage === "da"
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-zinc-100"
        }`}
      >
        Danish
      </button>
      <button
        onClick={() => handleLanguageChange("en")}
        className={`rounded-full px-10 py-1 text-sm transition-all ${
          activeLanguage === "en"
            ? "bg-blue-600 text-white"
            : "text-gray-700 hover:bg-zinc-100"
        }`}
      >
        English
      </button>
    </div>
  ); 
}
