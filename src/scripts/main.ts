import { initAudienceLens } from "./audience-lens";
import { initFactoryConveyor } from "./factory-conveyor";
import { initMarketRunway } from "./market-runway";
import { initProductTheatre } from "./product-theatre";

type Language = "en" | "ar";

const root = document.documentElement;
const header = document.querySelector<HTMLElement>("[data-header]");
const menuButton = document.querySelector<HTMLButtonElement>(".menu-toggle");
const mobileMenu = document.querySelector<HTMLElement>(".mobile-menu");
const languageButtons = document.querySelectorAll<HTMLButtonElement>("[data-lang]");
const sizeOptions = document.querySelectorAll<HTMLButtonElement>("[data-size-option]");
const sizeStage = document.querySelector<HTMLElement>("#size-stage");
const sizeReadout = document.querySelector<HTMLElement>("#size-readout");
const bottleSize = document.querySelector<HTMLElement>("[data-bottle-size]");

function currentLanguage(): Language {
  return root.lang === "ar" ? "ar" : "en";
}

function applyTranslations(language: Language) {
  document.querySelectorAll<HTMLElement>("[data-en][data-ar]").forEach((element) => {
    const value = element.dataset[language];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll<HTMLElement>("[data-aria-en][data-aria-ar]").forEach((element) => {
    const value = language === "ar" ? element.dataset.ariaAr : element.dataset.ariaEn;
    if (value) element.setAttribute("aria-label", value);
  });
}

function setLanguage(language: Language) {
  root.lang = language;
  root.dir = language === "ar" ? "rtl" : "ltr";
  localStorage.setItem("alsaqi-lang", language);
  applyTranslations(language);

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang === "ar" ? "ar" : "en"));
});

function closeMenu() {
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.classList.remove("open");
  mobileMenu?.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.classList.toggle("open", open);
  mobileMenu?.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
});

mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

function updateHeader() {
  header?.classList.toggle("scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

sizeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const size = option.dataset.sizeOption ?? "750";
    sizeOptions.forEach((button) => button.setAttribute("aria-selected", String(button === option)));
    if (sizeStage) sizeStage.dataset.size = size;
    if (bottleSize) bottleSize.textContent = `${size} ml`;

    if (sizeReadout) {
      sizeReadout.dataset.en = option.dataset.useEn ?? "";
      sizeReadout.dataset.ar = option.dataset.useAr ?? "";
      sizeReadout.textContent = currentLanguage() === "ar" ? sizeReadout.dataset.ar : sizeReadout.dataset.en;
    }
  });
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reducedMotion) {
  document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => element.classList.add("visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -5%" },
  );
  document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => observer.observe(element));
}

setLanguage(currentLanguage());
initProductTheatre();
initAudienceLens();
initFactoryConveyor();
initMarketRunway();
