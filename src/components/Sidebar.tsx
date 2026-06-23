import type { Section } from "../types";

interface Props {
  activeSection: Section;
  setActiveSection: (s: Section) => void;
}

const items: { section: Section; icon: string }[] = [
  { section: "home", icon: "bxr bx-home" },
  { section: "projects", icon: "bxr bx-dashboard" },
  { section: "skills", icon: "bxr bx-hot" },
  { section: "contact", icon: "bxr bx-envelope" },
];

export default function Sidebar({ activeSection, setActiveSection }: Props) {
  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex fixed top-1/2 -translate-y-1/2 left-4 lg:left-8 flex-col gap-4 lg:gap-6 p-1.5 lg:p-2 z-50 bg-black/80 text-white outline outline-[3px] outline-double outline-main rounded-[50px] shadow-[3px_3px_15px_#b7794699]">
        {items.map(({ section, icon }) => (
          <div
            key={section}
            onClick={() => setActiveSection(section)}
            className={`flex items-center justify-center p-1.5 lg:p-2 rounded-full text-xl lg:text-2xl cursor-pointer border border-black transition-all duration-300
        ${activeSection === section ? "bg-main text-black" : "bg-[#e5d3b3] text-black hover:scale-110 hover:rotate-12"}`}
          >
            <i className={icon}></i>
          </div>
        ))}
      </nav>
      
      {/* Mobile */}
      <nav className="flex md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 flex-row gap-4 p-1.5 z-50 bg-black/80 text-white outline outline-[3px] outline-double outline-main rounded-[50px] shadow-[3px_3px_15px_#b7794699]">
        {items.map(({ section, icon }) => (
          <div
            key={section}
            onClick={() => setActiveSection(section)}
            className={`flex items-center justify-center p-1.5 rounded-full text-xl cursor-pointer border border-black transition-all duration-300
              ${activeSection === section ? "bg-main text-black" : "bg-white text-black"}`}
          >
            <i className={icon}></i>
          </div>
        ))}
      </nav>
    </>
  );
}
