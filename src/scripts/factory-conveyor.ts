export function initFactoryConveyor() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll<HTMLElement>("[data-factory-root]").forEach((root) => {
    const stages = [...root.querySelectorAll<HTMLElement>("[data-factory-stage]")];
    const images = [...root.querySelectorAll<HTMLElement>("[data-factory-image]")];
    if (reducedMotion || stages.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      root.style.setProperty("--factory-progress", progress.toFixed(3));
      const active = Math.min(stages.length - 1, Math.round(progress * (stages.length - 1)));
      stages.forEach((stage, index) => { stage.dataset.active = String(index === active); });
      images.forEach((image, index) => image.setAttribute("aria-hidden", String(index !== active)));
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
  });
}
