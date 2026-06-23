import { useState } from "react";
import Sidebar from "./components/Sidebar";
import LeftWindow from "./components/LeftWindow";
import LanguageToggle from "./components/LanguageToggle";
import type { Lang } from "./types";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export type Section = "home" | "projects" | "skills" | "contact";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [lang, setLang] = useState<Lang>("pt");

  return (
    <div className="flex flex-col min-h-screen bg-bg md:flex-row">
      <LanguageToggle lang={lang} setLang={setLang} />
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <LeftWindow lang={lang} />

      <main className="w-full md:ml-[20%] md:w-[80%] text-white">
        {activeSection === "home" && <Home lang={lang} />}
        {activeSection === "projects" && <Projects lang={lang} />}
        {activeSection === "skills" && <Skills lang={lang} />}
        {activeSection === "contact" && <Contact lang={lang} />}
      </main>
    </div>
  );
}

export default App;
