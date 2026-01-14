console.log("Hello World!");

let typedInstance = null;

function initTyped() {
  const stringsEl = document.querySelector("#typed-strings");
  const typedTarget = document.querySelector("#typed");

  if (!stringsEl || !typedTarget) return;

  if (typedInstance) {
    typedInstance.destroy();
    typedInstance = null;
  }

  typedTarget.textContent = "";

  typedInstance = new Typed("#typed", {
    stringsElement: "#typed-strings",
    typeSpeed: 50,
    backSpeed: 40,
    loop: true,
  });
}

document.addEventListener("DOMContentLoaded", initTyped);

document.addEventListener("languageChanged", () => {
  if (location.hash === "#home" || location.hash === "") {
    initTyped();
  }
});

const icons = document.querySelectorAll(".icon-wrapper");
const pages = document.querySelectorAll(".page");
const validSections = ["home", "projects", "skills", "contact"];

function openPage(target) {
  if (!validSections.includes(target)) return;

  icons.forEach((i) => i.classList.remove("selected"));
  pages.forEach((p) => p.classList.remove("active"));

  document
    .querySelector(`.icon-wrapper[data-section="${target}"]`)
    ?.classList.add("selected");
  const page = document.querySelector(`.page.${target}`);
  page?.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (location.hash !== `#${target}`) {
    location.hash = target;
  }
}

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    openPage(icon.dataset.section);
  });
});

document.querySelector(".projects-link")?.addEventListener("click", (e) => {
  e.preventDefault();
  openPage("projects");
});

window.addEventListener("load", () => {
  const hash = location.hash.replace("#", "") || "home";
  openPage(hash);
});

window.addEventListener("hashchange", () => {
  const hash = location.hash.replace("#", "") || "home";
  openPage(hash);
});
