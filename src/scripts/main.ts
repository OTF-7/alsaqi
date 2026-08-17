import { initAudienceLens } from "./audience-lens";
import { initLanguage } from "./language";
import { initProductTheatre } from "./product-theatre";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const supportsIO = "IntersectionObserver" in window;

/* Header and mobile navigation */
const header = document.querySelector<HTMLElement>("[data-header]");
const menuButton = document.querySelector<HTMLButtonElement>(".menu-toggle");
const mobileMenu = document.querySelector<HTMLElement>(".mobile-menu");

const closeMenu = () => {
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.classList.remove("open");
  mobileMenu?.classList.remove("open");
  document.body.classList.remove("menu-open");
};

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.classList.toggle("open", open);
  mobileMenu?.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
});
mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
window.matchMedia("(min-width: 1121px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 24);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

/* All entrance animation is progressive enhancement: nothing is hidden without IO,
   and a short failsafe makes the entire page visible if an observer ever stalls. */
const revealTargets = [
  ...document.querySelectorAll<HTMLElement>(".reveal, [data-equation], [data-draw-section]"),
];
const showEverything = () => {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
  document.querySelectorAll<HTMLElement>("[data-quality-sheet]").forEach((sheet) => sheet.classList.add("is-checked"));
};

if (!reducedMotion && supportsIO) {
  document.documentElement.classList.add("motion-ready");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });
  revealTargets.forEach((element) => revealObserver.observe(element));

  const qualityObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-checked");
      qualityObserver.unobserve(entry.target);
    });
  }, { threshold: 0.22 });
  document.querySelectorAll<HTMLElement>("[data-quality-sheet]").forEach((sheet) => qualityObserver.observe(sheet));
  window.setTimeout(showEverything, 3200);
} else {
  showEverything();
}

/* CTA ripple origins follow pointer position without adding layout or paint-heavy DOM. */
document.querySelectorAll<HTMLElement>(".pill-button, .header-contact").forEach((button) => {
  button.addEventListener("pointermove", (event) => {
    const bounds = button.getBoundingClientRect();
    button.style.setProperty("--ripple-x", `${event.clientX - bounds.left}px`);
    button.style.setProperty("--ripple-y", `${event.clientY - bounds.top}px`);
  }, { passive: true });
});

initLanguage();
initProductTheatre();
initAudienceLens();
