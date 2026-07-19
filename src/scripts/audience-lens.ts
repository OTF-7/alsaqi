export function initAudienceLens() {
  document.querySelectorAll<HTMLElement>("[data-audience-root]").forEach((root) => {
    const options = [...root.querySelectorAll<HTMLButtonElement>("[data-audience-option]")];
    const panels = [...root.querySelectorAll<HTMLElement>("[data-audience-panel]")];

    const select = (option: HTMLButtonElement) => {
      const audience = option.dataset.audienceOption ?? "consumer";
      root.dataset.audience = audience;
      options.forEach((button) => {
        const active = button === option;
        button.setAttribute("aria-selected", String(active));
        button.tabIndex = active ? 0 : -1;
      });
      panels.forEach((panel) => panel.setAttribute("aria-hidden", String(panel.dataset.audiencePanel !== audience)));
    };

    options.forEach((option, index) => {
      option.tabIndex = option.getAttribute("aria-selected") === "true" ? 0 : -1;
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
