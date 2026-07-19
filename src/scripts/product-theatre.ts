export function initProductTheatre() {
  document.querySelectorAll<HTMLElement>("[data-product-stage]").forEach((root) => {
    const options = [...root.querySelectorAll<HTMLButtonElement>("[data-product-option]")];
    const images = [...root.querySelectorAll<HTMLElement>("[data-product-image]")];
    const copies = [...root.querySelectorAll<HTMLElement>("[data-product-copy]")];

    const select = (option: HTMLButtonElement) => {
      const product = option.dataset.productOption ?? "750";
      root.dataset.product = product;
      options.forEach((button) => {
        const active = button === option;
        button.setAttribute("aria-selected", String(active));
        button.tabIndex = active ? 0 : -1;
      });
      images.forEach((image) => {
        const active = image.dataset.productImage === product;
        image.setAttribute("aria-hidden", String(!active));
        image.tabIndex = active ? 0 : -1;
      });
      copies.forEach((copy) => copy.setAttribute("aria-hidden", String(copy.dataset.productCopy !== product)));
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
