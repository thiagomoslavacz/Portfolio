console.log("Hello World!");

new Typed("#typed", {
  strings: [
    "build stuff!",
    "craft ideas!",
    "break the pattern!",
    "forget to sleep...",
  ],
  typeSpeed: 50,
  backSpeed: 40,
  loop: true,
});

const icons = document.querySelectorAll(".icon-wrapper");
const pages = document.querySelectorAll(".page");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icons.forEach((i) => i.classList.remove("selected"));
    icon.classList.add("selected");

    const target = icon.dataset.section;

    pages.forEach((page) => {
      page.classList.remove("active");
      if (page.classList.contains(target)) {
        page.classList.add("active");
      }
    });
  });
});

document.querySelector(".projects-link").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector('[data-section="projects"]').click();
});
