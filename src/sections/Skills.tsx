import { useLang } from "../hooks/useLang";
import { skills } from "../data/portfolio";
import type { Lang } from "../types";
import SocialLinks from "../components/SocialLinks";
import PageHeader from "../components/PageHeader";

interface Props {
  lang: Lang;
}

export default function Skills({ lang }: Props) {
  const { t, tArray } = useLang(lang);

  return (
    <div className="animate-fadeIn px-4 md:px-8 lg:px-12">
      <PageHeader lang={lang} titleKey="skills.title" />

      <div className="relative w-full md:w-[80%] md:flex">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] rounded-full bg-main blur-[80px] opacity-80" />

        <ol className="flex flex-col gap-y-4 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-16 relative z-10 w-[100%]">
          {skills.map((skill, index) => {
            const isOdd = index % 2 !== 0;

            return (
              <li
                key={index}
                className={
                  isOdd
                    ? "group self-end text-right lg:self-auto lg:text-left"
                    : "group self-start"
                }
              >
                <div
                  className={
                    isOdd
                      ? "flex items-baseline gap-2 mb-2 justify-end lg:justify-start lg:flex-row"
                      : "flex items-baseline gap-2 mb-2"
                  }
                >
                  <p className="pl-5 text-3xl lg:text-5xl font-extralight text-white">
                    {index + 1}
                    <span className="text-main">.</span>
                  </p>

                  <h2 className="text-base lg:text-xl font-medium">
                    {t(skill.titleKey)}
                  </h2>
                </div>

                <ul
                  className={
                    isOdd
                      ? "text-right list-disc list-inside flex-row-reverse lg:text-left lg:pl-5"
                      : "list-disc pl-5"
                  }
                >
                  {tArray(skill.itemsKey).map((item, i) => (
                    <li
                      key={i}
                      className="text-xs md:text-sm text-contrast transition-all duration-500 group-hover:translate-x-4"
                      style={{
                        transitionDelay: `${i * 100}ms`,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-12 mb-32 md:mb-12 flex justify-center">
        <SocialLinks />
      </div>
    </div>
  );
}
