export function initLivingCurrent() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const roots = [...document.querySelectorAll<HTMLElement>("[data-current-root]")];
  if (roots.length === 0) return;

  let frame = 0;
  const update = () => {
    frame = 0;
    roots.forEach((root) => {
      const rect = root.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
      root.style.setProperty("--current-progress", progress.toFixed(3));
    });
  };
  const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  update();
}
