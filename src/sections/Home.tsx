import { useEffect, useRef } from "react";
import { useLang } from "../hooks/useLang";
import type { Lang } from "../types";
import Typed from "typed.js";
import SocialLinks from "../components/SocialLinks";

interface Props {
  lang: Lang;
}

export default function Home({ lang }: Props) {
  const { t } = useLang(lang);
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: [
        t("home.skill1"),
        t("home.skill2"),
        t("home.skill3"),
        t("home.skill4"),
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, [lang, t]);

  return (
    <div className="animate-fadeIn px-4 md:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start py-8 lg:py-20 gap-4 lg:gap-6">
        <div>
          <div className="flex flex-col md:flex-row md:gap-1.5">
            <h1 className="text-xl md:text-lg lg:text-2xl font-extrabold">
              <span
                dangerouslySetInnerHTML={{
                  __html: t("home.titleLine1").replace(
                    "<span>",
                    '<span class="text-main">',
                  ),
                }}
              />
            </h1>

            <h1 className="text-xl md:text-lg lg:text-2xl font-extrabold">
              <span ref={typedRef} className="text-main" />
            </h1>
          </div>

          <h2 className="text-sm md:text-base lg:text-lg text-white mt-0.5">
            {t("home.subtitle")}
          </h2>
        </div>
        <a
          href="/Dev-Thiago-Moslavacz.pdf"
          download
          className="group flex items-center self-end gap-1 text-link transition-colors text-sm whitespace-nowrap overflow-hidden"
        >
          {t("home.downloadCv")}

          <i className="bxr bx-arrow-in-right-square-half hidden transition-all duration-500 opacity-0 -translate-x-3 group-hover:translate-x-0 group-hover:opacity-100"></i>
        </a>
      </div>

      <div className="relative flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_auto] lg:gap-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] rounded-full bg-main blur-[60px] opacity-80" />

        <div className="flex flex-col gap-4 lg:gap-6 relative z-10 lg:row-span-2 h-full">
          <div className="card relative overflow-hidden flex flex-col justify-center p-4 lg:p-8 gap-2 lg:gap-3 h-full">
            <h2 className="text-base lg:text-2xl font-medium relative z-10">
              <span className="text-main">{t("timeline.title")}</span>
              {" / "}
              {t("timeline.status")}
            </h2>
            <p className="text-xs lg:text-sm text-contrast relative z-10">
              {t("timeline.text")}
            </p>

            <div
              className="absolute bg-main opacity-90 bottom-0 right-0 w-12 h-12 lg:w-18 lg:h-18 pointer-events-none"
              style={{
                clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
              }}
            />
          </div>
        </div>

        <div className="card flex flex-col justify-center p-4 lg:p-8 gap-2 lg:gap-4 relative z-10">
          <h2 className="text-base lg:text-2xl font-medium">
            {t("about.title")}
          </h2>
          <p
            className="text-xs lg:text-sm text-contrast"
            dangerouslySetInnerHTML={{
              __html: t("about.text").replace(
                "<span>",
                '<span class="text-main">',
              ),
            }}
          />
          <div className="mt-2 lg:mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <span className="h-[2px] bg-main opacity-50" />
            <a
              href="https://wa.me/5511991085388?text=Oi!%20Eu%20olhei%20seu%20portfólio%20e%20gostaria%20de%20conversar!%20ツ"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 lg:gap-2 bg-main text-black font-bold px-4 lg:px-5 py-1.5 lg:py-2 rounded-xl whitespace-nowrap border-2 border-black text-xs lg:text-sm shadow-[2px_2px_10px_rgba(239,123,29,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(239,123,29,0.7),0_0_0_3px_rgba(239,123,29,0.3)] transition-all duration-500"
            >
              <i className="bxr bx-paper-plane text-base lg:text-xl"></i>
              {t("about.letsTalk")}
            </a>
            <span className="h-[2px] bg-main opacity-50" />
          </div>
        </div>

        <div className="flex gap-4 lg:gap-6 lg:col-start-2">
          <div className="card flex-1 flex flex-col items-center justify-center py-6 lg:py-10 gap-1">
            <span className="text-3xl lg:text-5xl font-medium">5+</span>
            <p className="text-[10px] lg:text-xs text-contrast text-center leading-tight">
              {t("home.completedProjects")}
            </p>
          </div>
          <div className="card flex-1 flex flex-col items-center justify-center py-6 lg:py-10 gap-1">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl lg:text-5xl font-medium">2</span>
              <span className="text-[10px] lg:text-xs">{t("home.years")}</span>
            </div>
            <p className="text-[10px] lg:text-xs text-contrast text-center leading-tight">
              {t("home.studying")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 mb-32 md:mb-12 flex justify-center">
        <SocialLinks />
      </div>
    </div>
  );
}
