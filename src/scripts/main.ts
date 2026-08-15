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

/* Scroll progress drives the footer water level. The wavify path is regenerated
   from sine-shifted bones and cubic midpoints. */
const footer = document.querySelector<HTMLElement>("[data-wave-footer]");
const wavePath = document.querySelector<SVGPathElement>("#footer-wave");
if (footer && wavePath) {
  const svg = wavePath.ownerSVGElement!;
  let width = 1440;
  let height = 760;
  let bones = 4;
  let scrollProgress = reducedMotion ? 0.7 : 0;
  let phase = 0;
  let scrollFrame = 0;
  let waveFrame = 0;
  let footerVisible = false;

  const sizeWave = () => {
    width = footer.clientWidth || 1440;
    height = footer.clientHeight || 760;
    bones = Math.max(2, Math.round(width / 360));
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  };

  const drawWave = (time: number) => {
    const amplitude = reducedMotion ? 0 : 10;
    const baseline = height - scrollProgress * (height - 110);
    const segment = width / bones;
    const y = (index: number) => baseline + Math.sin(time * 0.00105 + index * 1.7) * amplitude;
    let d = `M 0 ${height + 4} L 0 ${y(0).toFixed(2)}`;
    for (let index = 1; index <= bones; index += 1) {
      const midpoint = (index * segment - segment / 2).toFixed(2);
      d += ` C ${midpoint} ${y(index - 1).toFixed(2)} ${midpoint} ${y(index).toFixed(2)} ${(index * segment).toFixed(2)} ${y(index).toFixed(2)}`;
    }
    d += ` L ${width} ${height + 4} Z`;
    wavePath.setAttribute("d", d);
    footer.style.setProperty("--water-y", `${baseline.toFixed(1)}px`);
  };

  const updateProgress = () => {
    scrollFrame = 0;
    if (!reducedMotion) {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    }
    drawWave(phase);
  };
  const scheduleProgress = () => {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateProgress);
  };
  const waveLoop = (now: number) => {
    phase = now;
    drawWave(now);
    if (footerVisible) waveFrame = window.requestAnimationFrame(waveLoop);
  };

  sizeWave();
  updateProgress();
  if (!reducedMotion) window.addEventListener("scroll", scheduleProgress, { passive: true });
  window.addEventListener("resize", () => { sizeWave(); updateProgress(); }, { passive: true });
  if (typeof ResizeObserver !== "undefined") new ResizeObserver(() => { sizeWave(); updateProgress(); }).observe(footer);

  if (!reducedMotion && supportsIO) {
    const footerObserver = new IntersectionObserver((entries) => {
      footerVisible = entries.some((entry) => entry.isIntersecting);
      if (footerVisible && !waveFrame) waveFrame = window.requestAnimationFrame(waveLoop);
      if (!footerVisible && waveFrame) {
        window.cancelAnimationFrame(waveFrame);
        waveFrame = 0;
      }
    });
    footerObserver.observe(footer);
  }
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
