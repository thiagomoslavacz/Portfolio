import { useLang } from "../hooks/useLang";
import type { Lang } from "../types";

interface Props {
  lang: Lang;
  titleKey: string;
  children?: React.ReactNode;
}

export default function PageHeader({ lang, titleKey, children }: Props) {
  const { t } = useLang(lang);

  return (
    <div className="flex justify-between items-center py-8 md:py-12 lg:py-20">
      <h1 className="text-xl md:text-lg lg:text-2xl font-extrabold">
        {children ?? (
          <span
            dangerouslySetInnerHTML={{
              __html: t(titleKey).replace("<span>", '<span class="text-main">'),
            }}
          />
        )}
      </h1>
      <a
        href="/Dev-Thiago-Moslavacz.pdf"
        download
        className="group flex items-center gap-1 text-link transition-colors text-sm whitespace-nowrap overflow-hidden"
      >
        {t("home.downloadCv")}
        <i className="bxr bx-arrow-in-right-square-half transition-all duration-500 opacity-0 -translate-x-3 group-hover:translate-x-0 group-hover:opacity-100"></i>
      </a>
    </div>
  );
}
