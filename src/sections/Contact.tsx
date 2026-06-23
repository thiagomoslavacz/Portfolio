import { useLang } from "../hooks/useLang";
import type { Lang } from "../types";
import OrbitalSymbol from "../components/OrbitalSymbol";
import SocialLinks from "../components/SocialLinks";
import PageHeader from "../components/PageHeader";

interface Props {
  lang: Lang;
}

export default function Contact({ lang }: Props) {
  const { t } = useLang(lang);

  return (
    <div className="animate-fadeIn px-4 md:px-8 lg:px-12">
      <PageHeader lang={lang} titleKey="contact.title" />

      <div className="flex-1 flex flex-col items-center justify-center text-center relative pb-10 md:-mt-15 md:-ml-[10%]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-main blur-[120px] opacity-15 pointer-events-none" />

        <OrbitalSymbol className="w-40 h-40 md:w-56 md:h-56 mb-6 opacity-60" />

        <div className="flex flex-col items-center relative z-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            <span
              dangerouslySetInnerHTML={{
                __html: t("contact.title").replace(
                  "<span>",
                  '<span class="text-main">',
                ),
              }}
            />
          </h1>
          <div className="flex flex-col px-1">
            <p className="text-sm md:text-base text-contrast md:whitespace-nowrap">
              {t("contact.text1").replace(/<\/?span>/g, "")}
            </p>
            <p className="text-sm md:text-base text-contrast md:whitespace-nowrap">
              {t("contact.text2")}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-6 relative z-10">
          <a
            href="https://wa.me/5511991085388?text=Oi!%20Eu%20olhei%20seu%20portfólio%20e%20gostaria%20de%20conversar!%20ツ"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 bg-main text-black font-bold px-6 lg:px-5 py-2 lg:py-2 rounded-xl whitespace-nowrap border-2 border-black text-sm lg:text-sm shadow-[2px_2px_10px_rgba(239,123,29,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(239,123,29,0.7),0_0_0_3px_rgba(239,123,29,0.3)] transition-all duration-500"
          >
            <i className="bxr bx-paper-plane text-lg lg:text-xl"></i>
            {t("about.letsTalk")}
          </a>

          <div className="mt-2 mb-32 md:mb-12 flex justify-center">
            <SocialLinks />
          </div>
        </div>

        <p className="absolute bottom-8 text-xs text-contrast opacity-70">
          {t("contact.copyright")}
        </p>
      </div>
    </div>
  );
}
