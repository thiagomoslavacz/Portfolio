const DEFAULT_LANG = "pt";
let currentLang = localStorage.getItem("lang") || DEFAULT_LANG;

async function loadLanguage(lang) {
  try {
    const res = await fetch(`lang/${lang}.json`);
    const translations = await res.json();

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const keys = el.dataset.i18n.split(".");
      let value = translations;

      keys.forEach((key) => {
        if (value) value = value[key];
      });

      if (value) {
        el.innerHTML = value;
      }
    });

    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    localStorage.setItem("lang", lang);
    currentLang = lang;

    updateLangButton();
    document.dispatchEvent(new CustomEvent("languageChanged"));
  } catch (err) {
    console.error("Erro ao carregar idioma:", err);
  }
}

function toggleLanguage(lang) {
  if (lang === currentLang) return;
  loadLanguage(lang);
}

function updateLangButton() {
  const mainBtn = document.querySelector(".lang-main");
  const options = document.querySelectorAll(".lang-option");

  if (!mainBtn || !options.length) return;

  mainBtn.innerHTML =
    (currentLang === "pt" ? "PT-BR" : "EN") +
    ` <span class="arrow"><i class="bxr bx-caret-down"></i></span>`;

  options.forEach((btn) => {
    btn.style.display = btn.dataset.lang === currentLang ? "none" : "block";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadLanguage(currentLang);

  const switcher = document.querySelector(".lang-switch");
  const mainBtn = document.querySelector(".lang-main");
  const options = document.querySelectorAll(".lang-option");

  mainBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    switcher.classList.toggle("open");
  });

  options.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      toggleLanguage(lang);
      switcher.classList.remove("open");
    });
  });

  document.addEventListener("click", () => {
    switcher.classList.remove("open");
  });
});
