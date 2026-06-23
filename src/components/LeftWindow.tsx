import { useLang } from "../hooks/useLang";
import type { Lang } from "../types";

interface Props {
  lang: Lang;
}

export default function LeftWindow({ lang }: Props) {
  const { t } = useLang(lang);

  return (
    <div className="relative flex w-full md:fixed md:left-0 md:top-0 md:h-screen md:w-[20%] md:z-[1] bg-bg px-6 md:px-4 lg:px-8 pt-6 pb-6 md:py-4 lg:py-8 flex-col md:justify-between overflow-hidden">
      <div
        className="absolute inset-0 bg-bg [mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_100%)] md:[mask-image:linear-gradient(to_right,black_0%,black_50%,transparent_100%)]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="font-['Englebert'] text-xl md:text-lg lg:text-2xl text-white relative z-10">
        <span className="font-bold uppercase">
          Dev <span className="text-main font-black">/</span>
        </span>
        <p className="font-light">Thiago Moslavacz</p>
        <div className="flex items-center gap-2 mt-2 text-[#b2ffb2] text-xs font-normal font-['Poppins']">
          <span className="relative w-2 h-2 rounded-full bg-[#00ff66] shadow-[0_0_8px_#00ff66]">
            <span className="absolute inset-0 rounded-full border-2 border-[#00ff66] animate-ping opacity-50" />
          </span>
          <p>{t("bio.status")}</p>
        </div>
      </div>
    </div>
  );
}
