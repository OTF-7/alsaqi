export function initAudienceLens() {
  document.querySelectorAll<HTMLElement>("[data-audience-root]").forEach((root) => {
    const options = [...root.querySelectorAll<HTMLButtonElement>("[data-audience-option]")];
    const panels = [...root.querySelectorAll<HTMLElement>("[data-audience-panel]")];

    const select = (option: HTMLButtonElement) => {
      const audience = option.dataset.audienceOption ?? "consumer";
      root.dataset.audience = audience;
      options.forEach((button) => button.setAttribute("aria-selected", String(button === option)));
      panels.forEach((panel) => { panel.hidden = panel.dataset.audiencePanel !== audience; });
    };

    options.forEach((option, index) => {
      option.addEventListener("click", () => select(option));
      option.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
        event.preventDefault();
        const rtl = document.documentElement.dir === "rtl";
        const direction = (event.key === "ArrowRight" ? 1 : -1) * (rtl ? -1 : 1);
        const next = options[(index + direction + options.length) % options.length];
        next.focus();
        select(next);
      });
    });
  });
}
