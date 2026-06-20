export function initMarketRunway() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll<HTMLElement>("[data-market-root]").forEach((root) => {
    const phases = [...root.querySelectorAll<HTMLElement>("[data-market-phase]")];
    if (reducedMotion || phases.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      root.style.setProperty("--market-progress", progress.toFixed(3));
      const active = Math.min(phases.length - 1, Math.floor(progress * phases.length));
      phases.forEach((phase, index) => { phase.dataset.active = String(index === active); });
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
  });
}
