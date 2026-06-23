import pt from "../lang/pt.json";
import en from "../lang/en.json";
import type { Lang } from "../types";

const translations = { pt, en };

export function useLang(lang: Lang) {
  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[lang];
    for (const k of keys) value = value?.[k];
    return typeof value === "string" ? value : key;
  };

  const tArray = (key: string): string[] => {
    const keys = key.split(".");
    let value: any = translations[lang];
    for (const k of keys) value = value?.[k];
    return Array.isArray(value) ? value : [];
  };

  return { t, tArray };
}
