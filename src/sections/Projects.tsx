import { useLang } from "../hooks/useLang";
import type { Lang } from "../types";
import OrbitalSymbol from "../components/OrbitalSymbol";
import PageHeader from "../components/PageHeader";

interface Props {
  lang: Lang;
}

export default function Projects({ lang }: Props) {
  const { t } = useLang(lang);

  return (
    <div className="animate-fadeIn px-4 md:px-8 lg:px-12">
      <PageHeader lang={lang} titleKey="projects.title" />

      <div className="flex-1 flex flex-col items-center justify-center text-center relative pb-20  md:-ml-[10%]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-main blur-[120px] opacity-15 pointer-events-none" />

        <OrbitalSymbol className="w-40 h-40 md:w-56 md:h-56 mb-6 opacity-60" />

        <div className="flex flex-col items-center gap-3 relative z-10">
          <h1
            className="text-2xl md:text-4xl font-bold"
            dangerouslySetInnerHTML={{
              __html: t("projects.underConstruction").replace(
                "<span>",
                '<span class="text-main">',
              ),
            }}
          />
          <p className="text-sm md:text-base text-contrast max-w-sm">
            {t("projects.underConstructionText")}
          </p>
          <a
            href="https://github.com/thiagomoslavacz"
            target="_blank"
            rel="noopener"
            className="mt-4 flex items-center gap-2 text-link hover:text-contrast transition-colors text-sm"
          >
            <i className="ri-github-fill text-lg"></i>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
