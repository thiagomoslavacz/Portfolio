import { useState, useEffect, useRef } from "react";
import type { Lang } from "../types";

interface Props {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function LanguageToggle({ lang, setLang }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOption = (l: Lang) => {
    setLang(l);
    setOpen(false);
  };

  return (
    <div ref={ref} className="fixed top-0 right-0 mt-4 mr-4 z-[1000] group">
      <div className="relative w-[72px]">
        <button
          onClick={() => setOpen(!open)}
          className="group/btn w-full flex items-center justify-center gap-1 px-3 py-2 text-xs font-bold text-white bg-bg rounded-lg cursor-pointer hover:bg-main transition-colors duration-300 whitespace-nowrap"
        >
          {lang === "pt" ? "PT-BR" : "EN"}
          <i
            className={`bx bx-chevron-down text-base text-main group-hover/btn:text-white transition-all duration-300 ${open ? "rotate-180" : ""}`}
          ></i>
        </button>

        <div
          className={`absolute top-full left-0 mt-1 w-full flex flex-col gap-1 transition-all duration-300 ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          {(["pt", "en"] as Lang[])
            .filter((l) => l !== lang)
            .map((l) => (
              <button
                key={l}
                onClick={() => handleOption(l)}
                className="w-full px-3 py-2 text-xs font-bold text-white bg-bg rounded-lg hover:bg-main transition-colors duration-300 whitespace-nowrap cursor-pointer"
              >
                {l === "pt" ? "PT-BR" : "EN"}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
