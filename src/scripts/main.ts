import { initAudienceLens } from "./audience-lens";
import { initFactoryConveyor } from "./factory-conveyor";
import { currentLanguage, initLanguage } from "./language";
import { initLivingCurrent } from "./living-current";
import { initMarketRunway } from "./market-runway";
import { initProductTheatre } from "./product-theatre";
import { initReveal } from "./reveal";

const header = document.querySelector<HTMLElement>("[data-header]");
const menuButton = document.querySelector<HTMLButtonElement>(".menu-toggle");
const mobileMenu = document.querySelector<HTMLElement>(".mobile-menu");
const sizeOptions = document.querySelectorAll<HTMLButtonElement>("[data-size-option]");
const sizeStage = document.querySelector<HTMLElement>("#size-stage");
const sizeReadout = document.querySelector<HTMLElement>("#size-readout");
const bottleSize = document.querySelector<HTMLElement>("[data-bottle-size]");

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

initLanguage();
initReveal();
initLivingCurrent();
initProductTheatre();
initAudienceLens();
initFactoryConveyor();
initMarketRunway();
